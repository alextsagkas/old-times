import { PageComponentProps } from "../../types/types";

const PageComponent = ({ children }: PageComponentProps) => {
  return (
    <section className="h-fit min-w-[320px] max-w-3xl px-6 min-[400px]:px-10 sm:mx-auto sm:w-9/12">
      {children}
    </section>
  );
};

export default PageComponent;
