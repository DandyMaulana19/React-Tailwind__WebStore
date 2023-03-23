import Card1 from '../assets/Image-card-1.png'
import Card2 from '../assets/Image-card-2.png'
import Card3 from '../assets/Image-card-3.png'
import Card4 from '../assets/Image-card-4.png'
import Card5 from '../assets/Image-card-5.png'
import Card6 from '../assets/Image-card-6.png'
import Card7 from '../assets/Image-card-7.png'
import Card8 from '../assets/Image-card-8.png'
import Card9 from '../assets/Image-card-9.png'

const Property = () => {
  return (
    <>
        <div class="container flex flex-col pt-16 justify-center mx-auto mt-60" id="deal-section">
            <div class="w-40 py-3 mx-auto mb-20 font-bold text-center uppercase rounded-full text-badgeContent4 bg-badgeBgContent4">Deals</div>
                <div class="container md:px-32">
                    <div class="bg-center bg-cover bg-ourStoryPattern">
                        <h2 class="pt-20 pb-12 text-5xl font-bold text-center text-gray-600">Our Best Deals for Today</h2>
                    </div>
                </div>
            <div class="container px-10 mt-5 text-center md:px-32 md:mt-20">
                <p class="text-lg font-semibold leading-loose text-gray-500 md:text-2xl">Real estate is property consisting of land and the Real estate is property consisting of land and the buildings on it, along with its natural resources such ascrops, minerals or water, immovable property of this nature.</p>
            </div>
            <div class="container flex flex-col justify-center my-20 px-5 overflow-auto md:my-40 md:px-60">
                <div class="flex justify-center space-x-16 md:space-x-20">
                    <a href="#" class="text-xl font-semibold text-gray-500 md:text-2xl hover:text-orange-500 hover:border-b-4 hover:border-orange-500 active">House</a>
                    <a href="#" class="text-xl font-semibold text-gray-500 md:text-2xl hover:text-orange-500 hover:border-b-4 hover:border-orange-500">Apartment</a>
                    <a href="#" class="text-xl font-semibold text-gray-500 md:text-2xl hover:text-orange-500 hover:border-b-4 hover:border-orange-500">Office</a>
                    <a href="#" class="text-xl font-semibold text-gray-500 md:text-2xl hover:text-orange-500 hover:border-b-4 hover:border-orange-500">Warehouse</a>
                    <a href="#" class="text-xl font-semibold text-gray-500 md:text-2xl hover:text-orange-500 hover:border-b-4 hover:border-orange-500">Parking</a>
                    <a href="#" class="text-xl font-semibold text-gray-500 md:text-2xl hover:text-orange-500 hover:border-b-4 hover:border-orange-500">Commercial</a>
                </div>
            </div>
            <div class="container px-10 mx-auto">
                <div class="grid grid-rows-1 gap-5 md:grid-cols-3">
                    <a href="" className="block pt-20">
                        <div class="relative w-full mb-3 bg-white rounded-lg hover:drop-shadow-xl">
                            <img src={Card1} class="w-full" alt="Card 1"/>
                            <div class="p-8">
                                <h3 class="mb-5 text-lg font-bold text-gray-500">Modern Glass House</h3>
                                <h3 class="mb-5 text-lg font-bold text-gray-500">$ 1,625,000</h3>
                                <p class="mb-5 text-lg font-semibold text-gray-400">14 Patrick Brem Ct. Mahwah, NJ07430</p>
                                <p class="text-lg font-semibold text-gray-400">3 Beds - 2 baths - 3,450 sqft</p>
                            </div>
                            <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-5">
                                <span class="font-semibold text-white"><i class="mr-4 fa-solid fa-eye"></i>64</span>
                            </div>
                            <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-32">
                                <span class="font-semibold text-white">900</span>
                            </div>
                            <div class="absolute px-3.5 py-2 rounded-full icon bg-badgeContent1 top-10 right-5">
                                <span class="text-lg font-semibold text-white"><i class="fa-solid fa-thumbs-up"></i></span>
                            </div>
                        </div>
                    </a>
                <a href="" class="block">
                    <div class="relative w-full mb-3 bg-white rounded-lg hover:drop-shadow-xl">
                        <img src={Card2} class="w-full" alt="Card 1"/>
                        <div class="p-8">
                            <h3 class="mb-5 text-lg font-bold text-gray-500">House on the Lake</h3>
                            <h3 class="mb-5 text-lg font-bold text-gray-500">$ 225,000</h3>
                            <p class="mb-5 text-lg font-semibold text-gray-400">14 Patrick Brem Ct. Mahwah, NJ07430</p>
                            <p class="text-lg font-semibold text-gray-400">3 Beds - 2 baths - 3,450 sqft</p>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-5">
                            <span class="font-semibold text-white"><i class="mr-4 fa-solid fa-eye"></i>65</span>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-32">
                            <span class="font-semibold text-white">1995</span>
                        </div>
                    </div>
                </a>
                <a href="" class="block md:pt-20">
                    <div class="relative w-full mb-3 bg-white rounded-lg hover:drop-shadow-xl">
                        <img src={Card3} class="w-full" alt="Card 1"/>
                        <div class="p-8">
                            <h3 class="mb-5 text-lg font-bold text-gray-500">Townhouse in the center</h3>
                            <h3 class="mb-5 text-lg font-bold text-gray-500">$ 225,000</h3>
                            <p class="mb-5 text-lg font-semibold text-gray-400">14 Patrick Brem Ct. Mahwah, NJ07430</p>
                            <p class="text-lg font-semibold text-gray-400">3 Beds - 2 baths - 3,450 sqft</p>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-5">
                            <span class="font-semibold text-white"><i class="mr-4 fa-solid fa-eye"></i>65</span>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-32">
                            <span class="font-semibold text-white">1995</span>
                        </div>
                    </div>
                </a>
                <a href="" class="block">
                    <div class="relative w-full mb-3 bg-white rounded-lg hover:drop-shadow-xl">
                        <img src={Card4} class="w-full" alt="Card 1"/>
                        <div class="p-8">
                            <h3 class="mb-5 text-lg font-bold text-gray-500">Townhouse in the center</h3>
                            <h3 class="mb-5 text-lg font-bold text-gray-500">$ 225,000</h3>
                            <p class="mb-5 text-lg font-semibold text-gray-400">9832 Hidden Valley Way</p>
                            <p class="text-lg font-semibold text-gray-400">2 Beds - 1 baths - 2,300 sqft</p>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-5">
                            <span class="font-semibold text-white"><i class="mr-4 fa-solid fa-eye"></i>65</span>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-32">
                            <span class="font-semibold text-white">1995</span>
                        </div>
                    </div>
                </a>
                <a href="" class="block md:-mt-20">
                    <div class="relative w-full mb-3 bg-white rounded-lg hover:drop-shadow-xl">
                        <img src={Card5} class="w-full" alt="Card 1"/>
                        <div class="p-8">
                            <h3 class="mb-5 text-lg font-bold text-gray-500">Townhouse in the center</h3>
                            <h3 class="mb-5 text-lg font-bold text-gray-500">$ 225,000</h3>
                            <p class="mb-5 text-lg font-semibold text-gray-400">9832 Hidden Valley Way</p>
                            <p class="text-lg font-semibold text-gray-400">2 Beds - 1 baths - 2,300 sqft</p>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-5">
                            <span class="font-semibold text-white"><i class="mr-4 fa-solid fa-eye"></i>65</span>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-32">
                            <span class="font-semibold text-white">1995</span>
                        </div>
                    </div>
                </a>
                <a href="" class="block">
                    <div class="relative w-full mb-3 bg-white rounded-lg hover:drop-shadow-xl">
                        <img src={Card6} class="w-full" alt="Card 1"/>
                        <div class="p-8">
                            <h3 class="mb-5 text-lg font-bold text-gray-500">Townhouse in the center</h3>
                            <h3 class="mb-5 text-lg font-bold text-gray-500">$ 225,000</h3>
                            <p class="mb-5 text-lg font-semibold text-gray-400">9832 Hidden Valley Way</p>
                            <p class="text-lg font-semibold text-gray-400">2 Beds - 1 baths - 2,300 sqft</p>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-5">
                            <span class="font-semibold text-white"><i class="mr-4 fa-solid fa-eye"></i>65</span>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-32">
                            <span class="font-semibold text-white">1995</span>
                        </div>
                    </div>
                </a>
                <a href="" class="block">
                    <div class="relative w-full mb-3 bg-white rounded-lg hover:drop-shadow-xl">
                        <img src={Card7} class="w-full" alt="Card 1"/>
                        <div class="p-8">
                            <h3 class="mb-5 text-lg font-bold text-gray-500">Townhouse in the center</h3>
                            <h3 class="mb-5 text-lg font-bold text-gray-500">$ 225,000</h3>
                            <p class="mb-5 text-lg font-semibold text-gray-400">9832 Hidden Valley Way</p>
                            <p class="text-lg font-semibold text-gray-400">2 Beds - 1 baths - 2,300 sqft</p>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-5">
                            <span class="font-semibold text-white"><i class="mr-4 fa-solid fa-eye"></i>65</span>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-32">
                            <span class="font-semibold text-white">1995</span>
                        </div>
                    </div>
                </a>
                <a href="" class="block md:-mt-20">
                    <div class="relative w-full mb-3 bg-white rounded-lg hover:drop-shadow-xl">
                        <img src={Card8} class="w-full" alt="Card 1"/>
                        <div class="p-8">
                            <h3 class="mb-5 text-lg font-bold text-gray-500">Flat in Center City</h3>
                            <h3 class="mb-5 text-lg font-bold text-gray-500">$ 225,000</h3>
                            <p class="mb-5 text-lg font-semibold text-gray-400">9832 Hidden Valley Way</p>
                            <p class="text-lg font-semibold text-gray-400">2 Beds - 1 baths - 2,300 sqft</p>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-5">
                            <span class="font-semibold text-white"><i class="mr-4 fa-solid fa-eye"></i>65</span>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-32">
                            <span class="font-semibold text-white">1995</span>
                        </div>
                    </div>
                </a>
                <a href="" class="block">
                    <div class="relative w-full mb-3 bg-white rounded-lg hover:drop-shadow-xl">
                        <img src={Card9} class="w-full" alt="Card 1"/>
                        <div class="p-8">
                            <h3 class="mb-5 text-lg font-bold text-gray-500">Flat in Center City</h3>
                            <h3 class="mb-5 text-lg font-bold text-gray-500">$ 225,000</h3>
                            <p class="mb-5 text-lg font-semibold text-gray-400">9832 Hidden Valley Way</p>
                            <p class="text-lg font-semibold text-gray-400">2 Beds - 1 baths - 2,300 sqft</p>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-5">
                            <span class="font-semibold text-white"><i class="mr-4 fa-solid fa-eye"></i>65</span>
                        </div>
                        <div class="absolute px-5 py-2 rounded-md bg-opacity-60 icon bg-slate-800 top-5 left-32">
                            <span class="font-semibold text-white">1995</span>
                        </div>
                    </div>
                </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Property