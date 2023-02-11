import Image from "next/image";

import { menuDessertCategoryInterface } from "../../types/types";

interface MenuDessertItemMapProps {
  menuItem: menuDessertCategoryInterface;
}

const MenuDessertItemMap = ({ menuItem }: MenuDessertItemMapProps) => {
  return (
    <div className="flex flex-col gap-3">
      {menuItem.items.map((item) => {
        return (
          <div
            key={item.name}
            className="flex flex-row items-start justify-between gap-10 xs:gap-20"
          >
            <div className="flex flex-col items-start gap-1">
              <div className="flex flex-row items-center gap-2">
                <h2 className="font-merriweather text-xs font-bold">
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
              {item.items.length != 0 && (
                <ul className="ml-3 flex list-disc flex-col gap-1 text-left">
                  {item.items.map((subItem) => (
                    <li
                      key={subItem.name}
                      className="font-merriweather text-xs"
                    >
                      {subItem.name} +{subItem.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <h3 className="font-sans text-xs font-medium">
              {item.price.toFixed(2)}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default MenuDessertItemMap;
