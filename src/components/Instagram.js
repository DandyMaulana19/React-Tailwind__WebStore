import Image1 from '../assets/image-1.png'
import Image2 from '../assets/image-2.png'
import Image3 from '../assets/image-3.png'
import Image4 from '../assets/image-4.png'
import Image5 from '../assets/image-5.png'
import Image6 from '../assets/image-6.png'
import Image7 from '../assets/image-7.png'
import Image8 from '../assets/image-8.png'

const Instagram = () => {
  return (
    <>
        <div class="container relative flex flex-col justify-center mx-auto mt-60" id="instagram-section">
            <div class="w-40 py-3 mx-auto mb-20 font-bold text-center uppercase rounded-full text-badgeContent2 bg-badgeBgContent2">Instagram </div>
            <div class="container md:px-32">
                <div class="bg-center bg-cover bg-instaPattern">
                    <h2 class="pt-40 text-4xl font-bold text-center text-gray-600 pb-28 md:text-5xl">Listen to Our Сustomers @house</h2>
                </div>
            </div>
            <div class="container grid grid-cols-3 gap-3 px-10 mt-10 md:grid-cols-4 md:gap-8 md:mt-48">
                <a href="" class="relative flex items-center justify-center w-full">
                    <img src={Image1} class="w-full" alt=""/>
                    <span class="absolute flex items-center justify-center w-20 h-20 bg-opacity-50 rounded-full bg-slate-800"><i class="text-2xl text-white fa-brands fa-instagram"></i></span>
                </a>
                <a href="" class="w-full">
                    <img src={Image2} class="w-full" alt=""/>
                </a>
                <a href="" class="w-full">
                    <img src={Image3} class="w-full" alt=""/>
                </a>
                <a href="" class="w-full">
                    <img src={Image4} class="w-full" alt=""/>
                </a>
                <a href="" class="w-full">
                    <img src={Image5} class="w-full" alt=""/>
                </a>
                <a href="" class="w-full">
                    <img src={Image6} class="w-full" alt=""/>
                </a>
                <a href="" class="w-full">
                    <img src={Image7} class="w-full" alt=""/>
                </a>
                <a href="" class="w-full">
                    <img src={Image8} class="w-full" alt=""/>
                </a>
            </div>
            <a href="#" class="absolute left-0 flex items-center justify-center w-12 h-12 bg-white rounded-full top-96 md:w-20 md:h-20 md:top-60"><i class="text-2xl text-gray-400 fa-solid fa-arrow-left"></i></a>
            <a href="#" class="absolute right-0 flex items-center justify-center w-12 h-12 bg-white rounded-full top-96 md:w-20 md:h-20 md:top-60"><i class="text-2xl text-gray-400 fa-solid fa-arrow-right"></i></a>
        </div>
    </>
  )
}

export default Instagram