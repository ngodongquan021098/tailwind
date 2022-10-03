/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  variants: {
    hover: ({ after }) => after(["disabled"]),
    display: ['hover', 'focus', 'group-hover'],
  },
  theme: {
    extend: {
      height: {
        custom: "620px",
        irinaImg: "28px",
      },
      spacing: {
        "40-c": "40rem",
        "title-carousel": "10px 40px"
      },
      width: {
        irinaImg: "158px",
        "200-px": "250px",
        "400-px": "400px"
      },
      fontSize: {
        '4xl': ['32px', {
          lineHeight: '3rem'
        }]
      },
      keyframes: {
        'wobble-vertical': {
          '16.65%': {
            '-webkit-transform': 'translateY(8px)',
            transform: 'translateY(8px)',
          },
          '33.3%': {
            '-webkit-transform': 'translateY(-6px)',
            transform: 'translateY(-6px)',
          },
          '49.95%': {
            '-webkit-transform': 'translateY(4px)',
            transform: 'translateY(4px)',
          },
          '66.6%': {
            '-webkit-transform': 'translateY(-2px)',
            transform: 'translateY(-2px)',
          },
          '83.25%': {
            '-webkit-transform': 'translateY(1px)',
            transform: 'translateY(1px)',
          },
          '100%': {
            '-webkit-transform': 'translateY(0)',
            transform: 'translateY(0)',
          }
        },
        'exist-in': {
          '50%': {
            transform: 'translateY(30px)',
            opacity: 0.5,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'wobble-vertical': 'wobble-vertical',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'exist-in': 'exist-in'
      },
      backgroundImage: {
        'banner-ecommerce': "url('../public/img-fashion/plugins_bg.jpg')",
        'banner-integral': "url('../public/img-fashion/bottom.jpeg')",
      },
    },
  },
  plugins: [],
}
