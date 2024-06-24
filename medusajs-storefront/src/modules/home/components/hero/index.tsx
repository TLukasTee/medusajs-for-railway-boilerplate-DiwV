import { Button } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="hero h-[75vh] relative max-w-7xö ">
      <Image
        src="https://res.cloudinary.com/dcfburp7p/image/upload/v1719252714/HeroTest_f7u7ze.svg"
        alt=""
        fill // Verwenden Sie `fill` anstelle von `layout="fill"`
        className="object-cover opacity-50" // `objectFit` wird durch entsprechende Tailwind CSS-Klasse ersetzt
      />
      <div className=" bg-opacity-10 "></div>
      <div className="hero-content  ">
        <div className="max-w-7xl">
          <h1 className="mb-5 text-5xl font-extrabold text-white">Z NUTRITION AUSTRIA</h1>
          <p className="mb-5 text-white text-2xl">
          Mit unseren hochwertigen Proteinpulvern und Nahrungsergänzungsmitteln <br/> hebst du deine Leistung auf das nächste Level. Maximale Power für deinen Körper.
          </p>
          <p className="text-white"> Bis zu 20% auf Whey Hydro.</p>
          <button className="btn border-2 border-white outline-0 hover:bg-red-800  hover:border-gray-300 uppercase rounded-full bg-red-700 text-white mt-5 ">Zur Aktion</button>
        </div>
      </div>
    </div>
  )
}

export default Hero