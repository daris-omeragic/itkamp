import React from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import CategoryTab from "../../Templates/CategoryTab/CategoryTab";
import ArticlesHomePage from "../../Templates/ArticlesHomePage/ArticlesHomePage";
import { Grid } from "@mui/material";
import Footer from "../../Templates/Footer/Footer";






const ShopScreen = () => {




  return (
    <>
    <Navigation/>
    <Grid container direction='row' padding='10px 10%'>
      <Grid item lg={3}>
        <CategoryTab/>
      </Grid>
      <Grid item lg={9} marginLeft='0px'>
        <ArticlesHomePage/>
      </Grid>
    </Grid>
    <Footer/>
    </>
  );
};

export default ShopScreen;