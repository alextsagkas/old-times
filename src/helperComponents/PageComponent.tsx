import { PageComponentProps } from "../../types/types";

const PageComponent = ({ children }: PageComponentProps) => {
  return <section className="max-w-2xl sm:w-9/12 sm:mx-auto min-[400px]:px-10 px-6">{children}</section>;
};

export default PageComponent;
