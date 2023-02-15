import PageComponent from "../components/PageComponent";

import { type InfosProps } from "../../typescript/types";

const Infos = ({ foodInfos, restaurantInfos }: InfosProps) => {
  return (
    <PageComponent>
      <div className="flex flex-col gap-4 font-serif text-xs font-thin md:grid md:grid-cols-2 md:justify-items-center md:gap-8">
        <ul className="flex list-none flex-col gap-1 text-left font-serif text-xs font-thin md:justify-between md:gap-3">
          {foodInfos.greek.map((greekItem) => (
            <li className="" key={greekItem}>
              {greekItem}
            </li>
          ))}
          {restaurantInfos.greek.map((greekItem) => (
            <li className="" key={greekItem}>
              {greekItem}
            </li>
          ))}
        </ul>
        <ul className="flex list-none flex-col gap-1 text-left font-serif text-xs font-thin md:justify-between md:gap-3">
          {foodInfos.english.map((englishItem) => (
            <li className="" key={englishItem}>
              {englishItem}
            </li>
          ))}
          {restaurantInfos.english.map((englishItem) => (
            <li className="" key={englishItem}>
              {englishItem}
            </li>
          ))}
        </ul>
      </div>
    </PageComponent>
  );
};

export default Infos;
