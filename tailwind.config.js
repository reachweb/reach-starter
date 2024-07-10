/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        screens: {
            'md': '720px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1440px',
            '3xl': '1680px',
            'retina': '1921px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '0.75rem',
                lg: '1rem',
                xl: '3rem',
            },
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            serif: ['Antonio', 'serif'],
        },
        extend: {
            colors: {

            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'moveup': 'MoveUpInit 0.25s forwards, MoveUpEnd 0.25s forwards 0.25s',
                'moveupend': 'MoveUpEnd 0.25s forwards 0.25s',
            },
            keyframes: {
                MoveUpInit: {
                  '100%': { transform: 'translate3d(0, -25%, 0)', opacity: 0 },
                },
                MoveUpEnd: {
                  '0%': { transform: 'translate3d(0,25%,0)', opacity: 0 },
                  '100%': { transform: 'translate3d(0,0,0)', opacity: 1 },
                },
            },
        }
    },

    plugins: [
        //require("./fontVariationSettingsPlugin.js"),
        require("@tailwindcss/forms")({
            strategy: 'class'
        }),
    ],
};
