import Accordian from "./components/accordian";
import RandomColorGenerator from "./components/random-color-generator";
import StarRating from "./components/star-rating";

const App = () => {
  return (
    <div>
      {/* <Accordian /> */}
      {/* <RandomColorGenerator /> */}
      <StarRating numberOfStars={10} />
    </div>
  );
};

export default App;
