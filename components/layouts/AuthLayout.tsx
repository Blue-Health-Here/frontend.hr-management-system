import Image from "next/image";
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  leftContent: React.ReactNode;
  showBackgroundShapes?: boolean; // New prop to control background shapes
}

function AuthLayout({ leftContent, children, showBackgroundShapes = false }: AuthLayoutProps) {
  return (
    <div className="p-4 md:p-6 lg:p-8 xl:p-10 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full p-0 lg:p-8 xl:p-10  bg-secondary-bg-theme rounded-4xl relative z-10" style={{ minHeight: 'calc(100vh - 5rem)' }}>
        {leftContent}
        <div className="w-full h-full flex flex-col justify-between gap-6 py-4 lg:py-10 px-4 lg:px-6 md:px-8">
          {children}
          {showBackgroundShapes && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* top center */}
              <Image src="/Polygon-top.svg" alt="" width={200} height={100} className="absolute md:w-[250px] md:h-[70px] lg:w-[280px] xl:w-[390px] xl:h-[100px] right-10 sm:right-1/3 md:right-1/2 lg:right-1/12 animate-scaleUp" />

              {/* right center */}
              <Image src="/Polygon-right.svg" alt="" width={120} height={100} className="md:w-[250px] md:h-[300px] lg:h-[180px] lg:w-[200px] xl:w-[240px] xl:h-[200px] absolute md:top-1/3 -right-20 xl:-right-24 animate-scaleUp" />

              {/* left center */}
              <Image src="/circle.svg" alt="" width={48} height={48} className="absolute top-1/3 right-10/12 lg:right-1/4 animate-scaleUp" />

              {/* bottom center */}
              <Image src="/circle-with-star.svg" alt="" width={25} height={25} className="animate-scaleUp md:w-[30px] md:h-[30px] lg:h-[50px] lg:w-[40px] xl:w-[50px] xl:h-[50px] absolute bottom-8 md:bottom-15 lg:bottom-10 xl:bottom-14.5 right-[24%] md:right-[22%] lg:right-[19%] xl:right-[16%] 2xl:right-[16.9%]" />
              <Image src="/star.svg" alt="" width={25} height={25} className="animate-scaleUp md:w-[30px] md:h-[30px] lg:h-[50px] lg:w-[40px] xl:w-[60px] xl:h-[60px] absolute bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-5 xl:bottom-6 right-[30%] sm:right-[25.5%] lg:right-[22%] xl:right-[18%] 2xl:right-[18.3%]" />

              <Image src="/Polygon-with-star.svg" alt="" width={50} height={40} className="animate-scaleUp md:w-[100px] md:h-[80px] lg:h-[90px] lg:w-[100px] 2xl:w-[150px] 2xl:h-[100px] absolute bottom-1 xl:bottom-0 lg:-bottom-3 right-[11.5%]" />

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;