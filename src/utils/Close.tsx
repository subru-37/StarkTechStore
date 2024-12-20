import React from 'react';
type Close = {
  color: string;
};
const Close = ({ color }: Close) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M23.6424 26L13.0084 15.356L2.37428 26L0 23.6272L10.6508 13L0 2.37275L2.37428 0L13.0084 10.644L23.6424 0.0167099L26 2.37275L15.3659 13L26 23.6272L23.6424 26Z"
        fill={color}
      />
    </svg>
  );
};

export default Close;
