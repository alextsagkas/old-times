import { type MenuItemMapSubItemsProps } from "../../../typescript/types";

const MenuItemMapSubItems = ({ item }: MenuItemMapSubItemsProps) => {
  if (item.subItems.length !== 0) {
    return (
      <ul className="mt-2 flex flex-col gap-2 text-left">
        {item.subItems.map((subItem) => (
          <li
            key={subItem.name}
            className="flex flex-row justify-between gap-3 font-merriweather text-xs"
          >
            <div className="flex flex-row justify-start gap-1">
              <div>•</div>
              <div className="text-left">{subItem.name}</div>
            </div>
            <div>+{subItem.price.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    );
  } else {
    return <></>;
  }
};

export default MenuItemMapSubItems;
