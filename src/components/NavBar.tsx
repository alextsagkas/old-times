import Image from "next/image";
import { useEffect, useState } from "react";

import PageComponent from "../components/PageComponent";

import { type NavBarProps } from "../../typescript/types";
import { type RefsItemInterface } from "../../typescript/interfaces";

const NavBar = ({ children, refs, scrollPosition }: NavBarProps) => {
  const [title, setTitle] = useState<string>("Menu");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const refShorTitle = (title: string): string => {
    if (title === "Traditional Greek dishes") {
      return "Traditional";
    } else if (title === "Ice cream and milkshake") {
      return "Ice cream";
    } else {
      return title;
    }
  };

  useEffect(() => {
    refs.map((ref: RefsItemInterface) => {
      if (
        ref.ref.current?.getBoundingClientRect() !== undefined &&
        ref.ref.current?.getBoundingClientRect().top < 10 &&
        !isVisible
      ) {
        setTitle(refShorTitle(ref.title));
      }

      if (isVisible) {
        setTitle("Menu");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition, isVisible]);

  const hamburgerLine =
    "h-[4px] w-8 my-[2.5px] rounded-full bg-primary transition-all ease-in-out opacity-100 duration-[500ms]";

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 w-full border-b-2 border-primary bg-secondary-100 ${
          isVisible ? "opacity-100" : " opacity-95"
        }`}
      >
        <PageComponent>
          <div className="grid grid-cols-3 items-center py-2 md:py-2">
            <nav className="justify-self-start font-serif font-medium text-primary text-sm min-[330px]:text-base min-[370px]:text-lg md:text-xl">
              {title}
            </nav>
            <nav className="h-8 justify-self-center">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setIsVisible(false);
                  if (refs[0] !== undefined) {
                    refs[0].ref.current?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Image
                  src="/old_times_transparent.png"
                  alt="old-times-logo"
                  width={150}
                  height={150}
                  className="my-0 h-8 w-8 py-0"
                />
              </button>
            </nav>
            <nav className="flex flex-row justify-end">
              <button
                className="flex cursor-pointer flex-col items-center justify-center outline-none"
                onClick={(event) => {
                  event.preventDefault();
                  setIsVisible(!isVisible);
                }}
              >
                <div
                  className={`${hamburgerLine} ${
                    isVisible ? "translate-y-[9px] rotate-45" : ""
                  }`}
                />
                <div
                  className={`${hamburgerLine} ${
                    isVisible ? "origin-center scale-x-0 opacity-0" : ""
                  }`}
                />
                <div
                  className={`${hamburgerLine} ${
                    isVisible ? "-translate-y-[9px] -rotate-45" : ""
                  }`}
                />
              </button>
            </nav>
          </div>
        </PageComponent>
      </div>
      <section
        className={`fixed top-[49px] h-full w-full origin-top bg-primary transition-all duration-[400ms] ease-out ${
          isVisible ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <PageComponent>
          <div className="grid h-fit grid-cols-2 font-normal justify-items-start gap-y-5 py-4 font-serif text-xl">
            {refs.map((ref) => {
              if (ref.title !== "Menu") {
                return (
                  <nav
                    key={ref.title}
                    className={`w-full cursor-pointer text-center text-secondary-100 transition-all duration-100 ease-out ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={(event) => {
                      event.preventDefault();
                      setIsVisible(false);
                      ref.ref.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {refShorTitle(ref.title)}
                  </nav>
                );
              }
            })}
          </div>
        </PageComponent>
      </section>
      {children}
    </>
  );
};

export default NavBar;
