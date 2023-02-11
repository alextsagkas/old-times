import Image from "next/image";
import MapPin from "../../icons/MapPin";
import Phone from "../../icons/Phone";

import PageComponent from "./PageComponent";
import { FootnoteProps } from "../../types/types";

function Footnote({
  facebookURL,
  tripadvisorURL,
  road,
  telephone,
}: FootnoteProps) {
  return (
    <div className="mt-10 border-t-2 border-primary py-4">
      <PageComponent>
        <div className="flex flex-row justify-between text-xs">
          <div className="flex flex-col gap-1">
            <a href={facebookURL} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-row items-center justify-start gap-1">
                <Image
                  src="/facebookIcon.png"
                  alt="facebok-icon"
                  width={20}
                  height={20}
                  className="h-4 w-4"
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
                  className="h-4 w-4"
                />
                Tripadvisor
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <a
              href={"https://maps.app.goo.gl/DhyZsuY8GdrtpU5y6?g_st=ic"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center justify-start gap-1">
                <MapPin />
                {road}
              </div>
            </a>
            <div className="flex flex-row items-center justify-start gap-1">
              <Phone />
              {telephone}
            </div>
          </div>
        </div>
      </PageComponent>
    </div>
  );
}

export default Footnote;
