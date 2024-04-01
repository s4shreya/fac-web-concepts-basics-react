import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColorGenerator from "./components/random-color-generator";
import StarRating from "./components/star-rating";

const App = () => {
  return (
    <div>
      {/* <Accordian />
      <RandomColorGenerator />
      <StarRating numberOfStars={10} />
      <ImageSlider url="https://picsum.photos/v2/list" limit={10} /> */}
      <LoadMoreData />
    </div>
  );
};

export default App;
