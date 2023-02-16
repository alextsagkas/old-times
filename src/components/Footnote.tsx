import Image from "next/image";

import MapPin from "../../icons/MapPin";
import Phone from "../../icons/Phone";
import PageComponent from "../components/PageComponent";

import { type FootnoteProps } from "../../typescript/types";

function Footnote({
  facebookURL,
  tripadvisorURL,
  road,
  telephone,
}: FootnoteProps) {
  return (
    <div className="pb-5">
      <PageComponent>
        <div className="mx-auto flex max-w-md flex-col gap-12">
          <div className="flex flex-row max-[800px]:gap-14 max-[800px]:mx-auto justify-between text-xs">
            <div className="flex flex-col gap-3">
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
              <a
                href={tripadvisorURL}
                target="_blank"
                rel="noopener noreferrer"
              >
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
            <div className="flex flex-col gap-3">
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
          <div className="text-xs mx-auto text-primary">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://alextsagkas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:font-semibold hover:underline hover:decoration-orange-300 hover:decoration-1 hover:underline-offset-1 max-[800px]:font-semibold max-[800px]:underline max-[800px]:decoration-orange-300 max-[800px]:decoration-1 max-[800px]:underline-offset-1"
            >
              alextsagkas
            </a>
            . All rights reserved.
          </div>
        </div>
      </PageComponent>
    </div>
  );
}

export default Footnote;
