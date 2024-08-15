type ContainerWrapperProps = {
  children: React.ReactNode;
};

const ContainerWrapper = ({ children }: ContainerWrapperProps) => {
  return (
    <section className="container mx-auto px-5 lg:px-0">{children}</section>
  );
};

export default ContainerWrapper;
