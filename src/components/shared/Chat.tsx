import { FC } from "react";
import { Props } from "./Container";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ChatProvider: FC<Props> = ({ children, className, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          "fixed top-1/2 right-0 w-[60px] h-[60px] flex items-center justify-end z-50",
          className
        )}
      >
        <Button
          variant={"ghost"}
          className=" w-auto h-auto bg-transparent p-0 hover:bg-transparent hover:opacity-80"
        >
          <Image src={"/images/chat.png"} alt="chat" width={60} height={60} />{" "}
        </Button>
      </div>
      {children}
    </>
  );
};

export default ChatProvider;
