import { forwardRef } from "react";
import { menuCategoryInterface } from "../../types/types";

import MenuItemMap from "../helperComponents/MenuItemMap";
import MenuTitle from "../helperComponents/MenuTitle";
import PageComponent from "../helperComponents/PageComponent";

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

export default MenuItem;
