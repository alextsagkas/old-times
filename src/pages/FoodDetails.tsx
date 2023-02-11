import Separator from "../helperComponents/Separator";
import PageComponent from "../helperComponents/PageComponent";

interface FoodDetailsProps {
  foodDetails: {
    greek: string[];
    english: string[];
  };
}
const FoodDetails = function ({ foodDetails }: FoodDetailsProps) {
  return (
    <>
      <Separator />
      <PageComponent>
        <div className="flex flex-col gap-3 font-merriweather text-xs font-thin">
          <ul className="flex list-disc flex-col gap-1 text-left">
            {foodDetails.greek.map((greekItem) => (
              <li key={greekItem}>{greekItem}</li>
            ))}
          </ul>
          <ul className="flex list-disc flex-col gap-1 text-left">
            {foodDetails.english.map((englishItem) => (
              <li key={englishItem}>{englishItem}</li>
            ))}
          </ul>
        </div>
      </PageComponent>
      <Separator />
    </>
  );
};

export default FoodDetails;
