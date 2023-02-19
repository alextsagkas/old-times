import Image from "next/image";

import { type MenuTitleProps } from "../../../typescript/types";

const MenuTitle = ({ menuItem }: MenuTitleProps) => {
  return (
    <div className="mb-4 flex flex-row items-center md:mb-6">
      <h1 className="mr-2 font-serif text-xl font-medium min-[330px]:font-bold min-[330px]:text-lg min-[350px]:text-xl min-[430px]:text-2xl text-primary">
        {menuItem.category}
      </h1>
      {menuItem.fresh === 1 && (
        <Image
          src="/vegetarianIcon.png"
          alt="vegetarian-icon"
          width={48}
          height={48}
          className="h-5 w-5"
        />
      )}
      {menuItem.fresh === 2 && (
        <div className="flex flex-row items-center">
          <Image
            src="/vegetarianIcon.png"
            alt="vegetarian-icon"
            width={48}
            height={48}
            className="h-5 w-5"
          />
          <Image
            src="/vegetarianIcon.png"
            alt="vegetarian-icon"
            width={48}
            height={48}
            className="h-5 w-5"
          />
        </div>
      )}
    </div>
  );
};

export default MenuTitle;
