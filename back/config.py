from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    # Telegram Bot
    BOT_TOKEN: str

    # Redis
    REDIS_HOST: str
    REDIS_PORT: int = 6379  # Redis по умолчанию работает на 6379
    REDIS_DB: int = 0

    # FastAPI Server
    WEBAPP_HOST: str = "0.0.0.0"  # Запуск на всех интерфейсах
    WEBAPP_PORT: int = 8000  # Порт FastAPI

    # NGROK / External Base URL
    BASE_URL: str  # Твой ngrok-адрес для вебхуков

    class Config:
        env_file = "../main.env"  # Явно указываем .env




model_config = SettingsConfigDict(
        env_file="main.env",
        env_file_encoding="utf-8",
        case_sensitive=True,
    )


settings = Settings()