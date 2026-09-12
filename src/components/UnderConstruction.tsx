import Image from "next/image";

import MapPin from "../../icons/MapPin";
import Phone from "../../icons/Phone";
import PageComponent from "../components/PageComponent";

import { type UnderConstructionProps } from "../../typescript/types";

const UnderConstruction = ({
  title,
  subtitle,
  road,
  telephone,
  facebookURL,
  tripadvisorURL,
  mapURL,
}: UnderConstructionProps) => {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-secondary-100 py-14">
      {/* Warm light falling on the card, and a soft shadow pooling beneath it. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85),rgba(255,255,255,0)_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[28rem] w-[44rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(30,68,91,0.10),rgba(30,68,91,0)_70%)]"
      />

      <PageComponent>
        <div className="relative mx-auto max-w-xl animate-fade-up rounded-sm border border-primary/20 bg-secondary-50/70 px-7 py-12 text-center shadow-[0_30px_70px_-40px_rgba(30,68,91,0.55)] backdrop-blur-[2px] motion-reduce:animate-none min-[400px]:px-12 sm:py-14">
          {/* Inner hairline rule, the way a printed menu card is framed. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[10px] border border-primary/10"
          />

          <div className="relative flex flex-col items-center">
            <Image
              width={200}
              height={200}
              src="/old_times_transparent.png"
              alt="Old Times logo"
              priority={true}
              className="h-20 w-20 animate-float motion-reduce:animate-none"
            />

            <h1 className="pt-7 font-caslon text-4xl tracking-[0.2em] text-primary min-[400px]:text-5xl">
              {title}
            </h1>
            <p className="pt-4 font-merriweather text-[0.7rem] uppercase tracking-[0.35em] text-primary/70">
              {subtitle}
            </p>

            <Image
              height={5}
              width={200}
              src="/separatorIcon.png"
              alt=""
              aria-hidden="true"
              className="my-8 w-40 opacity-60"
            />

            <p className="font-script text-3xl text-primary/80">Coming soon</p>

            <h2 className="pt-5 font-caslon text-xl leading-relaxed text-primary min-[400px]:text-2xl">
              Our new website is on its way.
            </h2>
            <p
              lang="el"
              className="pt-2 font-merriweather text-xs text-primary/60"
            >
              Ο νέος μας ιστότοπος έρχεται σύντομα.
            </p>

            <p className="max-w-md pt-6 font-merriweather text-sm leading-7 text-primary/80">
              We are laying the table for something better. Until it is ready,
              our doors in the heart of Corfu Town are open as always — come and
              find us.
            </p>

            {/* Three dots, taking their turn: work quietly in progress. */}
            <div
              aria-hidden="true"
              className="flex flex-row items-center gap-2 pt-9"
            >
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  style={{ animationDelay: `${index * 240}ms` }}
                  className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary motion-reduce:animate-none"
                />
              ))}
            </div>

            <div className="border-primary/15 mt-9 w-full border-t pt-8">
              <div className="mx-auto flex max-w-sm flex-col items-center gap-4 font-merriweather text-xs text-primary xs:flex-row xs:justify-center xs:gap-8">
                <a
                  href={mapURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-1.5 transition-opacity hover:opacity-70"
                >
                  <MapPin />
                  {road}
                </a>
                <a
                  href={`tel:${telephone.replace(/\s/g, "")}`}
                  className="flex flex-row items-center gap-1.5 transition-opacity hover:opacity-70"
                >
                  <Phone />
                  {telephone}
                </a>
              </div>

              <div className="mt-6 flex flex-row items-center justify-center gap-8 font-merriweather text-xs text-primary">
                <a
                  href={facebookURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-1.5 transition-opacity hover:opacity-70"
                >
                  <Image
                    src="/facebookIcon.png"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="h-4 w-4"
                  />
                  Facebook
                </a>
                <a
                  href={tripadvisorURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-1.5 transition-opacity hover:opacity-70"
                >
                  <Image
                    src="/tripadvisorIcon.png"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="h-4 w-4"
                  />
                  Tripadvisor
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="pt-8 text-center font-merriweather text-xs text-primary/70">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://alextsagkas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:font-semibold hover:underline hover:decoration-orange-300 hover:decoration-1 hover:underline-offset-1"
          >
            alextsagkas
          </a>
          . All rights reserved.
        </p>
      </PageComponent>
    </main>
  );
};

export default UnderConstruction;
