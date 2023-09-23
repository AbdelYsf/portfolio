import {IOptions, RecursivePartial} from "tsparticles-engine";

export const darkModeOptions: RecursivePartial<IOptions> = {
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
                quantity: 10,
            },
            repulse: {
                distance: 200,
                duration: 0.9,
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
}
export const lightModeOptions: RecursivePartial<IOptions> = {
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
                quantity: 6,
            },
            repulse: {
                distance: 200,
                duration: 0.9,
            },
        },
    },
    particles: {
        color: {
            value: "#131111",
        },
        links: {
            color: "#131111",
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
}