import Actions from "./actions";
import Footer from "./footer";
import HeroBanner from "./hero-banner";
import Mission from "./missions";

const ContentCont = () => {
  return (
    <div className="flex flex-col gap-16">
      <HeroBanner />
      <Mission />
      <Actions />
      <Footer />
    </div>
  );
};

export default ContentCont;
