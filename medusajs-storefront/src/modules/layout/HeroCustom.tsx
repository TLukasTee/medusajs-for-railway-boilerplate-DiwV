'use client'
import { Bebas_Neue} from "next/font/google";
import Link from "next/link";
const Beba = Bebas_Neue({  weight: ['400'],
subsets: ['latin'], });
export default function HeroCustom() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-1 sm:pb-40 sm:pt-14 lg:pb-56 lg:pt-14 ">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-xl">
             
              <div className="sm:ml-2 sm:ml-4 lg:ml-0 inline-flex">
                <a href="#" className='inline-flex'>
                  <img
                    className="h-8 w-auto  sm:h-14 sm:w-auto"
                    src="https://res.cloudinary.com/dcfburp7p/image/upload/v1719253729/z-nutritionlogo_qmtyta.png"
                    alt=""
                  />
                                    <span className={`${Beba.className} sm:text-3xl text-xl tracking-wider text-black uppercase sm:ml-1 ml-1 mt-0.5 sm:mt-3.5 font-bold`}>Nutrition | ÖSTERREICH</span>

                </a>
              </div>
              <h1 className="text-4xl font-bold uppercase py-5 tracking-tighter sm:text-5xl md:text-6xl dark:text-neutral-800 text-neutral-800">
          Von Athleten <br/> für Athleten
          </h1>

            <p className="dark:text-neutral-800 text-neutral-800"> 
            Unser hochwertiges Protein unterstützt Sie optimal bei Ihrem Muskelaufbau und Ihrer Regeneration. Von Whey-Protein bis zu einer breiten Auswahl an Vitalstoffen – <br/> bei Z-Nutrition finden Sie genau das, was Sie brauchen.
                </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 pb-28">
                    <div className="flex items-center space-x-4 lg:space-x-4">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 sm:max-w-3xl max-w-xl sm:mt-12 pt-24 sm:pt-0 pr-36">
                          <img
                            src="https://res.cloudinary.com/dd0kypcrk/image/upload/v1720900909/Kein_Titel_1920x1080_3_c0rppq.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                       
                      </div>
                    
                     
                    </div>
                  </div>
                </div>
  
                <Link
                  href="#"
                  className="inline-block rounded-md mr-4 border border-transparent  bg-red-600 px-8 py-3 text-center font-medium  rounded-full text-white hover:bg-red-700"
                >
                  Unser Sortiment
                </Link>
                <Link   
                  href="/test"
                  className="inline-block  border-2 cursor-pointer rounded-md border-transparent bg-neutral-510 border-neutral-200 bg-gray-100   px-8 py-3 text-center font-medium text-black hover:bg-red-700"
                >
                  Zubehör
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1719417067  ">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>

      </div>
    )
  }
  