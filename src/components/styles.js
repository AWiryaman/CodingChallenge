import styled, { css } from "styled-components";
import { Field, Form } from "formik";
import RadioButton from './RadioButton';

export const StyledForm = styled(Form)`
  font-family: 'PT Serif';
`;

export const StyledInlineErrorMessage = styled.div`
  color: #b41a1a;
  display: block;
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

export const StyledH1 = styled.h1`
  font-size: 38px;
`

export const StyledLabel = styled.label`
  margin-right: 1rem;
`

export const StyledButton = styled.button`
  font-size: 18px;
  padding: 0.83rem 4rem 0.83rem 4rem;
  border-radius: 5px;
  color: #fbfbfa;
  border-style: none;
  font-family: "PT Serif";

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: #d8d8d8;
        `
      : css`
          background-color: #366ced;
        `}
  )
`;

export const StyledDiv = styled.div`
  margin-top: 1rem;
  margin-left 1rem;
`

export const StyledField = styled(Field)`
  display: block;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-family: "PT Serif";
  font-size: 1rem;
  line-height: 1rem;
  width: 25%;
  margin-top: 0.5rem;
  padding: 0.5rem 0.5rem;

  &:focus,
  &:active {
    border: 1px solid #366ced;
    outline: none;
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid #b41a1a;
      outline: none;

      &:focus,
      &:active {
        border: 1px solid #b41a1a;
        outline: none;
      }
    `}
`;

export const RadioCheckbox = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid #366ced;
  width: 1rem;
  height: 1rem;
  left: 0;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
  }
`;

export const StyledRadioInput = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${RadioCheckbox} {
    &::after {
      border: 6px solid #366ced;
      width: 7px;
      height: 7px;
      opacity: 1;
      left: -5%;
      top: -6%;
      background-color: white;
    }
  }
`;

export const StyledRadio = styled(RadioButton)`
  font-family: "PT Serif";
`;
