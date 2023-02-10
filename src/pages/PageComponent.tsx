interface PageComponentProps {
  children: JSX.Element;
}

const PageComponent = ({ children }: PageComponentProps) => {
  return <section className="px-12">{children}</section>;
};

export default PageComponent;
