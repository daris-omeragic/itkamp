import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as SliderCarousel } from "react-responsive-carousel";
import { fontSize, colors } from "../../util/theme"
import Text from "../Text/Text"
import SimplifiedDiv from "../SimplifiedDiv/SimplifiedDiv";

const Carousel = ({ data }) => {
  const styles = {
    carouselText: {
      position: "absolute",
      bottom: 30,
      left: 10,
      right: 10,
    }
  }

  return (
    <SliderCarousel
      showThumbs={false}
      width='100%'
      height='100%'
      axis="horizontal"
      interval={1000}
      autoPlay
      showIndicators
      infiniteLoop
      showStatus={false}
      showArrows={false}
      swipeable

    >
      {data.map((d) => (
        <div key={d} style={{ height: '400px' }}>
          <img
            src={d.imgSrc}
            style={{ height: "100%", objectFit: "contain" }}
            alt={d.imgText}
          />
          <SimplifiedDiv style={styles.carouselText}>
            <Text fontSize={fontSize.xLarge} color={colors.gray}> {d.imgText}</Text>
          </SimplifiedDiv>
        </div>
      ))}
    </SliderCarousel>
  );
};



export default Carousel;