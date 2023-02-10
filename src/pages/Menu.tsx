import Image from "next/image";
import { menuCategoryInterface } from "../../types/types";
import PageComponent from "./PageComponent";

interface menuProps {
  bruschetta: menuCategoryInterface;
}

function Menu({ bruschetta }: menuProps) {
  return (
    <PageComponent>
      <div className="mt-6">
        <div className="flex flex-row items-center">
          <h1 className="mr-2 font-vujahddayScript text-2xl font-bold text-primary">
            {bruschetta.category}
          </h1>
          {bruschetta.fresh === 1 && (
            <Image
              src="/vegetarianIcon.png"
              alt="vegetarian-icon"
              width={48}
              height={48}
              className="h-3 w-3"
            />
          )}
          {bruschetta.fresh === 2 && (
            <div className="flex flex-row items-center">
              <Image
                src="/vegetarianIcon.png"
                alt="vegetarian-icon"
                width={48}
                height={48}
                className="h-3 w-3"
              />
              <Image
                src="/vegetarianIcon.png"
                alt="vegetarian-icon"
                width={48}
                height={48}
                className="h-3 w-3"
              />
            </div>
          )}
        </div>
        <div>
          {bruschetta.items.map((item) => {
            return (
              <div className="mt-3 flex flex-row items-start justify-between">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex flex-row items-center">
                    <h2 className="mr-2 font-merriweather text-xs font-bold">
                      {item.name}
                    </h2>
                    {item.fresh === 1 && (
                      <Image
                        src="/vegetarianIcon.png"
                        alt="vegetarian-icon"
                        width={48}
                        height={48}
                        className="h-3 w-3"
                      />
                    )}
                    {item.fresh === 2 && (
                      <div className="flex flex-row items-center">
                        <Image
                          src="/vegetarianIcon.png"
                          alt="vegetarian-icon"
                          width={48}
                          height={48}
                          className="h-3 w-3"
                        />
                        <Image
                          src="/vegetarianIcon.png"
                          alt="vegetarian-icon"
                          width={48}
                          height={48}
                          className="h-3 w-3"
                        />
                      </div>
                    )}
                  </div>
                  {item.description != "" && (
                    <h3 className="font-sans text-xs text-gray-500">
                      ({item.description})
                    </h3>
                  )}
                </div>
                <h3 className="font-sans text-xs font-medium">
                  {item.price.toFixed(2)}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </PageComponent>
  );
}

export default Menu;
