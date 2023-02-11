import Image from "next/image";
import { menuCategoryInterface } from "../../types/types";

interface MenuItemMapProps {
  menuItem: menuCategoryInterface;
}

const MenuItemMap = ({ menuItem }: MenuItemMapProps) => {
  return (
    <div className="flex flex-col gap-3">
      {menuItem.items.map((item) => {
        return (
          <div
            key={item.name}
            className="flex flex-row  justify-between items-start gap-10 xs:gap-20"
          >
            <div className="flex flex-col items-start gap-1">
              <div className="flex flex-row gap-2">
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
            </div>
            {item.price != 0 && (
              <h3 className="font-sans text-xs font-medium">
                {item.price.toFixed(2)}
              </h3>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MenuItemMap;
