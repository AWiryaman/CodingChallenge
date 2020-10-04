import React from "react";
import { StyledDiv } from "./styles";

const Results = (values) => {
  return (
    <>
      <StyledDiv>Name: {values.values.name}</StyledDiv>
      <StyledDiv>Address: {values.values.address}</StyledDiv>
      <StyledDiv>Phone Number: {values.values.phoneNumber}</StyledDiv>
      <StyledDiv>Email: {values.values.email}</StyledDiv>
      <StyledDiv>Product: {values.values.product}</StyledDiv>
    </>
  );
};

export default Results;
