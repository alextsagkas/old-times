import { forwardRef } from "react";

import MenuItemMap from "../components/MenuItemMap";
import MenuTitle from "../components/MenuTitle";
import PageComponent from "../components/PageComponent";
import { MenuProps } from "../../types/types";

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
