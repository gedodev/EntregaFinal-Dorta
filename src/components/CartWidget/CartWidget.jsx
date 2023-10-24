import React from "react";
import {Badge} from "@nextui-org/react";
import {CartIcon} from "./CartIcon";

export default function CartWidget() {
  const [isInvisible, setIsInvisible] = React.useState(false);

  return (
    <div className="flex items-center gap-3">
      <Badge color="danger" content={1} isInvisible={isInvisible} shape="circle">
        <CartIcon size={30} />
      </Badge>
    </div>
  );
}