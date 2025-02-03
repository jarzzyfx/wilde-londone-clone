"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

type State = "open" | "closed";

const SnackBar = ({}) => {
  const [snackState, setSnackState] = useState<State>("open");

  if (snackState === "closed") return null;
  if (snackState === "open") {
    return (
      <div className="h-[85px] py-4 w-full bg-secondaryBg flex justify-center items-center">
        <section className="w-[90%] h-full flex justify-between items-center">
          <div className="flex h-full items-center gap-4">
            <Image src={"/cup.svg"} alt="cup svg" width={72} height={54} />

            <p className="text-[1.375rem] leading-[1.58125rem] font-mediaanIt">
              20% off January Sale!{" "}
              <Link href={""} className="not-italic underline ml-2">
                Book Now
              </Link>
            </p>
          </div>
          <Button
            className="hover:bg-primaryBg rounded-full h-[40px] w-[40px]"
            onClick={() => setSnackState("closed")}
            variant={"ghost"}
          >
            <X className="w-[100px] h-[100px]" />
          </Button>
        </section>
      </div>
    );
  }
};

export default SnackBar;
