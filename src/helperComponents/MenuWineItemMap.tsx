import MenuItemMap from "./MenuItemMap";
import { menuCategoryInterface } from "../../types/types";

interface MenuWineItemMapProps {
  menuItem: menuCategoryInterface;
}

const MenuWineItemMap = ({ menuItem }: MenuWineItemMapProps) => {
  return (
    <div className="mt-4 flex flex-col md:mt-6">
      <h2 className="mb-2 text-center font-merriweather text-lg font-bold text-primary md:mb-4">
        {menuItem.category}
      </h2>
      <MenuItemMap menuItem={menuItem} />
    </div>
  );
};

export default MenuWineItemMap;
