import {
  CustomerReviews,
  Footer,
  Populerproducts,
  Subscribe,
  SuperQuality,
  SpecialOffer,
  Services,
  Hero,
} from "./sections/index,";

import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav></Nav>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero></Hero>
    </section>
    <section className="padding">
      <Populerproducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer></SpecialOffer>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer />
    </section>
  </main>
);

export default App;
