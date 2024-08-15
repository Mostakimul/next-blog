type ContainerWrapperProps = {
  children: React.ReactNode;
};

const ContainerWrapper = ({ children }: ContainerWrapperProps) => {
  return <section className="container mx-auto">{children}</section>;
};

export default ContainerWrapper;
