/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroPattern: "url('/src/assets/hero.png')",
        ourStoryPattern: "url('/src/assets/bg-OUR STORY.png')",
        servicePattern: "url('/src/assets/bg-SERVICES.png')",
        instaPattern: "url('/src/assets/bg-INSTA.png')",
        inTouchPattern: "url('/src/assets/bg-IN TOUCH.png')",
        
      },
      backgroundColor: {
        avatar1: "rgba(136, 51, 255, 0.3)",
        avatar2: "rgba(204, 116, 41, 0.3)",
        avatar3: "rgba(230, 46, 123, 0.3)",
      },
      colors: {
        badgeContent1 : '#FF6633',
        badgeBgContent2 : 'rgba(41, 204, 57, 0.1)',
        badgeContent2 : '#29CC39',
        badgeContent3 : '#3361FF',
        badgeBgContent3 : 'rgba(51, 97, 255, 0.1)',
        badgeContent4 : '#FF6633',
        badgeBgContent4 : 'rgba(255, 102, 51, 0.1)',
      }
    },
  },
  plugins: [],
}