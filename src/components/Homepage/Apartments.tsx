"use client";

import React from "react";
import Container from "../shared/Container";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { wildeApartments } from "@/lib/data";

// Import Swiper styles and components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import { Navigation, Pagination } from 'swiper';

const Apartments = () => {
  return (
    <main className="w-full min-h-screen">
      <Container className="flex flex-col">
        {/* apartment */}
        {wildeApartments.map((apartment) => (
          <div
            key={apartment.title}
            className="w-full min-h-screen"
            id="apartment"
          >
            <header
              id={"apartment header"}
              className="w-full flex gap-10 justify-between items-center flex-wrap mb-8"
            >
              <Link className="group" href={""}>
                <h4 className="group-hover:text-backdropBG text-[2.625rem] leading-[3.15rem] space-x-[.0131em]">
                  {apartment.title}
                </h4>
              </Link>
              <Link
                className="text-[1.125rem] leading-[1.6875rem] space-x-[ .01125em] flex items-center"
                href={""}
              >
                <svg
                  className="w-6 h-6 text-backdropBg dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>{" "}
                {apartment.rating} Excellent
                <span className={"ml-5 underline font-mediaanIt"}>
                  ( {`${apartment.reviews.numberOfReviews}`} Reviews )
                </span>
              </Link>
            </header>

            {/* Gallery - Slider on mobile */}
            <div id={"apartment-gallery"} className="flex flex-wrap gap-3">
              {/* Swiper for mobile */}
              <div className="block sm:hidden w-full">
                <Swiper navigation slidesPerView={1} spaceBetween={10} loop>
                  {apartment.media.map((media, index) => (
                    <SwiperSlide key={index}>
                      <div className="w-full h-[300px] bg-gray-300 relative">
                        <Image
                          src={`/${media.source}`}
                          alt="Gallery Image"
                          layout="fill"
                          objectFit="cover"
                        />
                        {apartment.isMediaPlayable && (
                          <Button className="w-[150px] h-[150px] opacity-25 hover:opacity-100 absolute top-1/3 left-1/3 rounded-full z-30">
                            <Image
                              src={"/play.svg"}
                              alt={"play"}
                              width={38}
                              height={42}
                            />
                          </Button>
                        )}
                        <div className="cursor-pointer absolute w-full h-full top-0 left-0 bg-black bg-opacity-0 hover:bg-opacity-20 z-20" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Desktop View */}
              <div className="hidden sm:grid grid-cols-2 gap-3 w-full">
                <div className="w-full h-[321.68px] bg-red-500 rounded-l-md overflow-hidden relative">
                  <Image
                    src={`/${apartment.media[0].source}`}
                    alt="img"
                    layout="fill"
                    objectFit="cover"
                  />
                  {apartment.isMediaPlayable && (
                    <Button className="w-[150px] h-[150px] opacity-25 hover:opacity-100 absolute top-1/3 left-1/3 rounded-full z-30">
                      <Image
                        src={"/play.svg"}
                        alt={"play"}
                        width={38}
                        height={42}
                      />
                    </Button>
                  )}
                  <div className="cursor-pointer absolute w-full h-full top-0 left-0 bg-black bg-opacity-0 hover:bg-opacity-20 z-20" />
                </div>
                <div className="grid grid-rows-2 gap-[2px] w-full">
                  <div className="w-full h-[160.84px] bg-blue-500 rounded-tr-md overflow-hidden relative">
                    <Image
                      className="object-cover"
                      src={`/${apartment.media[1].source}`}
                      alt="img"
                      layout="fill"
                    />
                    <div className="cursor-pointer absolute w-full h-full top-0 left-0 bg-black bg-opacity-0 hover:bg-opacity-20 z-20" />
                  </div>
                  <div className="w-full h-[160.84px] bg-slate-500 rounded-br-md overflow-hidden relative">
                    <Image
                      src={`/${apartment.media[2].source}`}
                      className="object-cover"
                      alt="img"
                      layout="fill"
                    />
                    <div className="cursor-pointer absolute w-full h-full top-0 left-0 bg-black bg-opacity-0 hover:bg-opacity-20 z-20" />
                    <Button className="absolute bottom-[10%] right-[5%] z-30 bg-[#3e6545] bg-opacity-50 text-white rounded-full text-lg">
                      View all photos ( {apartment.MediaCount} )
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="apartment-outline"
              className="w-full my-10 flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between"
            >
              <ul id="outlines" className="flex flex-col gap-4">
                {apartment.outline.map((outline) => (
                  <span key={outline} className="flex items-center gap-2 ">
                    <Image
                      src={"/right.svg"}
                      alt="right"
                      className=" text-backdropBG"
                      width={11}
                      height={19}
                    />{" "}
                    <p className="text-[1.25rem] leading-[2rem] space-x-[.0125em]">
                      {outline}
                    </p>
                  </span>
                ))}
              </ul>

              <Button className="h-[55.6px] max-w-[323.41px] text-[1.0625rem] py-[1.0625rem] px-[2.125rem] bg-[#273f2b] hover:bg-backdropBG text-primaryBg uppercase">
                view aparthotel
              </Button>
            </div>

            <div id="apartment-amenities">
              <h2 className="text-[1.75rem] leading-[1.8375rem] italic font-mediaanIt font-thin mb-8 ">
                Amenities
              </h2>

              <ul
                id="amenities-list"
                className="flex flex-wrap items-center gap-8 justify-between"
              >
                {apartment.amenities.map((amenity) => (
                  <div
                    key={amenity.text}
                    id="amenity-item"
                    className="flex flex-col gap-4 w-[126px] h-[126px]"
                  >
                    <Image
                      src={amenity.source}
                      alt="bar"
                      width={60}
                      height={60}
                    />
                    <span className="text-[1.125rem] leading-[1.575rem] space-x-[.01125em]">
                      {amenity.text}
                    </span>
                  </div>
                ))}
              </ul>

              {apartment.numberOfMedia && (
                <Button className="text-[1.125rem] leading-[1.575rem] space-x-[.01125em] rounded-full bg-slate-500 bg-opacity-15 text-black mt-4">
                  Show all{" "}
                  <span className="font-mediaanIt">
                    ({apartment.numberOfMedia})
                  </span>
                </Button>
              )}
            </div>
            <Separator className="my-20 bg-black bg-opacity-15" />
          </div>
        ))}
      </Container>
    </main>
  );
};

export default Apartments;
