import PageComponent from "../components/PageComponent";

import { FoodDetailsProps } from "../../types/types";

const FoodDetails = function ({ foodDetails }: FoodDetailsProps) {
  return (
    <PageComponent>
      <div className="flex flex-col gap-4 font-serif text-xs font-thin md:grid md:grid-cols-2 md:justify-items-center md:gap-0">
        <ul className="flex list-disc flex-col gap-1 text-left md:list-none md:justify-between">
          {foodDetails.greek.map((greekItem) => (
            <li key={greekItem}>{greekItem}</li>
          ))}
        </ul>
        <ul className="flex list-disc flex-col gap-1 text-left md:list-none md:justify-between">
          {foodDetails.english.map((englishItem) => (
            <li key={englishItem}>{englishItem}</li>
          ))}
        </ul>
      </div>
    </PageComponent>
  );
};

export default FoodDetails;
