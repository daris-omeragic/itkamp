import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import { colors } from "../../util/theme";


const styles = {
    container:{
        width :  "100%",
        borderWidth: "0.5px",
        borderColor:colors.lightGray,
        borderRadius : '5px',
        textAlign : "left"
    }
}


const CategoryTab = ()=>{
    return (
        <SimplifiedDiv style={styles.container}>

        </SimplifiedDiv>
    )
}

export default CategoryTab;