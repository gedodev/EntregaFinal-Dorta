import React, { useEffect } from "react";
import {Badge} from "@nextui-org/react";
import {CartIcon} from "./CartIcon";
import { CartContext } from '../../context/CartContext/CartContext'
import { useContext } from 'react'

export default function CartWidget() {
  const [isInvisible, setIsInvisible] = React.useState(false);
  const {cartQ, setCartQ} = useContext(CartContext)
  useEffect(()=>{
    cartQ == 0 ? setIsInvisible(true) : setIsInvisible(false)
  },[cartQ])

  return (
    <div className="flex items-center gap-3">
      <Badge color="danger" content={cartQ} isInvisible={isInvisible} shape="circle">
        <CartIcon size={30} />
      </Badge>
    </div>
  );
}