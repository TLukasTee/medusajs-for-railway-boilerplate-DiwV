/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  pricePerKg: number;
  rating: number;
  reviews: number;
  flavors: string[];
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "WHEY Hydrolysat ",
    description: "Hochwertiges Whey Hydrolysat",
    price: 49.99,
    pricePerKg: 49.99,
    rating: 4.5,
    reviews: 2231,
    flavors: ["Erdbeere"],
    imageSrc: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719418511/Design_ohne_Titel_720x691_nbaba2.svg",
    imageAlt: "Erdbeere",
    href: "#"
  },
  {
    id: 2,
    name: "WHEY  Hydrolysat",
    description: "Hochwertiges Whey Hydrolysat",
    price: 49.99,
    pricePerKg: 49.99,
    rating: 4.5,
    reviews: 1192,
    flavors: ["Banane"],
    imageSrc: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719418511/Design_ohne_Titel_720x691_nbaba2.svg",
    imageAlt: "Designer Whey Protein",
    href: "#"
  },
  {
    id: 3,
    name: "WHEY  Hydrolysat",
    description: "Hochwertiges Whey Hydrolysat",
    price: 49.99,
    pricePerKg: 49.99,
    rating: 5,
    reviews: 283,
    flavors: ["Vanille Eis"],
    imageSrc: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719418511/Design_ohne_Titel_720x691_nbaba2.svg",
    imageAlt: "Vanille Eis",
    href: "#"
  },
  {
    id: 4,
    name: "Omega 3 | Fish Oil ",
    description: "Hochwertiges Omega 3",
    price: 49.99,
    pricePerKg: 49.99,
    rating: 4.5,
    reviews: 731,
    flavors: ["Neutral"],
    imageSrc: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719418511/Design_ohne_Titel_720x691_nbaba2.svg",
    imageAlt: "Designer Bar Proteinriegel",
    href: "#"
  }
];
  const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "gold" : "none"}
      stroke={filled ? "gold" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  export default function Products() {
    return (
      <div className="bg-white ">
       
       <div className="mx-auto max-w-2xl px-12 py-16 sm:px-6 sm:py-32 sm:pb-38 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold mb-2">Unsere Bestseller</h2>
        <h3 className="text-xl mb-6">Besonders beliebt </h3>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative ">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 p-10 h-80 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full p-4 pt-6"
                />
               
              </div> <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1.5 rounded-full ">
                  Bestseller
                </span>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                  <div className="mt- mb-2 text-sm text-gray-500 font-normal border-2 rounded-full  w-max  px-2.5  ">{product.flavors.join(' ')}</div>

                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0 " />
                      
                     <span className="font-extrabold text-lg uppercase">  {product.name}</span>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  <div className="mt-1 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} filled={i < Math.floor(product.rating)} />
                    ))}
                    <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                  </div>
               <div className="inline-flex"> 
                  <p className="text-xl font-medium text-gray-900">€{product.price.toFixed(2)}</p>
                  <p className="mt-2 text-xs text-gray-500">(€{product.pricePerKg.toFixed(2)}/kg)</p>
           </div> 
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    )
  }
  