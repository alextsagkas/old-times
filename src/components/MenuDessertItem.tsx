import { forwardRef } from "react";

import MenuDessertItemMap from "../components/MenuDessertItemMap";
import MenuTitle from "../components/MenuTitle";
import PageComponent from "../components/PageComponent";
import { MenuDessertProps } from "../../types/types";

const MenuDessertItem = forwardRef<HTMLDivElement, MenuDessertProps>(
  ({ menuItem }: MenuDessertProps, ref: React.ForwardedRef<HTMLDivElement>) => {
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
