import React from 'react';
type props = {
  color: string;
}
const Plus = ({color}: props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M0.636719 8.58268V7.41602H7.63672V0.416016H8.80339V7.41602H15.8034V8.58268H8.80339V15.5827H7.63672V8.58268H0.636719Z"
        fill={color}
      />
    </svg>
  );
};

export default Plus;
