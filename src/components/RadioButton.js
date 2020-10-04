import React from "react";
import { StyledRadioInput, RadioCheckbox } from "./styles";

const RadioButton = (props) => (
  <>
    <StyledRadioInput type="text" {...props} />
    <RadioCheckbox></RadioCheckbox>
  </>
);

export default RadioButton;
