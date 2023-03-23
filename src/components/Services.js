import Icon1 from '../assets/icon-home.png'
import Icon2 from '../assets/icon-apatament.png'
import Icon3 from '../assets/icon-office.png'
import Icon4 from '../assets/icon-warehouse.png'
import Icon5 from '../assets/icon-parking.png'

const Services = () => {
  return (
    <>
        <div class="container flex pt-16 flex-col justify-center mx-auto mt-60" id="service-section">
            <div class="w-40 py-3 mx-auto mb-20 font-bold text-center uppercase rounded-full text-badgeContent3 bg-badgeBgContent3">Services</div>
            <div class="container md:px-32">
                <div class="bg-center bg-cover bg-servicePattern">
                    <h2 class="pt-20 pb-12 text-4xl font-bold text-center text-gray-600 md:text-5xl">Services for Maximum Efficiency</h2>
                </div>
            </div>
            <div class="container px-10 mt-5 text-center md:px-32 md:mt-20">
                <p class="text-lg font-semibold leading-loose text-gray-500 md:text-2xl">Real estate is property consisting of land and the We have developed a unique space where you can work and create. We thought of everything to the smallest <br/> detail. You will be able to conduct your business, conduct meetings, meetings.</p>
            </div>
            <div class="container flex flex-col gap-10 mx-auto mt-20 md:justify-evenly md:flex-row">
                <div class="flex justify-center mb-24 md:mb-28">
                    <div class="relative flex items-center justify-center w-48 h-48 bg-white rounded-full shadow-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-500">
                        <img src={Icon1} class="w-20" alt="Icon Home" />
                        <h4 class="absolute bottom-0 text-2xl font-semibold text-center -mb-14 md:-mb-20">House</h4>
                    </div>
                </div>
            <div class="flex justify-center mb-32">
                <div class="relative flex items-center justify-center w-48 h-48 bg-white rounded-full shadow-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-500">
                    <img src={Icon2} class="w-20" alt="Icon Home" />
                    <h4 class="absolute bottom-0 text-2xl font-semibold text-center -mb-14 md:-mb-20">Apartment</h4>
                </div>
            </div>
            <div class="flex justify-center mb-32">
                <div class="relative flex items-center justify-center w-48 h-48 bg-white rounded-full shadow-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-500">
                    <img src={Icon3} class="w-20" alt="Icon Home" />
                    <h4 class="absolute bottom-0 text-2xl font-semibold text-center -mb-14 md:-mb-20">Office</h4>
                </div>
            </div>
            <div class="flex justify-center mb-32">
                <div class="relative flex items-center justify-center w-48 h-48 bg-white rounded-full shadow-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-500">
                    <img src={Icon4} class="w-20" alt="Icon Home" />
                    <h4 class="absolute bottom-0 text-2xl font-semibold text-center -mb-14 md:-mb-20">Warehouse</h4>
                </div>
            </div>
            <div class="flex justify-center mb-32">
                <div class="relative flex items-center justify-center w-48 h-48 bg-white rounded-full shadow-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-500">
                    <img src={Icon5} class="w-16" alt="Icon Home" />
                    <h4 class="absolute bottom-0 text-2xl font-semibold text-center -mb-14 md:-mb-20">Parking</h4>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Services