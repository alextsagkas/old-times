import {PageComponentProps} from "../../types/types";

const PageComponent = ({ children }: PageComponentProps) => {
  return <section className="px-12">{children}</section>;
};

export default PageComponent;
