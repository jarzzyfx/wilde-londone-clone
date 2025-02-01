import React from "react";
import Container from "../shared/Container";
import Image from "next/image";

const Maps = () => {
  return (
    <main className="w-full bg-[#b9cdbb] bg-opacity-30 h-screen">
      <div className="w-full h-screen opacity-0 hover:opacity-100 bg-mapBg cursor-pointer duration-300 ease-linear">
        <Container className="relative flex flex-col justify-center items-center gap-4  ">
          <section className="w-[60%] flex items-center justify-between">
            <Image
              src={"/images/arrow.png"}
              alt="arrow"
              width={192}
              height={150}
              className="rotate-[260deg]"
            />
            <Image
              src={"/images/arrow.png"}
              alt="arrow"
              width={192}
              height={150}
              className="rotate-[100deg] transform scale-x-[-1]"
            />
          </section>
          <p className="p-10 text-secondaryBg text-2xl">Click to Load Map</p>
          <section className="w-[60%] flex items-center justify-between">
            <Image
              src={"/images/arrow.png"}
              alt="arrow"
              width={192}
              height={150}
              className="transform scale-x-[-1] rotate-[280deg]"
            />
            <Image
              src={"/images/arrow.png"}
              alt="arrow"
              width={192}
              height={150}
              className="rotate-[-280deg]"
            />
          </section>
        </Container>
      </div>
    </main>
  );
};

export default Maps;
