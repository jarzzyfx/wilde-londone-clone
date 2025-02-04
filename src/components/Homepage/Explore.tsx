import React from "react";
import Container from "../shared/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { favorites } from "../../lib/data";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";

const Explore = () => {
  return (
    <main className="w-full min-h-screen bg-[#c4683c] text-black">
      <Container className="py-16">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8">
          <article className="flex flex-col gap-2 w-full md:w-1/2">
            <h2 className="font-mediaanIt text-[1.75rem] leading-[1.8375rem] text-left">
              Explore London
            </h2>

            <h1 className="text-[2.5rem] md:text-[5.25rem] leading-[2.5rem] md:leading-[5.25rem] w-full md:w-3/4">
              A poke around the big smoke
            </h1>
          </article>

          <article className="text-[1rem] md:text-[1.25rem] leading-[1.5rem] md:leading-[2rem] space-x-[.0125em] w-full md:w-3/4 text-center md:text-left">
            Oscar himself once quipped that London is &quot;entirely composed
            now of beautiful idiots and brilliant lunatics&quot;, and we
            couldn&apos;t agree more. Five minutes spent meandering down this
            great city&apos;s winding streets and you too will be sucked in by
            its maddening charm. A cacophony of fascinating personalities,
            places and public transport (truly, the Victoria line is a marvel) -
            if this is insanity, we welcome it with open arms.
          </article>
        </div>

        <section id="favourites" className="mt-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <header className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h1 className="text-[2rem] md:text-[3.875rem] leading-[2.4rem] md:leading-[4.2625rem] text-left">
                Our Favourites
              </h1>
              <div className="flex items-center gap-3 md:gap-6 mt-4 md:mt-0">
                <CarouselPrevious
                  className="w-[36px] h-[36px] md:w-[52px] md:h-[52px] bg-transparent border-black hover:bg-primaryBg hover:border-none"
                  variant={"outline"}
                />
                <CarouselNext
                  className="w-[36px] h-[36px] md:w-[52px] md:h-[52px] bg-transparent border-black hover:bg-primaryBg hover:border-none"
                  variant={"outline"}
                />
              </div>
            </header>
            <CarouselContent>
              {favorites.map((fave, index) => (
                <CarouselItem
                  key={index}
                  className="ml-[100px] md:ml-0 w-1/2 lg:w-1/4"
                >
                  <div className="p-1 flex flex-col gap-3 hover:opacity-75">
                    <Card className="bg-transparent border-none">
                      <CardContent className="h-[300px] md:h-[490.5px] bg-transparent flex items-center justify-center p-6 relative overflow-hidden border-none">
                        <Image
                          src={fave.img}
                          alt="fave img"
                          className="w-[95%] h-[95%] rounded-md"
                          fill
                        />
                      </CardContent>
                    </Card>

                    <p className="text-[1.5rem] md:text-[2rem] leading-[2rem] md:leading-[2.4rem] space-x-[.01em] text-center md:text-left flex gap-2">
                      {fave.text}
                      <SquareArrowOutUpRight width={12} height={12} />
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        <section id="explore-wilde" className="mt-12">
          <h1 className="text-[1.75rem] leading-[1.8375rem] font-mediaanIt mb-6">
            Explore Wilde
          </h1>

          <h2 className="text-[3rem] leading-[3.45rem] mb-6">
            Apartment freedom, hotel comforts{" "}
          </h2>
          <p className="text-[1.25rem] leading-[2rem] space-x-[.0125em] mb-20">
            All the comforts of home, but with fresher sheets.
          </p>

          <div className="grid grid-cols-2 grid-rows-5 md:grid-cols-5 gap-3 md:grid-rows-2 w-full mb-10">
            {/*  */}
            <div className="h-[236px] w-full relative">
              <Image src={"/images/straight-arr-down.png"} alt="arrow" fill />
            </div>
            {/*  */}
            <div className="w-full h-[236px] flex flex-col justify-between">
              <p className="text-[1.75rem] leading-[1.8375rem] font-mediaanIt">
                Flexible booking
              </p>
              <Image
                src={"/wilde-underline.svg"}
                alt="underline"
                className="w-full"
                width={339}
                height={4}
              />
            </div>
            {/*  */}
            <div className="w-full h-[236px] flex flex-col justify-between">
              <p className="text-[1.75rem] leading-[1.8375rem] font-mediaanIt">
                Fitnes Room
              </p>
              <Image
                src={"/wilde-underline.svg"}
                alt="underline"
                className="w-full"
                width={339}
                height={4}
              />
            </div>
            {/*  */}
            <div className="w-full h-[236px]  relative">
              <Image src={"/images/spinning-arr-down.png"} alt="arrow" fill />
            </div>
            {/*  */}
            <div className="w-full h-[236px] flex flex-col justify-between">
              <p className="text-[1.75rem] leading-[1.8375rem] font-mediaanIt">
                Breakfast & bar
              </p>
              <Image
                src={"/wilde-underline.svg"}
                alt="underline"
                className="w-full"
                width={339}
                height={4}
              />
            </div>

            {/*  */}
            <div className="w-full h-[236px] flex flex-col justify-between">
              <p className="text-[1.75rem] leading-[1.8375rem] font-mediaanIt">
                Premium toiletries
              </p>
              <Image
                src={"/wilde-underline.svg"}
                alt="underline"
                className="w-full"
                width={339}
                height={4}
              />
            </div>
            {/*  */}
            <div className="h-[236px] w-full relative">
              <Image src={"/images/arrow.png"} alt="arrow" fill />
            </div>
            {/*  */}
            <div className="w-full h-[236px] flex flex-col justify-between">
              <p className="text-[1.75rem] leading-[1.8375rem] font-mediaanIt">
                Free highspeed wi-fi
              </p>
              <Image
                src={"/wilde-underline.svg"}
                alt="underline"
                className="w-full"
                width={339}
                height={4}
              />
            </div>
            {/*  */}
            <div className="w-full h-[236px] flex flex-col justify-between">
              <p className="text-[1.75rem] leading-[1.8375rem] font-mediaanIt">
                Laundry room
              </p>
              <Image
                src={"/wilde-underline.svg"}
                alt="underline"
                className="w-full"
                width={339}
                height={4}
              />
            </div>

            {/*  */}
            <div className="w-full h-[236px] flex flex-col justify-between">
              <p className="text-[1.75rem] leading-[1.8375rem] font-mediaanIt">
                Nespresso machines
              </p>
              <Image
                src={"/wilde-underline.svg"}
                alt="underline"
                className="w-full"
                width={339}
                height={4}
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-20">
            <Button className="w-[544.71px] h-[55.6px] text-primaryBg mx-auto mt-10 mb-20">
              What is an aparthotel?
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Explore;
