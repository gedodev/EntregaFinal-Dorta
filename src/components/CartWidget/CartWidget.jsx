import React, { useEffect } from "react";
import {Badge} from "@nextui-org/react";
import {CartIcon} from "./CartIcon";
import { CartContext } from '../../context/CartContext/CartContext'
import { useContext } from 'react'
import { NavLink, useLocation } from "react-router-dom";

export default function CartWidget() {
  const [isInvisible, setIsInvisible] = React.useState(false);
  const {cartItems, setCartItems} = useContext(CartContext)
  useEffect(()=>{
    cartItems == [] ? setIsInvisible(true) : setIsInvisible(false)
  },[cartItems])

  return (
    <NavLink to="/cart" className={`flex items-center gap-3`}>
      <Badge color="danger" content={cartItems.length} isInvisible={isInvisible} shape="circle">
        <CartIcon className={useLocation().pathname == '/cart' ? 'text-sky-400/100' : ""} size={30} />
      </Badge>
    </NavLink>
  );
}