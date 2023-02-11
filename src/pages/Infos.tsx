import PageComponent from "../helperComponents/PageComponent";
import Separator from "../helperComponents/Separator";

interface InfosProps {
  foodInfos: {
    greek: string[];
    english: string[];
  };
  restaurantInfos: {
    greek: string[];
    english: string[];
  };
  footnote: string[];
}
const Infos = ({ foodInfos, restaurantInfos, footnote }: InfosProps) => {
  return (
    <PageComponent>
      <>
        <Separator />
        <div className="flex flex-col gap-3 font-serif text-xs font-thin">
          <ul className="flex list-none flex-col gap-1 text-left">
            {foodInfos.greek.map((greekItem) => (
              <li key={greekItem}>{greekItem}</li>
            ))}
            {foodInfos.english.map((englishItem) => (
              <li key={englishItem}>{englishItem}</li>
            ))}
          </ul>
          <ul className="mt-4 flex list-none flex-col gap-1 text-left">
            {restaurantInfos.greek.map((greekItem) => (
              <li key={greekItem}>{greekItem}</li>
            ))}
            {restaurantInfos.english.map((englishItem) => (
              <li key={englishItem}>{englishItem}</li>
            ))}
          </ul>
        </div>
        <Separator />
        <ul className="mt-4 font-merriweather text-xs flex list-none flex-col gap-1 text-left">
          {footnote.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    </PageComponent>
  );
};

export default Infos;
