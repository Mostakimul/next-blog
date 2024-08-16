import ContainerWrapper from '../ContainerWrapper';

const Subscribe = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/subscribe-bg.jpg')",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <ContainerWrapper>
        <div className="py-32 space-y-5">
          <h3 className="text-4xl">Stay Updated</h3>
          <p>Easy recipes and cookings right to your inbox</p>
          <div className="join lg:w-1/3">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item w-full"
            />
            <button className="btn join-item">Subscribe</button>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default Subscribe;
