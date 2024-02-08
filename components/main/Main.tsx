import FAQ from "../FAQ";
import Intro from "../Intro";
import Video from "../Video";
import Pricing from "../Pricing";
import Question from "../Question";
import Review from "../Review";
import Templates from "../Template";
import Choose from "../home/Choose";

const Main = () => {
  return (
    <main>
      <Intro />
      {/* <Video /> */}
      <Choose />
      <Templates />
      <Pricing />
      <Review />
      <FAQ />
      <Question />
    </main>
  );
};

export default Main;
