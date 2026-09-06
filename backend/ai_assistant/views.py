import time
from datetime import date, datetime
from zoneinfo import ZoneInfo

from rest_framework.decorators import api_view
from rest_framework.response import Response

from analytics.models import AIRequest

from .services import AIProviderError, generate_ai_response


def log_ai_request(question, response_time, status):
    try:
        AIRequest.objects.create(
            question=question,
            response_time=response_time,
            status=status,
        )
    except Exception as error:
        print("AI ANALYTICS ERROR:", error)


@api_view(["POST"])
def chat(request):
    start_time = time.time()

    user_message = request.data.get("message", "")

    if not isinstance(user_message, str):
        return Response(
            {"error": "Message must be a string."},
            status=400,
        )

    user_message = user_message.strip()

    if not user_message:
        return Response(
            {"error": "Message is required."},
            status=400,
        )

    if len(user_message) > 2000:
        return Response(
            {
                "error": (
                    "Message is too long. "
                    "Please keep it under 2000 characters."
                )
            },
            status=400,
        )

    today = datetime.now(
        ZoneInfo("Asia/Kolkata")
    ).date()

    dob = date(2002, 3, 30)

    current_age = (
        today.year
        - dob.year
        - (
            (today.month, today.day)
            < (dob.month, dob.day)
        )
    )

    dynamic_context = f"""
CURRENT DATE:
{today.strftime("%d %B %Y")}

SUFIYAN'S CURRENT AGE:
{current_age} years

When asked for Sufiyan's current age, use the age above.
"""

    try:
        reply = generate_ai_response(
            user_message=user_message,
            dynamic_context=dynamic_context,
        )

        response_time = time.time() - start_time

        log_ai_request(
            question=user_message,
            response_time=response_time,
            status="success",
        )

        return Response(
            {
                "reply": reply,
            },
            status=200,
        )

    except AIProviderError as error:
        response_time = time.time() - start_time

        log_ai_request(
            question=user_message,
            response_time=response_time,
            status="failed",
        )

        if error.status_code == 401:
            return Response(
                {
                    "error": "AI service authentication failed."
                },
                status=502,
            )

        if error.status_code == 429:
            return Response(
                {
                    "error": (
                        "AI service rate limit reached. "
                        "Please try again later."
                    )
                },
                status=502,
            )

        return Response(
            {
                "error": "AI service is temporarily unavailable."
            },
            status=502,
        )

    except Exception as error:
        response_time = time.time() - start_time

        print("PORTFOLIO AI ERROR:", error)

        log_ai_request(
            question=user_message,
            response_time=response_time,
            status="failed",
        )

        return Response(
            {
                "error": "Unable to process the AI request right now."
            },
            status=500,
        )