import Avatar1 from '../assets/avatar-1.png'
import Avatar2 from '../assets/avatar-2.png'
import Avatar3 from '../assets/avatar-3.png'

const Servis = () => {
  return (
    <>
        <div class="container flex flex-col justify-center mx-auto mt-60" id="service-section">
            <div class="w-40 py-3 mx-auto mb-20 font-bold text-center uppercase rounded-full text-badgeContent3 bg-badgeBgContent3">Services</div>
            <div class="container md:px-32">
                <div class="bg-center bg-cover bg-servicePattern">
                    <h2 class="pt-20 pb-12 text-4xl font-bold text-center text-gray-600 md:text-5xl">Services for Maximum Efficiency</h2>
                </div>
            </div>
            <div class="container px-10 mt-5 text-center md:px-32 md:mt-20">
                <p class="text-lg font-semibold leading-loose text-gray-500 md:text-2xl">Real estate is property consisting of land and the We have developed a unique space where you can work and create. We thought of everything to the smallest <br/> detail. You will be able to conduct your business, conduct meetings, meetings.</p>
            </div>
            <div class="container grid grid-rows-1 gap-5 px-10 mx-auto mt-20 md:grid-cols-3">
                <div class="avatar1">
                    <div class="p-10 bg-white shadow-sm rounded-xl">
                        <p class="text-lg font-semibold text-gray-400">Thank you very much for the house found. This is an ideal option for our family at the location and price. The company employs real professionals who will always</p>
                    </div>
                    <div class="flex items-center mt-5 mb-14 md:mt-10">
                        <div class="mr-10 overflow-hidden rounded-full bg-avatar1">
                            <img src={Avatar1} class="w-20" alt=""/>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-500">Herbert Lindsey</h3>
                            <h3 class="text-lg font-bold text-gray-400">New York, USA</h3>
                        </div>
                    </div>
                </div>
                <div class="avatar2">
                    <div class="p-10 bg-white shadow-sm rounded-xl">
                        <p class="text-lg font-semibold text-gray-400">A gentleman from New York discovered what he calls an “oversight” on the part of 99.9% of all marketers that allows him to get otherwise paid-for advertising at Google as well as all other search engines.</p>
                    </div>
                    <div class="flex items-center mt-5 mb-14 md:mt-10">
                        <div class="mr-10 overflow-hidden rounded-full bg-avatar2">
                            <img src={Avatar2} class="w-20 " alt=""/>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-500">Noah Russell</h3>
                            <h3 class="text-lg font-bold text-gray-400">New York, USA</h3>
                        </div>
                    </div>
                </div>
                <div class="avatar3">
                    <div class="p-10 bg-white shadow-sm rounded-xl">
                        <p class="text-lg font-semibold text-gray-400">For many of us, our very first experience of learning about the celestial bodies begins when we saw our first full moon in the sky. It is truly a magnificent view even</p>
                    </div>
                    <div class="flex items-center mt-5 mb-14 md:mt-10">
                        <div class="mr-10 overflow-hidden rounded-full bg-avatar3">
                            <img src={Avatar3} class="w-20 " alt=""/>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-500">Nellie Griffith</h3>
                            <h3 class="text-lg font-bold text-gray-400">New York, USA</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Servis