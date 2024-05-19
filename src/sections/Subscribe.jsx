import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center gap-10 max-lg:flex-col"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> &
        Newsletters
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nikee.com"
          className="input"
        />
      </div>
      <Button label="Sign Up" fullWidth />
    </section>
  );
};

export default Subscribe;