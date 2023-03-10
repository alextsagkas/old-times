import { forwardRef } from "react";

import MenuItemMapSubCategories from "../components/helpers/MenuItemMapSubCategories";
import MenuTitle from "../components/helpers/MenuTitle";
import PageComponent from "../components/PageComponent";

import { type MenuProps } from "../../typescript/types";

const MenuItem = forwardRef<HTMLDivElement, MenuProps>(
  ({ menuItem }: MenuProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <PageComponent>
        <div ref={ref} className="scroll-mt-2">
          <MenuTitle menuItem={menuItem} />
          <MenuItemMapSubCategories menuItem={menuItem} />
        </div>
      </PageComponent>
    );
  }
);

MenuItem.displayName = "MenuItem";

export default MenuItem;
