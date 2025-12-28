import asyncio

from bot_instance import bot, dp, bot_storage_key
from command_handlers import ch_router
from start_menu import set_main_menu

from aiogram_dialog import setup_dialogs
from zeigen_dialog import zeigen_dialog
from dialogs import start_dialog, create_dialog


async def main():
    # стартовые действия
    dp.startup.register(set_main_menu)

    # инициализация FSM-хранилища
    await dp.storage.set_data(key=bot_storage_key, data={})

    # роутеры
    dp.include_router(ch_router)
    dp.include_router(start_dialog)
    dp.include_router(create_dialog)
    dp.include_router(zeigen_dialog)

    # dialogs
    setup_dialogs(dp)
    print("🤖 BOT STARTED")

    # старт бота
    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot, skip_updates=True)


if __name__ == "__main__":
    asyncio.run(main())
































# import asyncio
# import threading
# import uvicorn
# from my_fast_api import f_api
# from bot_instance import bot, dp, bot_storage_key
# from command_handlers import ch_router
# from start_menu import set_main_menu
# from aiogram_dialog import setup_dialogs
# from zeigen_dialog import zeigen_dialog
# from dialogs import start_dialog, create_dialog
#
#
# # ============================================
# # Запускаем FastAPI в отдельном потоке
# # ============================================
# def run_fastapi():
#     uvicorn.run(
#         "my_fast_api:f_api",
#         host="0.0.0.0",
#         port=8001,
#         reload=False,     # Важно! reload запрещён при запуске в thread
#         # log_level="info"
#     )
#
#
# # ============================================
# # Основная async-функция — БОТ
# # ============================================
# async def run_bot():
#     dp.startup.register(set_main_menu)
#     await dp.storage.set_data(key=bot_storage_key, data={})
#     dp.include_router(ch_router)
#     dp.include_router(start_dialog)
#     dp.include_router(create_dialog)
#     dp.include_router(zeigen_dialog)
#
#     await bot.delete_webhook(drop_pending_updates=True)
#     setup_dialogs(dp)
#     await dp.start_polling(bot, skip_updates=True)
#
#
# # ============================================
# # Точка входа
# # ============================================
# if __name__ == "__main__":
#
#     # Запускаем сервер FastAPI в отдельном daemon-потоке
#     api_thread = threading.Thread(target=run_fastapi, daemon=True)
#     api_thread.start()
#
#     # Запускаем Telegram-бота
#     asyncio.run(run_bot())
