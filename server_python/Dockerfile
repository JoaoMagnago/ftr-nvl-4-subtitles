ARG PYTHON_VERSION=3.13.2
FROM python:${PYTHON_VERSION}-slim as base

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

ENV PYTHONUNBUFFERED=1

WORKDIR /APP

# Install only dependencies
COPY requirements.txt .
RUN uv pip install --no-cache-dir -r requirements.txt

# Copy the app code (but .dockerignore prevents .venv)
COPY . .

EXPOSE 5000

CMD ["uv", "run", "--", "flask", "--app", "main.py", "run", "--host=0.0.0.0"]
