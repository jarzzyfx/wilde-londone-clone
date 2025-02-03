import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/lib/constants";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#273f2b] flex flex-col items-center justify-center text-primaryBg">
      <div className="w-full flex flex-col">
        <Container className="flex flex-col md:flex-row py-8 gap-8 md:gap-32 items-start">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start">
            {footerLinks.map((link, index) => (
              <div className="flex flex-col gap-8" key={index}>
                <h3 className="text-[1.375rem] leading-[1.58125rem] font-mediaanIt">
                  {link.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {link.links.map((subLink, subIndex) => (
                    <Link href={""} key={subIndex}>
                      <span className="text-[1.375rem] leading-[1.71875rem] hover:underline">
                        {subLink}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-[1.375rem] leading-[1.58125rem] font-mediaanIt">
              Newsletter
            </h3>
            <div className="w-full border-b-[1px] border-primaryBg border-opacity-15 flex items-center gap-3 py-3">
              <input
                type="text"
                placeholder="E-mail address"
                className="w-full px-4 py-2 border-none outline-none focus:outline-none focus-within:outline-none bg-transparent text-[1.375rem] leading-[1.71875rem]"
              />
              <Button className="rounded-full bg-primaryBg text-[#273f2b] text-[1.125rem] leading-[1.575rem] space-x-[.01125em]">
                Sign up
              </Button>
            </div>
            <p className="text-[1.125rem] leading-[1.575rem] space-x-[0.01125em]">
              Sign up for special offers and lashings of wanderlust
            </p>
            <div className="flex gap-8 items-center">
              <Link href={""} className="hover:opacity-85 w-[25px] h-[25px]">
                <Image
                  src={"/instagram.svg"}
                  alt="instagram"
                  width={25}
                  height={25}
                />
              </Link>
              <Link className="hover:opacity-85 w-[25px] h-[25px]" href={""}>
                <Image
                  src={"/facebook.svg"}
                  alt="facebook"
                  width={25}
                  height={25}
                />
              </Link>
              <Link className="hover:opacity-85 w-[25px] h-[25px]" href={""}>
                <Image
                  src={"/twitter.svg"}
                  alt="twitter"
                  width={25}
                  height={25}
                />
              </Link>
              <Link className="hover:opacity-85 w-[25px] h-[25px]" href={""}>
                <Image
                  src={"/tiktok.svg"}
                  alt="tiktok"
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>
        </Container>
        <Container className="flex flex-col md:flex-row py-8 gap-8 md:gap-32 items-start">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center">
            <div className="flex flex-col gap-8">
              <h3 className="text-[1.375rem] leading-[1.58125rem] font-mediaanIt">
                Languages
              </h3>
              <DropdownMenu>
                <DropdownMenuTrigger className="group w-full md:w-[120px] h-[38px] rounded-full ring-[1px] ring-primaryBg text-md flex items-center gap-2 justify-center">
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
            <div className="flex flex-col gap-8">
              <h3 className="text-[1.375rem] leading-[1.58125rem] font-mediaanIt">
                Currency
              </h3>
              <DropdownMenu>
                <DropdownMenuTrigger className="group w-full md:w-[120px] h-[38px] rounded-full ring-[1px] ring-primaryBg text-md flex items-center gap-2 justify-center">
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
            </div>
          </div>
          <h3 className="text-[1.375rem] leading-[1.58125rem] font-mediaanIt flex gap-2">
            Part of the{" "}
            <span className="flex flex-col gap-1">
              Staycity Group
              <Image src={"/underine.svg"} alt="line" width={120} height={4} />
            </span>
          </h3>
        </Container>
      </div>
      <div className="w-full border-t-[1px] border-primaryBg border-opacity-15">
        <Container className="flex flex-col md:flex-row gap-8 md:gap-16 items-center py-8">
          <div className="flex items-center gap-4">
            <span className="w-[60px] h-[40px] border-[1px] border-primaryBg border-opacity-15 p-2 flex items-center justify-center rounded-sm">
              <Image src={"/visa.svg"} alt="visa" width={42.4} height={22.4} />
            </span>
            <span className="w-[60px] h-[40px] border-[1px] border-primaryBg border-opacity-15 p-2 flex items-center justify-center rounded-sm">
              <Image
                src={"/master.svg"}
                alt="visa"
                width={42.4}
                height={22.4}
              />
            </span>
            <span className="w-[60px] h-[40px] border-[1px] border-primaryBg border-opacity-15 p-2 flex items-center justify-center rounded-sm">
              <Image src={"/amex.svg"} alt="visa" width={42.4} height={22.4} />
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link
              href={""}
              className="text-[1rem] leading-[1.35rem] space-x-[.01em] text-primaryBg underline underline-offset-1 capitalize hover:opacity-90"
            >
              Privacy
            </Link>
            <Link
              href={""}
              className="text-[1rem] leading-[1.35rem] space-x-[.01em] text-primaryBg underline underline-offset-1 capitalize hover:opacity-90"
            >
              terms & conditions
            </Link>
            <Link
              href={""}
              className="text-[1rem] leading-[1.35rem] space-x-[.01em] text-primaryBg underline underline-offset-1 capitalize hover:opacity-90"
            >
              cookies
            </Link>
          </div>
          <p className="text-[1rem] leading-[1.35rem] space-x-[.01em] text-primaryBg">
            © 2025, Staycity Ltd
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
