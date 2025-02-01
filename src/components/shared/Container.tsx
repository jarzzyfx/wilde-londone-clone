import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLDivElement>;

const Container: FC<Props> = ({ children, className, ...props }) => {
  return (
    <section {...props} className={cn("w-[90%] h-full mx-auto", className)}>
      {children}
    </section>
  );
};

export default Container;
