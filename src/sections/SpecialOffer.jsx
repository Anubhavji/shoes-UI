import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex">
        <img
          src={offer}
          width={773}
          height={678}
          className="w-full object-contain"
        />
      </div>
      <div className=" flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red">Super</span> Offer
        </h2>
        <p
          className="mt-4 lg:max-w-lg info-text 
        "
        >
          Embrak on a shopping journy that redefines your experience with
          unbeatable deals from premier selection to incredible we offer
          unparralleld value that sets us apart.
        </p>
        <p
          className="mt-4 lg:max-w-lg info-text 
        "
        >
          Navigate a realm of Possibilities designed to fullfill your unique
          desires. Surparring the laftiest expectation. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
