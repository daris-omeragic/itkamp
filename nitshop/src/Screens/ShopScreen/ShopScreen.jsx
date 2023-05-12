import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";



const ShopScreen = () => {
  
  const { items } = useContext(CartContext);
  const { userDetails } = useContext(UserContext);

  return (
    <>
     <div>{JSON.stringify(userDetails)}</div>
     <div>{userDetails.name}</div>
    <div>{userDetails.lastName}</div>
    </>
  );
};

export default ShopScreen;