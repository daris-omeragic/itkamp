import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as SliderCarousel } from "react-responsive-carousel";
import Text from "../Text/Text";
import SimplifiedDiv from "../SimplifiedDiv/SimplifiedDiv";
import { colors, fontSize, fontWeight } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers";

const Carousel = ({ data }) => {
  const deviceWidth = getScreenWidth();
  const smallScreen = deviceWidth === "SM" ? true : false;
  const styles = {
    carouselText: {
      position: "absolute",
      bottom: 30,
      left: 10,
      right: 10,
    },
    carouselTextSmallScreen: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    },
  };

  return (
    <SliderCarousel
      width="100%"
      axis="horizontal"
      showIndicators
      showThumbs={false}
      interval={1000}
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      swipeable
    >
      {data.map((d) => (
        <div key={d} style={{ width: "100%", height: "400px" }}>
          <SimplifiedDiv style={{ position: "relative" }}>
            <Text
              fontSize={fontSize.largeG}
              color={colors.accentColor}
              textAlign="start"
              margin = '0px 30px'
            >
              E-SHOPPER
            </Text>
            <Text
              fontSize='20px'
              color={colors.lightBlack}
              textAlign="start"
              margin = '0px 30px'
              fontWeight = {fontWeight.mediumBold}
            
            >
              Free E-Commerce Template
            </Text>
            <Text
              fontSize={fontSize.normal}
              color={colors.lightBlack}
              textAlign="start"
              margin = '25px 30px'
              letterSpacing = '0.2px'
            >
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </SimplifiedDiv>
          <img
            src={d.imgSrc}
            style={{ width: "100%", height: "calc(100% - 100px)", objectFit: "contain" }}
            alt={d.imgText}
          />
          <SimplifiedDiv
            style={smallScreen ? styles.carouselTextSmallScreen : styles.carouselText}
          >

          </SimplifiedDiv>
        </div>
      ))}
    </SliderCarousel>
  );
};

export default Carousel;
