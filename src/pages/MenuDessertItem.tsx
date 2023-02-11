import MenuDessertItemMap from "../helperComponents/MenuDessertItemMap";
import MenuTitle from "../helperComponents/MenuTitle";
import PageComponent from "../helperComponents/PageComponent";

import { menuDessertCategoryInterface } from "../../types/types";

interface menuProps {
  menuItem: menuDessertCategoryInterface;
}

function MenuDessertItem({ menuItem }: menuProps) {
  return (
    <PageComponent>
      <div>
        <MenuTitle menuItem={menuItem} />
        <MenuDessertItemMap menuItem={menuItem} />
      </div>
    </PageComponent>
  );
}

export default MenuDessertItem;
