import { forwardRef } from "react";
import { menuCategoryInterface } from "../../types/types";

import MenuItemMap from "../components/MenuItemMap";
import MenuTitle from "../components/MenuTitle";
import PageComponent from "../components/PageComponent";

interface MenuProps {
  menuItem: menuCategoryInterface;
}

const MenuItem = forwardRef<HTMLDivElement, MenuProps>(
  ({ menuItem }: MenuProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <PageComponent>
        <div ref={ref}>
          <MenuTitle menuItem={menuItem} />
          <MenuItemMap menuItem={menuItem} />
        </div>
      </PageComponent>
    );
  }
);

MenuItem.displayName = "MenuItem";

export default MenuItem;
