import React from 'react';
import Marquee from 'react-fast-marquee';

const CommunityPartnerCard = () => {
  return (
    <>
      <p className="text-black dark:text-white ml-5 md:ml-10 lg:ml-20 text-center font-bold text-3xl font-koulen pt-10">
        Community Partners
      </p>
      <div className="m-4 rounded-lg bg-[#202021] mx-5 md:mx-10 lg:mx-20 p-5 py-7 text-white dark:text-black dark:shadow-gray-500">
        <Marquee pauseOnHover gradient={false} speed={200}>
          <div className="flex items-center space-x-20 mx-10">
            <img
              className="w-32"
              src={require('../sampleAssets/1.png')}
              alt=""
            />
            <img
              className="w-32"
              src={require('../sampleAssets/2.png')}
              alt=""
            />
            <img
              className="w-32"
              src={require('../sampleAssets/3.png')}
              alt=""
            />
            <img
              className="w-32"
              src={require('../sampleAssets/4.png')}
              alt=""
            />
            <img
              className="w-32"
              src={require('../sampleAssets/5.png')}
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default CommunityPartnerCard;
