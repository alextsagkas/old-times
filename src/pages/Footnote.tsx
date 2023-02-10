import Image from "next/image";

import PageComponent from "./PageComponent";

interface FootnoteProps {
  facebookURL: string;
  tripadvisorURL: string;
  road: string;
  telephone: string;
}

function Footnote({
  facebookURL,
  tripadvisorURL,
  road,
  telephone,
}: FootnoteProps) {
  return (
  <div className="border-t-2 py-4 border-primary">
    <PageComponent>
      <div className="flex flex-row justify-between text-sm">
        <div className="flex flex-col">
          <a href={facebookURL} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row items-center justify-start gap-1">
              <Image
                src="/facebookIcon.png"
                alt="facebok-icon"
                width={20}
                height={20}
                className="flex h-3 w-3"
              />
              Facebook
            </div>
          </a>
          <a href={tripadvisorURL} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row items-center justify-start gap-1">
              <Image
                src="/tripadvisorIcon.png"
                alt="facebok-icon"
                width={20}
                height={20}
                className="flex h-3 w-3"
              />
              Tripadvisor
            </div>
          </a>
        </div>
        <div className="flex flex-col">
          <h3>{road}</h3>
          <h3>{telephone}</h3>
        </div>
      </div>
    </PageComponent>
  </div>
  );
}

export default Footnote;
