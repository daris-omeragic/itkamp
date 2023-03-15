import React from 'react';
import Text from '../../components/Text/Text';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import { Card } from '@mui/material';
import { fontSize, colors, fontWeight } from '../../util/theme';
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";



const ArticleCard = ({ title, description, image, price, onShowMore }) => {
    const styles = {
        imageContainer: {
            width: "100%",
            height: "200px",
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: 'contain',
        },
        descriptionContainer: {
            display: 'grid',
            placeItems: 'center',
            gap: 8,
            margin: "10px 15px",
        },
        buttonHolder: {
            display: 'flex',
            justifyContent: 'center',
            padding: '10px',

        },
        shhopingCartIcon: {
            fontSize: fontSize.normal,
            margin : '0px 3px',
        },
    }
    const altTag = title !== '' ? title : 'Article image';
    return (
        <Card>
            <SimplifiedDiv style={styles.imageContainer}>
                <img src={image} style={styles.image} alt={altTag} />
            </SimplifiedDiv>
            <SimplifiedDiv style={styles.descriptionContainer}>
                <Text color={colors.accentColor} fontSize={fontSize.large} fontWeight = {fontWeight.mediumBold}>{price}</Text>
                <Text fontSize={fontSize.medium}>{title}</Text>
                <Text fontSize={fontSize.optimal} color={colors.lightBlack}>{description.length > 70 ? description.slice(0, 70) + "..." : description}</Text>
            </SimplifiedDiv>
            <SimplifiedDiv style={styles.buttonHolder}>
                <PrimaryButton
                    primary
                    borderRadius='3px'
                    padding='10px'
                    onClick={onShowMore}
                >
                    <ShoppingCartOutlined style={styles.shhopingCartIcon} />
                    Add to cart
                </PrimaryButton>
            </SimplifiedDiv>
        </Card>

    );
}

export default ArticleCard;