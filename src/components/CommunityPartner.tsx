import React from "react";
import "../styles/main.css";

const communityPartners = [
  {
    title: 'Algozenith SIT',
    imrSrc: 'https://pbs.twimg.com/profile_images/1582002361576599558/5TB5TgYg_400x400.jpg',
    link: 'https://twitter.com/AlgozenithSIT',
  },
  {
    title: 'Algozenith SIT',
    imrSrc: 'https://pbs.twimg.com/profile_images/1582002361576599558/5TB5TgYg_400x400.jpg',
    link: 'https://twitter.com/AlgozenithSIT',
  },
  {
    title: 'Algozenith SIT',
    imrSrc: 'https://pbs.twimg.com/profile_images/1582002361576599558/5TB5TgYg_400x400.jpg',
    link: 'https://twitter.com/AlgozenithSIT',
  },
];

const CommunityPartner = () => {
  return (
    <>
      <div className="relative">
        <h1 className="text-[5vw] font-bold text-center pt-4 text-white">
          COMMUNITY PARTNERS
        </h1>
      </div>
      <div className="flex items-center justify-center pb-10">
        <div className="grid lg:grid-cols-10 grid-cols-4 lg:gap-4 gap-1 px-[10vw] py-20">
          {/* below div can be used in loop here */}
          {communityPartners.map((cp) => (
            <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
              <a href={cp.link} target="_blank">
                <img
                  src={cp.imrSrc}
                  title={cp.title}
                  className="rounded-lg"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommunityPartner;
