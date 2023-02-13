import Image from "next/image";
import { useEffect, useState } from "react";

import PageComponent from "../helperComponents/PageComponent";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavBarProps, RefsItemInterface } from "../../types/types";

const NavBar = ({ children, refs, scrollPosition }: NavBarProps) => {
  const [title, setTitle] = useState("Menu");
  const [isVisible, setIsVisible] = useState(false);

  const refShorTitle = (title: string): string => {
    if (title === "Traditional Greek dishes" && window.innerWidth < 768) {
      return "Traditional";
    } else if (title === "Ice cream and milkshake" && window.innerWidth < 768) {
      return "Ice cream";
    } else {
      return title;
    }
  };

  useEffect(() => {
    refs.map((ref: RefsItemInterface) => {
      if (
        ref.ref.current?.getBoundingClientRect() !== undefined &&
        ref.ref.current?.getBoundingClientRect().top < 7
      ) {
        setTitle(refShorTitle(ref.title));
      }
    });
  }, [scrollPosition]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 w-full border-b-2 border-primary bg-orange-100 ${
          isVisible ? "opacity-100" : " opacity-95"
        }`}
      >
        <PageComponent>
          <div className="grid grid-cols-3 items-center py-1">
            <div className="text-normal justify-self-start font-vujahddayScript font-bold text-primary">
              {title}
            </div>
            <button
              onClick={(event) => {
                event.preventDefault();
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
            {isVisible ? (
              <XMarkIcon
                onClick={(event) => {
                  event.preventDefault();
                  setIsVisible(false);
                }}
                className="h-7 w-7 justify-self-end text-primary"
              />
            ) : (
              <Bars3Icon
                onClick={(event) => {
                  event.preventDefault();
                  setIsVisible(true);
                }}
                className="h-7 w-7 justify-self-end text-primary"
              />
            )}
          </div>
        </PageComponent>
        {isVisible && (
          <div className="h-screen bg-primary">
            <PageComponent>
              <div className="text-normal grid h-fit grid-cols-2 justify-items-start gap-y-2 py-2 font-vujahddayScript">
                {refs.map((ref) => {
                  if (ref.title !== "Menu") {
                    return (
                      <div
                        key={ref.title}
                        className="w-full text-orange-100"
                        onClick={(event) => {
                          event.preventDefault();
                          setIsVisible(false);
                          ref.ref.current?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        {refShorTitle(ref.title)}
                      </div>
                    );
                  }
                })}
              </div>
            </PageComponent>
          </div>
        )}
      </div>
      {children}
    </>
  );
};

export default NavBar;
