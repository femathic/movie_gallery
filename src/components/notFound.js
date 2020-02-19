import React from 'react';

const NotFound = () => (
  <div className="h-full w-full flex justify-center items-center flex-col">
    <div>
      <p className="font-sans text-xl text-center font-normal text-gray-600 p-0 error-text">
        Oops! I can't find this page and it's not my fault...
      </p>
      <p className="font-sans text-6xl text-center font-medium text-gray-600 py-0 error-text">404</p>
      <img src="https://cdn.pixabay.com/photo/2013/07/13/14/00/specman-161930__340.png"
        alt="error" className="w-24 mx-auto wow pulse opacity-50" data-wow-duration="2s" data-wow-delay="2s" />
    </div>
  </div>
);


export default NotFound;