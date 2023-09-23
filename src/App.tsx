import './App.css'
import {TypeAnimation} from "react-type-animation";
import {useCallback, useState} from "react";
import {NavBar} from "./NavBar.tsx";
import {Summary} from "./Summary.tsx";
import {SocialMedia} from "./SocialMedia.tsx";
import {loadFull} from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";


function App() {
    const [darkMode, setDarkMode] = useState(true);

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);

    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {


                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "split",
                            },

                            random: true,
                            speed: 0.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1500,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "square",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },

                    },
                    detectRetina: true,
                }}
            />
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
        </>
    )
}

export default App
