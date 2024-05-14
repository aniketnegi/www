import { ChevronDown } from "lucide-react";
// handle the mobile nav menu here instead of Astro
// TODO: is this good practice??
// very sketchy imo
// doing this because i don't want to make the entire nav a react component, and instead only the more button. is that wise, or is my resistance to ReactJS futile?
// am i getting performance, bundle size benefits or is this in vain?


// so many hacks
const css: string = `
    button {
        font-family: "Manrope Variable";
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.02rem;
    }`

function NavMoreButton() {

    // const [toggled, setToggled] = useState(false);

    function toggle() {
        // setToggled(!toggled);
    }
    return (
        <>
            {/* ml-4 is react and astro weird behaviour ke liye hack */}
            <button
                className="ml-4 flex flex-row justify-between items-center space-x-1 text-LM-Nav-Unselected hover:text-LM-Nav-Selected"
                onClick={toggle}
            ><span>more</span>
                <ChevronDown className="pt-0.5" /></button>

            {/* {toggled && <div className="bg-LM-Background h-screen w-screen z-100" />} */}

            <style>{css}</style>
        </>
    )
}

export default NavMoreButton;
