import Grid from "@mui/material/Grid";
import Text from "../../components/Text/Text";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import CategoryTab from "../CategoryTab/CategoryTab";

const styles = {
    container: {
        padding: "0px 10%"
    },
};



const ProductHomePage = () => {
    return (
        <SimplifiedDiv style={styles.container}>
            <Grid container direction='row'>
                <Grid item md={3} lg={3}>
                    <CategoryTab/>
                </Grid>
                <Grid item md={9} lg={9}>
                    <Text>Grid8</Text>
                </Grid>
            </Grid>
        </SimplifiedDiv>
    )
}


export default ProductHomePage;