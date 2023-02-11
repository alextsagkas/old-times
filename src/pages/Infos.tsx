import PageComponent from "../helperComponents/PageComponent";

interface InfosProps {
  foodInfos: {
    greek: string[];
    english: string[];
  };
  restaurantInfos: {
    greek: string[];
    english: string[];
  };
}

const Infos = ({ foodInfos, restaurantInfos }: InfosProps) => {
  return (
    <PageComponent>
      <>
        <div className="flex flex-col gap-4 font-serif text-xs font-thin">
          <ul className="flex list-none flex-col gap-1 text-left">
            {foodInfos.greek.map((greekItem) => (
              <li key={greekItem}>{greekItem}</li>
            ))}
            {foodInfos.english.map((englishItem) => (
              <li key={englishItem}>{englishItem}</li>
            ))}
          </ul>
          <ul className="flex list-none flex-col gap-1 text-left">
            {restaurantInfos.greek.map((greekItem) => (
              <li key={greekItem}>{greekItem}</li>
            ))}
            {restaurantInfos.english.map((englishItem) => (
              <li key={englishItem}>{englishItem}</li>
            ))}
          </ul>
        </div>
      </>
    </PageComponent>
  );
};

export default Infos;
