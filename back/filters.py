from aiogram.types import Message
from aiogram.filters import BaseFilter
from my_fast_api import get_redis



class PRE_START(BaseFilter):
    async def __call__(self, message: Message):
        user_id = str(message.from_user.id)
        r = await get_redis()
        key_profile = f"user:{user_id}:profile"
        exists = await r.exists(key_profile)
        if not exists:
            return True
        return False

class TEXT_FILTER(BaseFilter):
    async def __call__(self, message: Message):
        print('TEXT_FILTER works')
        if message.text.startswith('s'):
            return True
        return False


class IS_ADMIN(BaseFilter):
    async def __call__(self, message: Message):
        if message.from_user.id == 6685637602:
            return True
        return False