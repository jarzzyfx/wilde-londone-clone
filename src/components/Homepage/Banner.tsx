import React from "react";
import Container from "../shared/Container";
import { bannerData } from "@/lib/data";
import Image from "next/image";

const Banner = () => {
  return (
    <main className="w-full bg-secondaryBg">
      <Container className="grid py-32 grid-cols-2 md:grid-cols-4 gap-10 md:px-[150px]">
        {bannerData.map((dt, index) => (
          <div
            className="h-[176.8px] flex flex-col items-center justify-between"
            key={index}
          >
            <Image src={dt.img} alt={dt.title} width={60} height={60} />
            <h3 className="text-[1.75rem] leading-[1.8375rem] font-normal font-mediaanIt text-center">
              {dt.title}
            </h3>
            <p className="text-[1.125rem] leading-[1.575rem] font-normal space-x-[.01125em] text-center">
              {dt.description}
            </p>
          </div>
        ))}
      </Container>
    </main>
  );
};

export default Banner;
