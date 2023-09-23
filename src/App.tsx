import './App.css'
import {TypeAnimation} from "react-type-animation";
import {useState} from "react";
import {NavBar} from "./NavBar.tsx";
import {Summary} from "./Summary.tsx";
import {SocialMedia} from "./SocialMedia.tsx";


function App() {
    const [darkMode, setDarkMode] = useState(false);


    return (
        <div className="w-screen h-screen no-scrollbar ">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

            <div className={`h-full w-full flex flex-col justify-center items-center  ${darkMode ? 'bg-[#111827]' : 'bg-[#FFFFFF]'}`}>
                <div className="bg-gray-200 p-[6px]   bg-gradient-to-r  from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full">
                <div >
                    <img
                        src="src/assets/my-linkedin-image.jpeg"
                        alt="my-image"
                        className="mx-auto  h-40 w-40 rounded-full"
                    />
                </div>
                </div>
                <div className="text-center">
                    <span className={`text-4xl font-extrabold  font-serif ${darkMode ? 'text-teal-100' : ''}`}>
                        I'm </span> <span className={`font-serif
                        font-extrabold text-2xl ${darkMode ? 'text-teal-100' : ''}`}> A </span>
                    <span
                        className="font-serif
                        font-extrabold
                        text-transparent
                         text-2xl bg-clip-text
                          bg-gradient-to-r
                          from-blue-500
                          to-amber-700">
                          <TypeAnimation
                              sequence={[
                                  'PRODUCT ENGINEER',
                                  2000,
                                  'SOFTWARE CRAFTER',
                                  2000,
                                  'CONTINUOUS LEARNER ',
                                  2000,
                                  () => {
                                      console.log('Sequence completed');
                                  },
                              ]}
                              wrapper="p"
                              cursor={true}
                              repeat={Infinity}
                              style={{display: 'inline-block'}}
                          />
                     </span>

                </div>

                <Summary darkMode={darkMode}/>

                <SocialMedia darkMode={darkMode}/>

            </div>


        </div>
    )
}

export default App
