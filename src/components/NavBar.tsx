import {DarkModeToggle} from "./DarkModeToggle.tsx";

interface props {
    darkMode:boolean
    setDarkMode:(arg:boolean)=>void
}
export const NavBar = (props:props)=>{

    return (
        <header className={`flex sticky top-0 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-4 dark:bg-gray-800 ${props.darkMode ? 'bg-[#111827]' : 'bg-white'}`}>
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <a className="flex-none text-xl font-semibold dark:text-white" href="#"></a>
                <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
                    <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" >
                        <DarkModeToggle darkMode={props.darkMode} setDarkMode={props.setDarkMode}></DarkModeToggle>
                    </a>
                </div>
            </nav>
        </header>
    )
}