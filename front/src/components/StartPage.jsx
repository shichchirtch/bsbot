import StartButton from "./StartButton.jsx";

export default function StartPage() {
    const wa = window.Telegram?.WebApp
    return (<div
            className="min-h-[50svh]
        w-full
        flex
        flex-col
        items-center
        bg-gradient-to-b
        from-zinc-800
        to-black
        px-6
        pt-8"
        >
            <div
                className="
            text-center
            text-4xl
            font-bold
            p-6
            drop-shadow-[0_0_2px_white]
        "
            >
                Burgeschaft Check
            </div>

            <p className="
        text-neutral-200
        text-2xl
        font-sans
        tracking-wide
        mb-10
        text-center
    "
            >Guten Tag, {wa?.initDataUnsafe?.user?.first_name}</p>
            <StartButton/>
        </div>
    )
}