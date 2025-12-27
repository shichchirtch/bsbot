function Header() {
    return (
        <header className='bg-zinc-600
        px-2 py-3 flex justify-between
        items-center
        shadow-md'>
            <p className='text-2xl
            font-semibold text-cyan-950
            whitespace-nowrap
            drop-shadow-[0_0_2px_white]'>Herzlich  Willkommen !  </p>
            <img className='h-10 ' src='/logobot.png' alt='logo'/>
        </header>
    );
}

export default Header;