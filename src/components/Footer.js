const Footer = () => {
  return (
    <>
        <div class="container mx-auto mt-20 border-t-2 md:mt-52" id="Footer-section">
            <div class="flex flex-col items-center py-28 md:flex-row md:justify-around">
                <div class="mb-10 brand-title md:mb-0">
                    <h1 class="text-3xl font-bold text-gray-600">Contructor</h1>
                </div>
                <div class="mb-10 menu md:mb-0">
                    <div class="grid grid-cols-3 gap-10 md:gap-5">
                        <a href="#" class="text-lg font-semibold text-gray-500 hover:text-badgeContent3">Home</a>
                        <a href="#deal-section" class="text-lg font-semibold text-gray-500 hover:text-badgeContent3">Gallery</a>
                        <a href="#service-section" class="text-lg font-semibold text-gray-500 hover:text-badgeContent3">Services</a>
                        <a href="#our-story-section" class="text-lg font-semibold text-gray-500 hover:text-badgeContent3">About</a>
                        <a href="#" class="text-lg font-semibold text-gray-500 hover:text-badgeContent3">Barbers</a>
                        <a href="#contact-section" class="text-lg font-semibold text-gray-500 hover:text-badgeContent3">Contacts</a>
                    </div>
                </div>
                <div class="leading-10 rating">
                    <div class="star-icon">
                        <i class="fa-solid fa-star text-badgeContent3"></i>
                        <i class="fa-solid fa-star text-badgeContent3"></i>
                        <i class="fa-solid fa-star text-badgeContent3"></i>
                        <i class="fa-solid fa-star text-badgeContent3"></i>
                        <i class="fa-solid fa-star text-badgeContent3"></i>
                    </div>
                <p class="font-semibold text-gray-500">5.244 Satisfied Сustomers <a href="" class="hover:text-badgeContent3"><i class="ml-5 text-gray-300 fa-solid fa-arrow-right"></i></a></p>
                </div>
            </div>
            <div class="flex items-center justify-around border-t-2 py-7">
                <p>© 2030 Company. All Rights Reserved.</p>
                <div class="flex space-x-5">
                    <a href="">Terms</a>
                    <a href="">Privacy</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer