import { Button } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
   
        <div className="container lg:px-36 py-16 mx-auto ">
        <div className="items-center lg:flex flex-col lg:flex-row-reverse">
          <div className=" max-w-full"> 
     <img
         src="https://res.cloudinary.com/dcfburp7p/image/upload/v1719263970/Kein_Titel_1920_x_1080_px_uib5ke.svg"
         className="w-full h-full lg:max-w-3xl" />

         </div> 
     <div>
     <h1 className=" text-neutral-800 flex items-center text-xl lg:text-3xl font-extrabold">
  <img src="https://res.cloudinary.com/dcfburp7p/image/upload/v1719253729/z-nutritionlogo_qmtyta.png" alt="Z Nutrition Logo" className="h-10 sm:h-14 mr-2" />
  NUTRITION AUSTRIA
</h1>
<h1 className="text-2xl text-red-700  lg:text-4xl font-extrabold mt-2">Regional aus Österreich <br/>  <span className="text-neutral-700 "> Schnelle Lieferung garantiert</span></h1>
            
            <p className="mt-3 text-gray-600 mt-4">  Mit unseren hochwertigen Proteinpulvern und Nahrungsergänzungsmitteln  hebst du deine Leistung auf das nächste Level. 
              
              </p>
               <p className="font-extrabold text-lg md:text-2xl text-neutral-800 mt-4">        Maximale Power für deinen Körper.
               </p>
       <div className="btn border-2  px-6 py-2 border-white outline-0 hover:bg-red-800  text-lg hover:border-gray-300  rounded-full bg-red-700 text-white mt-5 tracking-widest ">JETZT BESTELLEN</div>
       </div>
   </div>
     </div>
  )
}



export default Hero