
interface props {
    darkMode:boolean
}

export const Summary = (props:props)=>{

    return (
        < >
            <div className={` text-center sm:w-1/2 w-full font-serif font-bold ${props.darkMode ? 'text-teal-100' : ''}`}>

                 Hi there <span className="text-2xl">👋 </span>! I'm Abdellah EL YOUSSFI ALAOUI, a dedicated 🛠️ software crafter with a
                passion for 🚀 product engineering and an insatiable appetite for 📚 learning.
            </div>
        </>
    )
}