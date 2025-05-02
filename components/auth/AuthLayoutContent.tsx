import React from 'react'
import Image from "next/image";

function AuthLayoutContent() {
  return (
    <div
      className="w-full md:w-2/5 lg:w-2/5 relative hidden md:flex flex-col items-center justify-center min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #fd7e14, #58151c)",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div className="relative z-10">
        <div
          className="border border-white bg-white/22 backdrop-blur-lg shadow-lg rounded-xl px-12 py-8 flex flex-col items-center"
          style={{ marginTop: "60px" }}
        >
          <h1
            className="text-white text-4xl md:text-5xl mb-4 px-4 font-bold relative text-left"
            style={{
              fontSize: "40px",
              lineHeight: "1.2",
              top: "60px",
              left: "-20px",
            }}
          >
            <div>Empowering people</div>
            <div>through seamless HR</div>
            <div>management.</div>
          </h1>

          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <Image
              src="/img-1.png"
              alt="Main Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p
            className="text-white text-center px-4 font-semibold relative"
            style={{
              fontSize: "20px",
              top: "-20px",
            }}
          >
            Efficiently manage your workforce, streamline <br />
            operations effortlessly.
          </p>
        </div>
      </div>

      {/* Bottom Left Image */}
      <div className="absolute bottom-0 left-12 w-24 h-16">
        <Image
          src="/left-image.png"
          alt="Left Decoration"
          fill
          className=""
        />
      </div>

      {/* Bottom Right Image */}
      <div className="absolute bottom-0 right-4 w-60 h-60">
        <Image
          src="/right-image.png"
          alt="Right Decoration"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default AuthLayoutContent