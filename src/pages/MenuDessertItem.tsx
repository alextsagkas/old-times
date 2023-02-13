import { forwardRef } from "react";

import MenuDessertItemMap from "../helperComponents/MenuDessertItemMap";
import MenuTitle from "../helperComponents/MenuTitle";
import PageComponent from "../helperComponents/PageComponent";

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

export default MenuDessertItem;
