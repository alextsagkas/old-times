import Image from "next/image";
import { useEffect, useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";
import { NavBarProps, RefsItemInterface } from "../../types/types";

const NavBar = ({ children, refs, scrollPosition }: NavBarProps) => {
  const [title, setTitle] = useState("Menu");

  useEffect(() => {
    refs.map((ref: RefsItemInterface) => {
      if (
        ref.ref.current?.getBoundingClientRect() !== undefined &&
        ref.ref.current?.getBoundingClientRect().top < 7
      ) {
        setTitle(ref.title);
      }
    });
  }, [scrollPosition]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full border-b-2 border-primary bg-orange-100 opacity-95">
        <div className="grid max-w-3xl grid-cols-3 items-center py-1 px-6 min-[400px]:px-10 sm:mx-auto sm:w-9/12">
          <div className="text-normal justify-self-start font-vujahddayScript font-bold text-primary">
            {title}
          </div>
          <button
            onClick={() => {
              if (refs[0] !== undefined) {
                refs[0].ref.current?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="justify-self-center"
          >
            <Image
              src="/old_times_transparent.png"
              alt="old-times-logo"
              width={150}
              height={150}
              className="h-8 w-8"
            />
          </button>
          <Bars3Icon className="h-7 w-7 justify-self-end text-primary" />
        </div>
      </div>
      {children}
    </>
  );
};

export default NavBar;
