import PageComponent from "../components/PageComponent";

import { type InfosFootnoteProps } from "../../typescript/types";

const InfosFootnote = ({ footnote }: InfosFootnoteProps) => {
  return (
    <PageComponent>
      <ul className="flex list-none flex-col gap-2 text-center font-merriweather text-xs">
        {footnote.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </PageComponent>
  );
};

export default InfosFootnote;
