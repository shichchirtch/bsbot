import {useNavigate} from "react-router-dom";


function ShowButton() {
    // const { setUser } = useContext(UserContextJS);
    const navigate = useNavigate();

    function handleShow() {
        navigate("/zeigteingeben");     // переходим на третью  страницу
    }


    return (
        <button className="w-full
                max-w-xs
                py-4
                rounded-xl

                bg-gradient-to-br
                from-slate-300
                via-slate-400
                to-slate-600

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

    hover:from-teal-100
    hover:via-teal-500
    hover:to-teal-800

    active:scale-[0.98]
    active:from-teal-300
    active:to-teal-600
    "
                onClick={handleShow}
        >Kuck meine Beiträge</button>
    )
}

export default ShowButton