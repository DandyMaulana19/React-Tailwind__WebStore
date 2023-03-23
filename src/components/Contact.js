const Contact = () => {
  return (
    <>
        <div class="container flex flex-col justify-center pt-16 mx-auto bg-gray-200 bg-opacity-25 mt-60" id="contact-section">
            <div class="w-40 py-3 mx-auto mb-20 font-bold text-center uppercase rounded-full text-badgeContent3 bg-badgeBgContent3">Contact</div>
            <div class="container md:px-32">
                <div class="bg-center bg-cover bg-inTouchPattern">
                    <h2 class="pt-24 pb-16 text-4xl font-bold text-center text-gray-600 md:text-5xl">Get It Touch Now</h2>
                </div>
            </div>
            <div class="container mt-5 text-center md:mt-20 md:px-32">
                <p class="px-10 text-lg font-semibold leading-loose text-gray-500 md:text-2xl">We have developed a unique space where you can work and create. We thought of everything to the smallest detail. You will be able to conduct your business, conduct meetings, meetings.</p>
            </div>
            <div class="container flex justify-center mx-auto mt-32">
                <form action="#" class="">
                    <div class="grid grid-rows-1 gap-10 md:grid-cols-2">
                        <div class="relative w-96">
                            <input type="text" class="w-full px-10 py-4 bg-white rounded-full" placeholder="First Name"/>
                            <i class="absolute text-2xl text-gray-300 right-5 top-4 fa-solid fa-circle-user"></i>
                        </div>
                        <div class="relative w-96">
                            <input type="text" class="w-full px-10 py-4 bg-white rounded-full" placeholder="Last Name"/>
                            <i class="absolute text-2xl text-gray-300 right-5 top-4 fa-solid fa-circle-user"></i>
                        </div>
                        <div class="relative w-96">
                            <input type="text" class="w-full px-10 py-4 bg-white rounded-full" placeholder="Email Address"/>
                            <i class="absolute text-2xl text-gray-300 right-5 top-4 fa-solid fa-envelope"></i>
                        </div>
                        <div class="relative w-96">
                            <input type="text" class="w-full px-10 py-4 bg-white rounded-full" placeholder="Phone Number"/>
                            <i class="absolute text-2xl text-gray-300 right-5 top-4 fa-solid fa-phone"></i>
                        </div>
                    </div>
                    <div class="relative w-full mt-10">
                        <input type="text" class="w-full px-10 py-4 bg-white rounded-full" placeholder="Your Message"/>
                        <i class="absolute text-2xl text-gray-300 right-5 top-4 fa-solid fa-comment-dots"></i>
                    </div>
                    <div class="flex justify-center mt-10 mb-32">
                        <bottom class="px-10 py-5 text-lg text-center text-white rounded-full bg-badgeContent3 hover:cursor-pointer">Send Request</bottom>
                    </div>
                </form>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/js/all.min.js"></script>
    </>
  )
}

export default Contact