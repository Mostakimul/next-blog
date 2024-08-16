const Quote = ({ text, author }: { text: string; author: string }) => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/pages/recipe-bg-2.jpg')",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-max pt-32 pb-10 space-y-5">
          <h3 className="text-4xl">{text}</h3>
          <p> – {author}</p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
