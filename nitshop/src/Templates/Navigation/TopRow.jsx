import React from "react";
//import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";

const TopRow = () => {
  return (
    <CustomDiv
      bgColor={colors.secondColor}
      width='100%'
      height='30px'
      padding='0px 5%'
      display="flex"
    >
      <PhoneIcon
        style={{
          fontSize: fontSize.normal,
        }}
      />
      <p style=
      {{fontSize:fontSize.small}}
      >+381 62 18 28 503</p>
    </CustomDiv>
  );
};

export default TopRow;
