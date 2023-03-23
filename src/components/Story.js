const Story = () => {
  return (
    <>
        <div class="container w-full pt-16 mx-auto mt-60" id="our-story-section">
            <div class="w-40 py-3 mx-auto mb-20 font-bold text-center uppercase rounded-full text-badgeContent2 bg-badgeBgContent2">Our Story</div>
            <div class="container md:px-32">
                <div class="bg-center bg-cover bg-ourStoryPattern">
                    <h2 class="w-full pt-20 pb-12 text-4xl font-bold text-center text-gray-600 md:text-5xl">We Will Find the Best Option</h2>
                </div>
            </div>
            <div class="container px-10 mt-5 text-center md:px-32 md:mt-20">
                <p class="text-lg font-semibold text-gray-500 md:text-2xl">Real estate is "property consisting of land and the buildings on it, along with its natural resources such as crops, <br className="hidden md:block"/> minerals or water, immovable property of this nature; an interest vested in this (also) an item of real property, <br className="hidden md:block"/>(more generally) buildings or housing in general.</p>
            </div>
            <div class="container flex flex-col gap-10 px-10 mx-auto mt-20 md:flex-row">
                <div class="w-full text-center bg-white rounded-md md:w-1/3">
                    <h3 class="pt-10 text-4xl font-semibold text-gray-600">15 Years</h3>
                    <p class="pb-10 mt-6 text-2xl text-gray-400">In Business</p>
                </div>
                <div class="w-full text-center bg-white rounded-md md:w-1/3">
                    <h3 class="pt-10 text-4xl font-semibold text-gray-600">$1 Billion</h3>
                    <p class="pb-10 mt-6 text-2xl text-gray-400">Property Brokered</p>
                </div>
                <div class="w-full text-center bg-white rounded-md md:w-1/3">
                    <h3 class="pt-10 text-4xl font-semibold text-gray-600">10,000</h3>
                    <p class="pb-10 mt-6 text-2xl text-gray-400">Transactions</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Story