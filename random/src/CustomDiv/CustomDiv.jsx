import React from "react";


const CustomDiv = ({
  children,
  width,
  height,
  borderRadius,
  border,
  padding,
  margin,
  position,
  fontSize,
  color,
  TextTransform,
  background,
  fontFamily,
  textAlighn,
  letterSpacing,
}) => {
  const divWidth = width ? width : "70%";
  const divHeight = height ? height : "50%";
  const divBR = borderRadius ? borderRadius : 0;
  const divBorder = border ? border : "1px solid black";
  const divMargin = margin ? margin : "10rem";
  const divPadding = padding ? padding : "50px";
  const divPosition = position ? position : "absolute";
  const  divfontSize = fontSize ? fontSize : 49;
  const divColor = color ? color : "blue";
  const divBackgroundColor = background ? background : "linear-gradient(#e38477, #9198e5)";
  const divTextTransform = TextTransform ? TextTransform : "uppercase";
  const divFontFamily = fontFamily ? fontFamily : "inherit";
  const divTextAlighn = textAlighn ? textAlighn : "center";
  const divLetterSpacing = letterSpacing ? letterSpacing : "5px";
  return (
    <div
      style={{
        width: divWidth,
        height: divHeight,
        borderRadius: divBR,
        border: divBorder,
        margin: divMargin,
        padding: divPadding,
        position: divPosition,
        fontSize : divfontSize,
        color :divColor,
        textTransform : divTextTransform,
        background : divBackgroundColor,
        fontFamily : divFontFamily,
        textAlign : divTextAlighn,
        letterSpacing : divLetterSpacing,
      }}
    >
      {children}
    </div>
  );
};

export default CustomDiv;