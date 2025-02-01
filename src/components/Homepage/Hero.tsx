import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { searchItems } from "@/lib/constants";
import { Separator } from "../ui/separator";

const Hero = () => {
  return (
    <main className="w-full h-screen">
      <Container className="flex justify-between ">
        <div className="w-1/2 h-full pt-16 md:pt-28 flex flex-col justify-between">
          <article className="w-[80%] py-10">
            <h1 className="text-[6.375rem] leading-[6.375rem]">
              <span>Life begins in</span>
              <span className="flex flex-col">
                London
                <Image
                  src={"/wilde-underline.svg"}
                  alt="underline"
                  width={339}
                  height={7}
                />
              </span>
            </h1>
          </article>

          <Separator className="w-3/4 bg-black bg-opacity-15 " />
        </div>
      </Container>
      <div
        className="
    absolute top-0 w-full h-full right-0
    "
      >
        <div className="w-1/2 h-full pt-16 md:pt-16 relative ml-auto">
          <Image
            src={"/images/hero-img.jpg"}
            alt="hero"
            fill
            className="object-cover rounded-b-md"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40" />
        </div>
      </div>

      <div className="absolute bottom-[15%] left-1/4 w-auto max-w-[60%] h-[65px] bg-secondaryBg rounded-md overflow-hidden">
        <form className="w-full h-full flex items-center" action="">
          {searchItems.map((item) => (
            <div
              key={item.title}
              className="w-[189.86px] h-full border-r-[1px] border-black border-opacity-15 "
              id="formGroup"
            >
              <Button
                variant={"ghost"}
                className="px-6 flex flex-col justify-center items-start gap-2 w-full h-full hover:bg-primaryBg rounded-none "
              >
                <span className="text-[0.8125rem] leading-[0.8125rem] space-x-[ 1.56px] uppercase">
                  {item.title}
                </span>
                <div className="text-[1.0625rem] leading-[1.0625rem] space-x-[0.17px]">
                  {item.description}
                </div>
              </Button>
            </div>
          ))}
          <Button className="h-full rounded-none bg-black text-primaryBg w-auto uppercase text-lg">
            Search
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Hero;
