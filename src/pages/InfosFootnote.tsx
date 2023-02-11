import PageComponent from "../helperComponents/PageComponent";

interface InfosFootnoteProps {
  footnote: string[];
}

const InfosFootnote = ({ footnote }: InfosFootnoteProps) => {
  return (
  <PageComponent>
    <ul className="flex list-none flex-col gap-1 text-left font-merriweather text-xs">
      {footnote.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    </PageComponent>
  );
};

export default InfosFootnote;
