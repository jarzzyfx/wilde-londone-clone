import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import { Button } from "../ui/button";

const SisterBrand = () => {
  return (
    <main className="w-full h-screen">
      <Container className="flex py-12 gap-10 md:px-[150px]">
        <article id="sister-desc" className="flex flex-col gap-3">
          <h3 className="text-[1.75rem] leading-[1.8375rem] font-mediaanIt">
            Stay smarter
          </h3>
          <h1 className="text-[5.25rem] leading-[5.25rem]">
            A smart and simple{" "}
            <div className="flex flex-col gap-1 relative">
              formula
              <Image
                src={"/wilde-underline.svg"}
                alt="line"
                width={220}
                height={7}
              />
            </div>
          </h1>
          <p className="text-[1.375rem] leading-[2.0625rem] space-x-[.01375em]">
            Get to know our sister brand
          </p>
          <Button className="max-w-[257.61px] h-[55.6px] bg-[#273f2b] text-primaryBg uppercase hover:opacity-85 text-[1.0625rem] hover:bg-[#273f2b]">
            visit statcity.com
          </Button>
        </article>
        <div className="h-full w-full md:w-3/4 relative" id="image-cont">
          <Image
            src={"/images/staycity.webp"}
            className="rounded-md"
            alt="staycity"
            fill
          />
        </div>
      </Container>
    </main>
  );
};

export default SisterBrand;
