import React from 'react';

interface Athlete {
  id: number;
  name: string;
  username: string;
  image: string;
  profilePic: string;
  instagramUrl: string;
}

const athletes: Athlete[] = [

    {
        id: 1,
        name: "Demir Hardzic",
        username: "@hadzicdemir",
        image: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719429148/412654386_644371004344040_7758380307718690296_n_q6f3td.jpg",
        profilePic: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719429147/427246196_268943016227429_8143471376347351648_n_wcz7ph.jpg",
        instagramUrl: "https://www.instagram.com/hadzicdemir/"
      },
     
    {
    id: 2,
    name: "Akhmed Arsaev",
    username: "@akh.arseav",
    image: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719428610/356672173_17963523368550485_4707707710506912293_n_jddz2i.jpg",
    profilePic: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719428605/449134542_453674067524752_5369361643379551338_n_yqsylm.jpg",
    instagramUrl: "https://www.instagram.com/akh.arsaev/"
  },
  {
    id: 2,
    name: "Magomed Arsaev",
    username: "mag.arsaev",
    image: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719428345/425679073_17924609243835560_4696942332228121857_n_upbdap.jpg",
    profilePic: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719428345/425679073_17924609243835560_4696942332228121857_n_upbdap.jpg",
    instagramUrl: "https://www.instagram.com/mag.arsaev/"
  },
  {
    id: 4,
    name: "Murga",
    username: "@murga____",
    image: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719429579/361397238_634129768456543_7192542947895908387_n_o5qpp8.jpg",
    profilePic: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719429579/361397238_634129768456543_7192542947895908387_n_o5qpp8.jpg",
    instagramUrl: "https://www.instagram.com/murga____/"
  },
  
];

const AthleteCard: React.FC<{ athlete: Athlete }> = ({ athlete }) => (
  <a
    href={athlete.instagramUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border-2 border-red-500"
  >
    <img src={athlete.image} alt={athlete.name} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
      <div className="flex items-center">
        <img src={athlete.profilePic} alt={`${athlete.name} profile`} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h3 className="text-white font-bold">{athlete.name}</h3>
          <p className="text-gray-300 text-sm">{athlete.username}</p>
        </div>
      </div>
    </div>
  </a>
);

const ZNAthletes: React.FC = () => {
  return (
    <div className='pt-16 pb-24'> <div className="custom-shape-divider-bottom-1719686213">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>
    <div className="bg-red-600 text-white py-16 ">
      <div className="container max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8 text-center mx-auto sm:pb-0  px-12 md:px-0">
        <h2 className="text-3xl font-bold text-center inline-flex justify-center uppercase mx-4 ">Unsere <img
                    className="h-14 w-auto  sm:pb-12 sm:h-28 sm:w-auto relative sm:bottom-3 bottom-2"
                    src="https://res.cloudinary.com/dd0kypcrk/image/upload/v1719478016/NUTRITION_deew1g.svg"
                    alt=""
                  />  Athleten</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 pt-6 sm:pt-0 ">
          {athletes.map(athlete => (
            <AthleteCard key={athlete.id} athlete={athlete} />
          ))}
        </div>
      </div>
    </div>
    <div className="custom-shape-divider-top-1719686294">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>
    </div>
  );
};

export default ZNAthletes;