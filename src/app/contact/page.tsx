import ContainerWrapper from '@/components/ContainerWrapper';
import PageHero from '@/components/pageHero/PageHero';

const Contact = () => {
  return (
    <>
      <PageHero
        image="/pages/contact-bg.jpg"
        title="Contact Us"
        description="Get in Touch with Us for Any Queries or Assistance!"
      />
      <ContainerWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 py-24 gap-5">
          <div className="space-y-5">
            <h2 className="text-3xl">Get Connect With Us!</h2>
            <p className="font-light">
              Questions? Comments? Please fill out the Form or Email us at
              noreply@canvas.com.
            </p>
            <p className="font-light">Thank you for being in touch!</p>
          </div>
          <div>
            <form className="space-y-5">
              <label className="input input-bordered flex items-center gap-2">
                Name
                <input type="text" className="grow" placeholder="Daisy" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Email
                <input
                  type="text"
                  className="grow"
                  placeholder="daisy@site.com"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Phone
                <input
                  type="text"
                  className="grow"
                  placeholder="+1 667 688 0000"
                />
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Message"
                rows={5}
              ></textarea>
              <button className="btn btn-active btn-wide btn-neutral">
                Send
              </button>
            </form>
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Contact;
