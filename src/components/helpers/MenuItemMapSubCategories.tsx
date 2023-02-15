import MenuItemMap from "./MenuItemMap";

import { MenuProps } from "../../../types/types";

const MenuItemMapSubCategories = ({ menuItem }: MenuProps): JSX.Element => {
  // Unique subCategories
  const subCategories = [
    ...new Set(
      menuItem.items.map((item) => {
        return item.subCategory;
      })
    ),
  ];

  return (
    <div className="mt-4 flex flex-col md:mt-6">
      {subCategories.map((subCategory, index) => (
        <div key={index + subCategory + menuItem.items[0]?.name}>
          {subCategories.length > 1 && (
            <h2 className="mb-2 text-center font-merriweather text-lg font-bold text-primary md:mb-4">
              {subCategory}
            </h2>
          )}
          <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-y-3 md:gap-x-8">
            {menuItem.items.map((item, index) => (
              <div key={index + item.name}>
                <MenuItemMap item={item} subCategory={subCategory} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemMapSubCategories;
