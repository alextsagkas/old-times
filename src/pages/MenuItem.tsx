import { menuCategoryInterface } from "../../types/types";

import MenuItemMap from "../helperComponents/MenuItemMap";
import MenuTitle from "../helperComponents/MenuTitle";
import PageComponent from "./PageComponent";

interface menuProps {
  menuItem: menuCategoryInterface;
}

function MenuItem({ menuItem }: menuProps) {
  return (
    <PageComponent>
      <div className="mt-6">
        <MenuTitle menuItem={menuItem} />
        <MenuItemMap menuItem={menuItem} />
      </div>
    </PageComponent>
  );
}

export default MenuItem;
