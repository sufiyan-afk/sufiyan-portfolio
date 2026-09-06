import requests

from django.conf import settings

from .prompts import PORTFOLIO_SYSTEM_PROMPT


OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
OPENROUTER_MODEL = "google/gemini-2.5-flash"


class AIProviderError(Exception):
    def __init__(self, message, status_code=None):
        super().__init__(message)
        self.status_code = status_code


def generate_ai_response(user_message, dynamic_context=""):
    api_key = getattr(settings, "OPENROUTER_API_KEY", None)

    if not api_key:
        raise AIProviderError(
            "AI provider is not configured.",
            status_code=500,
        )

    system_prompt = PORTFOLIO_SYSTEM_PROMPT

    if dynamic_context:
        system_prompt += "\n\n" + dynamic_context

    response = requests.post(
        OPENROUTER_URL,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "HTTP-Referer": "https://sufiyan-portfolio-teal.vercel.app",
            "X-Title": "Sufiyan Tal Portfolio",
        },
        json={
            "model": OPENROUTER_MODEL,
            "messages": [
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": user_message,
                },
            ],
            "temperature": 0.4,
            "max_tokens": 800,
        },
        timeout=30,
    )

    if response.status_code != 200:
        try:
            provider_data = response.json()
        except ValueError:
            provider_data = {
                "error": response.text[:500]
            }

        print(
            "OPENROUTER ERROR:",
            response.status_code,
            provider_data,
        )

        raise AIProviderError(
            "AI provider request failed.",
            status_code=response.status_code,
        )

    try:
        data = response.json()
    except ValueError:
        raise AIProviderError(
            "AI provider returned invalid JSON.",
            status_code=502,
        )

    try:
        reply = data["choices"][0]["message"]["content"]
    except (KeyError, IndexError, TypeError):
        print("OPENROUTER INVALID RESPONSE:", data)

        raise AIProviderError(
            "AI provider returned an invalid response.",
            status_code=502,
        )

    if not isinstance(reply, str) or not reply.strip():
        raise AIProviderError(
            "AI provider returned an empty response.",
            status_code=502,
        )

    return reply.strip()