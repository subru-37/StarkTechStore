import React from 'react';
type Cartprops = {
  size: string;
  color: string;
};
const Cart = ({ size, color }: Cartprops) => {
  // //console.log(color)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="22"
      viewBox="0 0 26 22"
      fill="none"
      style={{
        height: size,
        width: size,
      }}
    >
      <path
        d="M9.95117 21C10.5035 21 10.9512 20.5523 10.9512 20C10.9512 19.4477 10.5035 19 9.95117 19C9.39889 19 8.95117 19.4477 8.95117 20C8.95117 20.5523 9.39889 21 9.95117 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9512 21C22.5035 21 22.9512 20.5523 22.9512 20C22.9512 19.4477 22.5035 19 21.9512 19C21.3989 19 20.9512 19.4477 20.9512 20C20.9512 20.5523 21.3989 21 21.9512 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.95117 1H5.60335L8.34248 16H22.9512"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.76109 13H22.8694C22.9741 13.0001 23.0755 12.9641 23.1565 12.8981C23.2374 12.8322 23.2929 12.7404 23.3134 12.6383L24.9424 4.53831C24.9555 4.473 24.9539 4.4056 24.9377 4.34097C24.9215 4.27634 24.891 4.21611 24.8485 4.16461C24.8061 4.11311 24.7526 4.07163 24.6921 4.04316C24.6315 4.0147 24.5654 3.99995 24.4984 4H6.95117"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cart;
