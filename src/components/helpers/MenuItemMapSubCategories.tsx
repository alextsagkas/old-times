import MenuItemMap from "./MenuItemMap";

import { type MenuProps } from "../../../typescript/types";

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
    <div className="mt-4 flex flex-col gap-4 md:gap-6 md:mt-6">
      {subCategories.map((subCategory, index) => (
        <div key={`${index.toString()} ${subCategory} ${menuItem.category}`}>
          {subCategories.length > 1 && (
            <h2 className="mb-2 text-center font-merriweather text-lg font-bold text-primary md:mb-4">
              {subCategory}
            </h2>
          )}
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-y-3 md:gap-x-8">
            {menuItem.items.map((item, index) => {
              if (item.subCategory === subCategory) {
                return (
                  <div key={index.toString() + item.name}>
                    <MenuItemMap item={item} subCategory={subCategory} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemMapSubCategories;
