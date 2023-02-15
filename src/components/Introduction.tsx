import { forwardRef } from "react";
import Image from "next/image";

import PageComponent from "../components/PageComponent";

import { type IntroductionProps } from "../../typescript/types";

const Introduction = forwardRef<HTMLDivElement, IntroductionProps>(
  (
    { title, subtitle, description }: IntroductionProps,
    IntroRef: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <PageComponent>
        <div className="pt-16" ref={IntroRef}>
          <Image
            width={200}
            height={200}
            src={"/old_times_transparent.png"}
            alt="Picture of the author"
            className={"mx-auto h-auto w-auto"}
            priority={true}
          />
          <div>
            <h1 className="font-md pt-6 font-libreCalsonText text-5xl text-primary">
              {title}
            </h1>
            <h2 className="pt-6 text-xl text-primary"> {subtitle}</h2>
            <h3 className="pt-6 text-sm text-primary">{description}</h3>
          </div>
        </div>
      </PageComponent>
    );
  }
);

Introduction.displayName = "Introduction";

export default Introduction;
