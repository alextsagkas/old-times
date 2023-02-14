import Image from "next/image";

import { MenuDessertItemMapProps } from "../../types/types";

const MenuDessertItemMap = ({ menuItem }: MenuDessertItemMapProps) => {
  return (
    <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-y-3 md:gap-x-8">
      {menuItem.items.map((item) => {
        return (
          <div
            key={item.name}
            className="flex flex-row items-start justify-between gap-10 xs:gap-20 min-[750px]:gap-4 md:gap-10"
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
                <ul className="mt-2 flex flex-col gap-2 text-left">
                  {item.items.map((subItem) => (
                    <li
                      key={subItem.name}
                      className="flex flex-row justify-between gap-3 font-merriweather text-xs"
                    >
                      <div className="flex flex-row justify-start gap-1">
                        <div>•</div>
                        <div className="text-left">{subItem.name}</div>
                      </div>
                      <div>+{subItem.price.toFixed(2)}</div>
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
