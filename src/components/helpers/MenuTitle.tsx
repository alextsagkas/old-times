import Image from "next/image";

import { MenuTitleProps } from "../../../types/types";

const MenuTitle = ({ menuItem }: MenuTitleProps) => {
  return (
    <div className="mb-4 flex flex-row items-center md:mb-6">
      <h1 className="mr-2 font-vujahddayScript text-2xl font-bold text-primary">
        {menuItem.category}
      </h1>
      {menuItem.fresh === 1 && (
        <Image
          src="/vegetarianIcon.png"
          alt="vegetarian-icon"
          width={48}
          height={48}
          className="h-3 w-3"
        />
      )}
      {menuItem.fresh === 2 && (
        <div className="flex flex-row items-center">
          <Image
            src="/vegetarianIcon.png"
            alt="vegetarian-icon"
            width={48}
            height={48}
            className="h-3 w-3"
          />
          <Image
            src="/vegetarianIcon.png"
            alt="vegetarian-icon"
            width={48}
            height={48}
            className="h-3 w-3"
          />
        </div>
      )}
    </div>
  );
};

export default MenuTitle;
