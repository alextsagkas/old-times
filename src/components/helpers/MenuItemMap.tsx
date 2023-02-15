import Image from "next/image";

import MenuItemMapSubItems from "./MenuItemMapSubItems";

import { MenuItemMapHelperProps } from "../../../types/types";

const MenuItemMap = ({ item, subCategory }: MenuItemMapHelperProps) => {
  if (item.subCategory === subCategory) {
    return (
      <div className="flex flex-row items-start justify-between gap-10 xs:gap-20 min-[750px]:gap-4 md:gap-10">
        <div className="flex flex-col items-start gap-1">
          <div className="flex flex-row items-center gap-2">
            <h2 className="text-left font-merriweather text-xs font-bold">
              {item.name}
            </h2>
            {item.fresh === 1 && (
              <Image
                src="/vegetarianIcon.png"
                alt="vegetarian-icon"
                width={48}
                height={48}
                className="h-3 w-3"
              />
            )}
            {item.fresh === 2 && (
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
          {item.description != "" && (
            <h3 className="text-left font-sans text-xs text-gray-500">
              {item.description}
            </h3>
          )}
          <MenuItemMapSubItems item={item} />
        </div>
        <h3 className="font-sans text-xs font-medium">
          {item.price.toFixed(2)}
        </h3>
      </div>
    );
  } else {
    return <></>;
  }
};

export default MenuItemMap;
