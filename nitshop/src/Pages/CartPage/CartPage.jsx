import { Grid } from '@mui/material'
import React, {useContext} from 'react'
import { colors, fontSize, fontWeight } from '../../util/theme'
import Text from '../../components/Text/Text';

import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import { CartContext } from '../../context/CartContext';

const CartPage = () => {
    const styles = {
        div: {
            width: '100%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },
        grid: {
            width: '80%',
            height: 'auto',
            padding: '10px',
            color: colors.white,
            display: 'flex',
            justifyContent: 'center',
            background: colors.accentColor,
            margin: '20px',
        },
        gridWhite: {
            width: '80%',
            background: colors.white,
            padding: '5px',
        },
        textStyle: {
            color: colors.black,
        },
        buttonStyle: {
            background: colors.gray,
            border: 0,
            padding: '10px',
            color: colors.white,
            fontWeight: fontWeight.bold,
            cursor: 'pointer',
            margin : '0px 10px',
            width : '30px',
            height : '35px',
        
        },
        inputStyle: {
            width: '23px',
            padding: '7px',
        },
    };

   /*  const [items, setItems] = useState([
    { id: 1, name: "Item 1", price: 59, quantity: 1, img: one },
    { id: 2, name: "Item 2", price: 59, quantity: 1, img: two },
    { id: 3, name: "Item 3", price: 59, quantity: 1, img: three },
  ]); */



const { items, setItems } = useContext(CartContext);

  const handleIncrement = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const handleRemove = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <SimplifiedDiv style={styles.div}>
      <Grid container direction='row' style={styles.grid}>
        <Grid item lg={6}>
          Item
        </Grid>
        <Grid item lg={2}>
          Price
        </Grid>
        <Grid item lg={2}>
          Quantity
        </Grid>
        <Grid item lg={2}>
          Total
        </Grid>
      </Grid>
      {items?.map((item) => (
        <Grid key={item.id} container direction='row' style={styles.gridWhite}>
          <Grid item lg={2}>
            <img src={item.image} alt={item.name} style={{ width: "80px" }} />
          </Grid>
          <Grid item lg={4}>
            <Text style={styles.textStyle}>
              ColorBlock Scuba <br />
              <span
                style={{
                  fontSize: fontSize.optimal,
                }}
              >
                Web ID: 1089772
              </span>
            </Text>
          </Grid>
          <Grid item lg={2}>
            <Text style={styles.textStyle}>{item.price + "$"}</Text>
          </Grid>
          <Grid item lg={2}>
            <button
              style={styles.buttonStyle}
              onClick={() => handleDecrement(item.id)}
            >
              -
            </button>
            <input
              type='number'
              value={item.qty}
              style={styles.inputStyle}
              onChange={() => {}}
            />
            <button
              style={styles.buttonStyle}
              onClick={() => handleIncrement(item.id)}
            >
              +
            </button>
          </Grid>
          <Grid item lg={2}>
            <Text style={styles.textStyle}>
              {(item.price * item.qty).toFixed(2) + "$"}
              <button
                style={styles.buttonStyle}
                onClick={() => handleRemove(item.id)}
              >
                X
              </button>
            </Text>
          </Grid>
        </Grid>
      ))}
    </SimplifiedDiv>
  );
};

export default CartPage;