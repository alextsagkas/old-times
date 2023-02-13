import { forwardRef } from "react";
import { menuWineCategoryInterface } from "../../types/types";

import MenuTitle from "../helperComponents/MenuTitle";
import MenuWineItemMap from "../helperComponents/MenuWineItemMap";
import PageComponent from "../helperComponents/PageComponent";

interface MenuWineProps {
  menuItem: menuWineCategoryInterface;
}

const MenuWineItem = forwardRef<HTMLDivElement, MenuWineProps>(({ menuItem }: MenuWineProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <PageComponent>
      <div ref={ref}>
        <MenuTitle menuItem={menuItem} />
        <MenuWineItemMap menuItem={menuItem.items.white} />
        <MenuWineItemMap menuItem={menuItem.items.red} />
        <MenuWineItemMap menuItem={menuItem.items.rose} />
        <MenuWineItemMap menuItem={menuItem.items.sparkling} />
      </div>
    </PageComponent>
  );
})

export default MenuWineItem;
