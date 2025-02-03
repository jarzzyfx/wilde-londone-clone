"use client";

import { FC, useState } from "react";
import { Props } from "./Container";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { X } from "lucide-react";

type Modal = "open" | "close";

const ChatProvider: FC<Props> = ({ children, className, ...props }) => {
  const [modal, setModal] = useState<Modal>("close");
  return (
    <>
      <div
        {...props}
        className={cn(
          "fixed top-1/2 right-0 w-[60px] h-[60px] flex items-center justify-end z-50",
          className
        )}
      >
        {modal === "close" && (
          <Button
            onClick={() => setModal("open")}
            variant={"ghost"}
            className=" w-auto h-auto bg-transparent p-0 hover:bg-transparent hover:opacity-80"
          >
            <Image src={"/images/chat.png"} alt="chat" width={60} height={60} />{" "}
          </Button>
        )}
      </div>

      {modal === "open" && (
        <div className="fixed top-[5%] right-[5%] z-50 max-w-[350px] rounded-lg h-[90%] bg-[#273f2b] shadow-2xl">
          <header className="p-6 w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={"/images/chat-logo.avif"}
                alt="logo-chat"
                width={38}
                height={38}
              />
              <span className="text-white">Wilde</span>
            </div>
            <Button
              variant={"ghost"}
              onClick={() => setModal("close")}
              className="hover:bg-transparent"
            >
              <X width={20} height={20} className="text-white" />
            </Button>
          </header>
          <article
            id="description-cht"
            className="w-full mt-6 text-[1.25rem] px-6 text-white max-w-[300px]"
          >
            At your service, welcome! We&apos;re delighted to have you with us.
            I&apos;m your virtual assistant, how can I help you today?
          </article>

          <section className="w-full h-2/4 flex flex-col justify-end items-center">
            <div className="w-[90%] mt-auto px-4 py-1 bg-primaryBg flex items-center gap-2 rounded-full">
              <input
                type="text"
                className="bg-transparent focus:outline-none w-full"
                placeholder="Type here ..."
              />
              <Button
                variant={"ghost"}
                className="hover:bg-transparent text-[1.125rem] leading-[1.575rem] space-x-[.01125em]"
              >
                <svg
                  fill="#273F2B"
                  width="25px"
                  height="25px"
                  viewBox="0 0 256 256"
                >
                  <path d="M231.626,128a16.015,16.015,0,0,1-8.18262,13.96094L54.53027,236.55273a15.87654,15.87654,0,0,1-18.14648-1.74023,15.87132,15.87132,0,0,1-4.74024-17.60156L60.64746,136H136a8,8,0,0,0,0-16H60.64746L31.64355,38.78906A16.00042,16.00042,0,0,1,54.5293,19.44727l168.915,94.59179A16.01613,16.01613,0,0,1,231.626,128Z"></path>
                </svg>
              </Button>
            </div>
            <p className="mt-2 w-full text-center text-primaryBg text-xs">
              Chat powered by D3x
            </p>
          </section>
        </div>
      )}
      {children}
    </>
  );
};

export default ChatProvider;
