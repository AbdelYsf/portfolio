

interface props {
    darkMode:boolean
    setDarkMode:(arg:boolean)=>void
}
export const DarkModeToggle = (props:props) =>{
    return (
        <button
            className={`rounded-full w-10 h-10 p-2 focus:outline-none ${props.darkMode ? 'bg-[#1E293B]' : '#E4E7EB'}`}
            onClick={() => props.setDarkMode(!props.darkMode)}
        >

            {props.darkMode ? '☀️' : '🌙'}
        </button>
    );
}

