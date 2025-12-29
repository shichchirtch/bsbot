import {useNavigate} from "react-router-dom";
import {UserContext} from "../context/userContextJS.js";
import {useContext} from "react";


function StartButton() {
    // const navigate = useNavigate();
    const {user, setMonaten} = useContext(UserContext);
    console.log("user", user.id);

    async function handleStart() {
        console.log("user1234", user.id);
        console.log("🟡 START CLICK");

    try {
        const res = await fetch("https://bsbot.org/api/start-test", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: user?.id || "NO_ID" })
        });

        console.log("🟢 RESPONSE STATUS", res.status);

        const data = await res.json();
        console.log("🟢 RESPONSE DATA", data);

        alert("OK: " + data.message);

    } catch (err) {
        console.error("🔴 START TEST ERROR", err);
        alert("ERROR");
    }

        // if (!user?.id) return;
        // const userId = user.id
        // try {
        //     const res = await fetch("https://bsbot.org/api/get-user-months", {
        //         method: "POST",
        //         headers: {"Content-Type": "application/json"},
        //         body: JSON.stringify({user_id: user.id})
        //     });
        //
        //     const data = await res.json();
        //
        //     console.log("📩 Получены месяцы:", data);
        //     sessionStorage.setItem("telegramUserId", userId);
        //
        //     // Загружаем месяцы в контекст
        //     setMonaten(data.monaten || []);
        //
        //     // Переход только после загрузки
        //     navigate("/addmonaten");
        //
        // } catch (err) {
        //     console.error("Ошибка загрузки месяцев:", err);
        // }
    }


    return (
        <button className="
        w-full
        max-w-xs
        py-4
        rounded-xl

        bg-gradient-to-br
        from-slate-300
        via-slate-400
        to-slate-700

        text-neutral-900
        text-lg
        font-semibold
        tracking-wide
        font-sans

        shadow-md
        shadow-black/30

        transition-all
        duration-300
        ease-out

        hover:from-teal-200
        hover:via-teal-400
        hover:to-teal-700

        active:scale-[0.98]
        active:from-teal-500
        active:to-teal-600
    "
                onClick={handleStart}
        >Start Mein Weg !</button>
    )
}

export default StartButton