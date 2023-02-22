import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import Text from "../../components/Text/Text";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { colors, fontSize } from "../../util/theme";


const SearchBar = () => (
    <TextField
        label="Search "
        InputProps={{
            type: 'search',
        }}
    />
)


const LinkBar = () => {
    return (
        <CustomDiv
            bgColor='white'
            display='flex'
            width='100%'
            height='auto'
            padding='0px 9.5%'
            border='0px'
        >
            <Grid container direction='row'>
                <Grid item md={6} lg={6}>
                    <CustomDiv display='flex'>
                        <Text margin='0 5px' fontSize={fontSize.smallPlus} color={colors.gray}>Home</Text>
                        <Text margin=' 0 5px' fontSize={fontSize.smallPlus} color={colors.gray}>Shop</Text>
                        <Text margin=' 0 5px' fontSize={fontSize.smallPlus} color={colors.gray}>Blog</Text>
                        <Text margin='0 5px' fontSize={fontSize.smallPlus} color={colors.gray}>O nama</Text>
                        <Text margin='0 5px' fontSize={fontSize.smallPlus} color={colors.gray}>Kontakt</Text>
                    </CustomDiv>
                </Grid>
                <Grid item md={6} lg={6}>
                    <CustomDiv
                        display='flex'
                        justifyContent='flex-end'
                        justifyItems='flex-end'
                    >
                        <SearchBar>
                        </SearchBar>
                    </CustomDiv>
                </Grid>
            </Grid>
        </CustomDiv>
    )
};



export default LinkBar;