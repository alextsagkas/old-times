import MenuItemMap from "./MenuItemMap";
import { menuCategoryInterface } from "../../types/types";

interface MenuWineItemMapProps {
  menuItem: menuCategoryInterface;
}

const MenuWineItemMap = ({ menuItem }: MenuWineItemMapProps) => {
  return (
    <>
      <h2 className="mt-3 text-center font-merriweather text-lg font-bold text-primary">
        {menuItem.category}
      </h2>
      <MenuItemMap menuItem={menuItem} />
    </>
  );
};

export default MenuWineItemMap;
