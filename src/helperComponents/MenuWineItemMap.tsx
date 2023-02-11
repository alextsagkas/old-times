import MenuItemMap from "./MenuItemMap";
import { menuCategoryInterface } from "../../types/types";

interface MenuWineItemMapProps {
  menuItem: menuCategoryInterface;
}

const MenuWineItemMap = ({ menuItem }: MenuWineItemMapProps) => {
  return (
    <div className="flex flex-col mt-4">
      <h2 className="text-center font-merriweather text-lg font-bold text-primary">
        {menuItem.category}
      </h2>
      <MenuItemMap menuItem={menuItem} />
    </div>
  );
};

export default MenuWineItemMap;
