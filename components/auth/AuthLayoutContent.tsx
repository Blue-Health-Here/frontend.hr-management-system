import Image from 'next/image';
import React from 'react';
type LeftSideContentProps = {
  title: string;
  description: string;
};

function AuthLayoutContent({ title, description }: LeftSideContentProps) {
  return (
    <div className="relative w-full bg-primary-dark-gray flex flex-col items-center justify-center overflow-hidden rounded-4xl">

      {/* top left */}
      <div className="absolute top-36 left-16 flex items-center justify-center overflow-hidden">
        <Image src="/animoji-3.svg" alt='' width={140} height={140} />
      </div>

      {/* top center */}
      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 flex items-center justify-center overflow-hidden">
        <Image src="/animoji-1.svg" alt='' width={250} height={250} />
      </div>

      {/* top right */}
      <div className="absolute top-16 right-16 flex items-center justify-center overflow-hidden">
        <Image src="/animoji-2.svg" alt='' width={150} height={150} />
      </div>

      {/* bottom right */}
      <div className="absolute bottom-16 -right-7 flex items-center justify-center overflow-hidden">
        <Image src="/animoji-4.svg" alt='' width={160} height={160} />
      </div>

      {/* bottom left */}
      <div className="absolute bottom-0 left-0 flex items-center justify-center overflow-hidden">
        <Image src="/animoji-5.svg" alt='' width={350} height={350} />
      </div>

      {/* contetnt */}
      <div className="text-center z-10 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
          {title}
        </h1>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10">
        <p className="text-gray-300 text-lg font-medium max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}

export default AuthLayoutContent;