import { menuWineCategoryInterface } from "../../types/types";

import MenuTitle from "../helperComponents/MenuTitle";
import MenuWineItemMap from "../helperComponents/MenuWineItemMap";
import PageComponent from "./PageComponent";

interface menuProps {
  menuItem: menuWineCategoryInterface;
}

function MenuWineItem({ menuItem }: menuProps) {
  return (
    <PageComponent>
      <div className="mt-6">
        <MenuTitle menuItem={menuItem} />
        <MenuWineItemMap menuItem={menuItem.items.white} />
        <MenuWineItemMap menuItem={menuItem.items.red} />
        <MenuWineItemMap menuItem={menuItem.items.rose} />
        <MenuWineItemMap menuItem={menuItem.items.sparkling} />
      </div>
    </PageComponent>
  );
}

export default MenuWineItem;
