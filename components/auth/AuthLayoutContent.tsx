import React from 'react';
import Image from "next/image";

function AuthLayoutContent() {
  return (
    // <div className="hidden md:block w-2/3 bg-gray-100 items-center justify-center">
    //   <div className="flex justify-center items-center h-full w-full max-w-md mx-auto">
    //     <div className="px-6">
    //       <div className="mb-8 text-center">
    //         <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black text-center">
    //           Empowering people through seamless HR management.
    //         </h1>
    //       </div>
    //       <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
    //         <Image
    //           src="/img-1.png"
    //           alt="Main Logo"
    //           fill
    //           className="object-cover"
    //           priority
    //         />
    //       </div>
    //       <p className="text-center mt-8 font-semibold text-black text-xl">
    //         Efficiently manage your workforce, streamline operations effortlessly.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="hidden md:block w-1/2 bg-gray-100 items-center justify-center overflow-hidden">
      <img
        src="/img-1.png"
        alt="Main Logo"
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default AuthLayoutContent;