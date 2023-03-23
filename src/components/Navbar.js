// import { Link } from "react-router-dom"

const navbar = () => {
    return(
        <>
            <div class="mb-32 bg-center bg-cover bg-heroPattern">
                <div class="container relative mx-auto text-white">
                    <nav class="flex items-center justify-between p-6 py-5 md:py-12 ">
                        <div class="brand-logo">
                            <h1 class="font-bold"><i class="mr-6 fa-solid fa-bars"></i> Constructor</h1>
                        </div>
                        <div class="hidden text-gray-300 md:block">
                            <i class="fa-solid fa-magnifying-glass "></i>
                            <span class="ml-6">Search</span>
                        </div>
                        <div class="hidden space-x-12 md:flex">
                            <a href="#our-story-section" class="hover:text-gray-300">About</a>
                            <a href="#service-section" class="hover:text-gray-300">Service</a>
                            <a href="#deal-section" class="hover:text-gray-300 hover:scroll-smooth">Reviews</a>
                            <a href="#contact-section" class="hover:text-gray-300">Contact</a>
                        </div>
                        <div class="md:hidden">
                            <a href="" class="hover:text-orange-500">Menu</a>
                        </div>
                        <div>
                            <a href="" class="hover:text-orange-500">Get In Touch</a>
                        </div>
                    </nav>
                </div>
                <div class="container flex flex-col items-center justify-center mx-auto" id="hero-section">
                    <div class="w-40 py-3 mt-32 mb-20 text-sm font-bold text-center text-white uppercase rounded-full bg-badgeContent1">Real Estate</div>
                    <h1 class="py-32 mb-12 text-6xl text-center text-white md:text-7xl">Invest on Real Estate with <br/>Our Company</h1>
                    <div class="grid grid-rows-3 mt-12 mb-32 space-x-12 leading-10 md:grid-cols-3">
                        <div class="font-semibold text-left text-white"><i class="mr-4 fa-solid fa-paper-plane"></i> 225 S 1st St Brooklyn, NY</div>
                        <div class="font-semibold text-left text-white"><i class="mr-4 fa-solid fa-phone"></i> (929) 356-0147 </div>
                        <div class="font-semibold text-white"><i class="mr-4 fa-solid fa-envelope"></i> hotel@gmail.com </div>
                    </div>
                <a href="#" class="px-6 py-4 -mb-6 font-light text-black bg-white rounded-full">Show More</a>
                </div>
            </div>
        </>
    )
}
export default navbar