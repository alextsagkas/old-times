import Image from "next/image";

import PageComponent from "../helperComponents/PageComponent";
import { IntroductionProps } from "../../types/types";

const Introduction = ({ title, subtitle, description }: IntroductionProps) => {
  return (
    <PageComponent>
      <div className="py-10">
        <Image
          width={200}
          height={200}
          src={"/old_times_transparent.png"}
          alt="Picture of the author"
          className={"mx-auto"}
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
};

export default Introduction;
