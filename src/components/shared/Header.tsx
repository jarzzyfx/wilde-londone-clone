"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify, ChevronUp, MapPin } from "lucide-react";
import {
  aboutWildeEndLinks,
  aboutWildeLinks,
  wildeDestinations,
} from "@/lib/constants";
import { Separator } from "../ui/separator";
import Image from "next/image";
import SnackBar from "./SnackBar";
import { gsap } from "gsap";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight * 0.2;

      if (scrollPosition > triggerPosition) {
        gsap.to(".header", { backgroundColor: "#ebe0ce", duration: 0.5 });
        gsap.to(".login-button", {
          backgroundColor: "black",
          color: "#ebe0ce",
          duration: 0.5,
        });
        gsap.to(".align-justify", { color: "black", duration: 0.5 });
      } else {
        gsap.to(".header", { backgroundColor: "transparent", duration: 0.5 });
        gsap.to(".login-button", {
          backgroundColor: "#ebe0ce",
          color: "black",
          duration: 0.5,
        });
        gsap.to(".align-justify", { color: "#ebe0ce", duration: 0.5 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="header w-full h-[80px] z-40 flex items-center flex-col fixed top-0 left-0">
        <SnackBar />
        <div
          id="header-container "
          className="w-[90%] h-full flex items-center justify-between border-b-[1px] border-black border-opacity-15"
        >
          <span id="header-logo">
            <Link href={"/"}>
              <Image
                width={180}
                height={80}
                src={"/wilde-logo-removebg-preview.svg"}
                alt="logo"
              />
            </Link>
          </span>

          <div className="flex items-center gap-2 h-full">
            <Button className="login-button rounded-2xl shadow-none bg-secondaryBg hover:bg-primaryBg text-black h-[34px]">
              Log In
            </Button>
            {/* handbugger */}
            <Sheet>
              <SheetTrigger>
                <AlignJustify className="align-justify text-secondaryBg" />
              </SheetTrigger>
              <SheetContent>
                <div className="max-w-[865px] w-full flex flex-col items-center">
                  <SheetHeader className="flex flex-row w-[100%] h-[80px] items-center justify-between border-b-[1px] border-black border-opacity-15">
                    <div className="flex w-3/4 h-full gap-4 items-center justify-evenly md:justify-normal">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="group w-full md:w-[120px] h-[38px] rounded-full ring-[1px] ring-black text-md flex items-center gap-2 justify-center">
                          USD ( $ ){" "}
                          <ChevronUp className="group-focus:rotate-180 ease-linear " />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-secondaryBg p-0">
                          <DropdownMenuItem className="h-[52px] border-b-[1px] border-slate-300 rounded-b-none hover:bg-primaryBg">
                            EUR ( $ )
                          </DropdownMenuItem>
                          <DropdownMenuItem className="h-[52px] border-b-[1px] border-slate-300 rounded-b-none hover:bg-primaryBg">
                            GBP ( $ )
                          </DropdownMenuItem>
                          <DropdownMenuItem className="h-[52px] hover:bg-primaryBg">
                            USD ( $ )
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="group w-full md:w-[120px] h-[38px] rounded-full ring-[1px] ring-black text-md flex items-center gap-2 justify-center">
                          English
                          <ChevronUp className="group-focus:rotate-180 ease-linear " />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-secondaryBg p-0">
                          <DropdownMenuItem className="h-[52px] border-b-[1px] border-slate-300 rounded-b-none hover:bg-primaryBg">
                            Français
                          </DropdownMenuItem>
                          <DropdownMenuItem className="h-[52px] border-b-[1px] border-slate-300 rounded-b-none hover:bg-primaryBg">
                            Deutsch
                          </DropdownMenuItem>
                          <DropdownMenuItem className="h-[52px] border-b-[1px] border-slate-300 rounded-b-none hover:bg-primaryBg">
                            Italiano
                          </DropdownMenuItem>
                          <DropdownMenuItem className="h-[52px] hover:bg-primaryBg">
                            Espanol
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <Button className="hidden md:flex rounded-2xl shadow-none bg-black text-secondaryBg h-[34px] translate-x-[-100px]">
                      Log In
                    </Button>
                  </SheetHeader>

                  <section
                    className="w-full min-h-[400px] mt-14 flex flex-col md:flex-row justify-between"
                    id="navBody"
                  >
                    <div className="w-full h-full border-r-[1px] border-black border-opacity-15">
                      <h5 className="text-black text-[1.375rem] leading-[1.58125rem] mb-6 font-mediaanIt font-thin">
                        Wilde destinations
                      </h5>

                      <ul className="flex flex-col gap-4 mb-6">
                        {wildeDestinations.map((destination) => (
                          <Link
                            key={destination.text}
                            href={destination.path}
                            className="group flex gap-2 items-center"
                          >
                            <MapPin
                              width={24}
                              height={24}
                              className="group-hover:text-backdropBG"
                            />
                            <span className="capitalize text-[2.625rem] leading-[3.15rem] space-x-[0.0225em] group-hover:text-backdropBG">
                              {destination.text}
                            </span>
                          </Link>
                        ))}
                      </ul>

                      <h6 className="text-[1.375rem] mb-4 leading-[1.58125rem] font-mediaanIt font-thin">
                        Can&apos;t find your location ?
                      </h6>

                      <p className="text-[1.125rem] leading-[1.575rem] space-x-[.0169em]">
                        Explore the locations of our sister brand, Staycity
                        Aparthotels.{" "}
                        <Link
                          href={
                            "https://www.staycity.com/?_gl=1*97ap38*_gcl_aw*R0NMLjE3MzgyMjc2MDMuQ2p3S0NBaUFrYzI4QmhCMEVpd0FNMDAxVGZIcHNNWWlZVUtfb09HTS1WRjh2bmJGaEc5eEs1NXR1TU1QTk0yQVlyVGZOLUR1QWpDaF94b0MzU1FRQXZEX0J3RQ..*_gcl_au*MzE2MzQxODYwLjE3MzgyMjc1MTE.*FPAU*MzE2MzQxODYwLjE3MzgyMjc1MTE.*_ga*MTI4NDYzNjQ0OC4xNzM4MjI3MDAw*_ga_1CP309JWB2*MTczODIyNjk5OC4xLjEuMTczODIyNzY0Ny4wLjAuOTQ4MzI3NDI4"
                          }
                          className="underline hover:text-backdropBG mx-1"
                        >
                          Staycity
                        </Link>
                      </p>
                    </div>
                    <section className="w-full h-full pl-0 md:pl-20">
                      <div className="flex flex-col gap-4">
                        <Link
                          href={""}
                          className="hover:text-backdropBG hover:underline text-[1.375rem] leading-[1.71875rem] space-x-[.007em]"
                        >
                          Manage my booking
                        </Link>
                        <Link
                          href={""}
                          className="hover:text-backdropBG hover:underline text-[1.375rem] leading-[1.71875rem] space-x-[.007em]"
                        >
                          Online Check-in
                        </Link>
                      </div>

                      <Separator className="my-6 bg-black bg-opacity-15" />

                      <div className="flex flex-col gap-5">
                        <h5 className="text-[1.375rem] leading-[1.58125rem] font-mediaanIt font-thin">
                          About Wilde Aparthotels
                        </h5>

                        <ul className="flex flex-col gap-3">
                          {aboutWildeLinks.map((link) => (
                            <Link
                              key={link.text}
                              href={link.path}
                              className="hover:text-backdropBG hover:underline text-[1.375rem] leading-[1.71875rem] space-x-[.007em]"
                            >
                              {link.text}
                            </Link>
                          ))}
                        </ul>
                      </div>

                      <Separator className="my-6 bg-black bg-opacity-15" />

                      <div className="flex flex-col gap-3">
                        {aboutWildeEndLinks.map((link) => (
                          <Link
                            key={link.text}
                            href={link.path}
                            className="hover:text-backdropBG hover:underline text-[1.375rem] leading-[1.71875rem] space-x-[.007em]"
                          >
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    </section>
                  </section>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
