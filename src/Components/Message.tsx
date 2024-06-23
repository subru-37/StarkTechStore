import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormData } from '../Pages/Checkout';

const Message = (
  value: string | null,
  formData: FormData,
  grandtotal: number
) => {
  const products = useSelector((state: any) => state.cart);

  const items = products.cart.map((value: any) => {
    const keys = Object.keys(value);
    const values = Object.values(value);
    return {
      [keys[1]]: values[1],
      [keys[2]]: values[2],
      [keys[3]]: values[3],
      [keys[4]]: values[4],
      [keys[7]]: values[7],
    };
  });
  const itemMessage = items.length !==0 && items
  .map(
    (value: any) =>
    // Discounted Price: ${value.discprice}\n
      `   Product id: ${value.id}\n   Product Price: ${value.price}\n   Product Name: ${value.name}\n   Quantity of Product: ${value.quantity}\n\n`
  )
  .reduce((total: any, initial: any) => total + '' + initial);

  const data = `\n${value}\n\nShipping Address:  ${formData.address}\nLandmark:  ${formData.landmark}\n\nTotal Amount: ${grandtotal}\n\nEmail: ${formData.email}\nPhone Number: ${formData.phoneNumber}`;
  const message =
    `Customer: ${formData.firstName} ${formData.lastName}, \n\nI would like to order: \n\nItems in Cart:\n\n` +
    itemMessage +
    data;
  const whatsappUrl = `https://wa.me/917356029354?text=${encodeURIComponent(
    message
  )}`;
  return whatsappUrl;
};

export default Message;
