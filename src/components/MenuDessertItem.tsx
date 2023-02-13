import { forwardRef } from "react";

import MenuDessertItemMap from "../components/MenuDessertItemMap";
import MenuTitle from "../components/MenuTitle";
import PageComponent from "../components/PageComponent";

import { menuDessertCategoryInterface } from "../../types/types";

interface MenuProps {
  menuItem: menuDessertCategoryInterface;
}

const MenuDessertItem = forwardRef<HTMLDivElement, MenuProps>(
  ({ menuItem }: MenuProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <PageComponent>
        <div ref={ref}>
          <MenuTitle menuItem={menuItem} />
          <MenuDessertItemMap menuItem={menuItem} />
        </div>
      </PageComponent>
    );
  }
);

MenuDessertItem.displayName = "MenuDessertItem";

export default MenuDessertItem;
