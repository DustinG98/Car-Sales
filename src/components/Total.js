import React, { useEffect, useState } from 'react';

const Total = props => {
  const [totalPrice, setTotalPrice] = useState(props.car.price)
  useEffect(() => {
    setTotalPrice(props.car.price + props.additionalPrice)
  }, [props.car.price, props.additionalPrice])
  return (
    <div className="content">
      <h4>Total Amount: ${totalPrice}</h4>
    </div>
  );
};

export default Total;
