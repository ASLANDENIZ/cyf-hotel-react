import React from "react";

const Footer = () => {
  const arr = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <ul>
      {arr.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
};

export default Footer;