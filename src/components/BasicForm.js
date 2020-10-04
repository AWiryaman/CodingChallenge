import React, { useState } from "react";
import { Formik, ErrorMessage, Field } from "formik";
import {
  StyledForm,
  StyledLabel,
  StyledField,
  StyledButton,
  StyledDiv,
  StyledH1,
  StyledInlineErrorMessage,
  StyledRadio
} from "./styles";
import { core } from "smartystreets-javascript-sdk";
import Lookup from "smartystreets-javascript-sdk/src/us_street/Lookup";
import Results from "./Results"

let key = "31441044899987031";
const credentials = new core.SharedCredentials(key);
let client = core.buildClient.usStreet(credentials);

const validateEmail = (email) => {
  let error = "";
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    error = "Invalid email address";
  }
  return error;
};

const validatePhoneNumber = (phoneNumber) => {
  let error = "";
  if (
    !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(phoneNumber)
  ) {
    error = "Invalid phone number";
  }
  return error;
};

const validateAddress = async (address) => {
  let error = "";
  let lookup = new Lookup();
  lookup.StyledFieldId = "8675309";
  lookup.street = address;
  try {
    let response = await client.send(lookup);
    if (response.lookups[0].result.length === 0) {
      error = "Not a valid address";
    }
  } catch (err) {
    console.log(err);
    error = "Not a valid address";
  }
  return error;
};

const Basic = () => {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({});
  if (submitted) {
    return <Results values={data} />;
  } else {
    return (
      <div>
        <Formik
          initialValues={{
            name: "",
            address: "",
            phoneNumber: "",
            email: "",
            product: "",
          }}
          validateOnChange={false}
          validateOnBlur={false}
          validate={async (values) => {
            const errors = {};
            let emailError = validateEmail(values.email);
            if (emailError !== "") {
              errors.email = emailError;
            }
            let phoneNumberError = validatePhoneNumber(values.phoneNumber);
            if (phoneNumberError !== "") {
              errors.phoneNumber = phoneNumberError;
            }
            let addressError = await validateAddress(values.address);
            if (addressError !== "") {
              errors.address = addressError;
            }
            return errors;
          }}
          onSubmit={async (values) => {
            setData(values);
            setSubmitted(true);
          }}
        >
          {({ values, errors }) => (
            <>
              <StyledForm>
                <StyledDiv>
                  <StyledH1>Sign Up</StyledH1>
                </StyledDiv>

                <StyledDiv>
                  <StyledLabel htmlFor="name">Name</StyledLabel>
                  <StyledField id="name" name="name" placeholder="Full name" />
                </StyledDiv>

                <StyledDiv>
                  <StyledLabel htmlFor="address">Home Address</StyledLabel>
                  <StyledField
                    id="address"
                    name="address"
                    placeholder="Home Address"
                    error={errors.address}
                  />
                  <ErrorMessage name="address">
                    {(msg) => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>
                </StyledDiv>

                <StyledDiv>
                  <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
                  <StyledField
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    error={errors.phoneNumber}
                  />
                  <ErrorMessage name="phoneNumber">
                    {(msg) => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>
                </StyledDiv>

                <StyledDiv>
                  <StyledLabel htmlFor="email">Email</StyledLabel>
                  <StyledField
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    error={errors.email}
                  />
                  <ErrorMessage name="email">
                    {(msg) => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>
                </StyledDiv>

                <StyledDiv>
                  <StyledLabel id="product">Picked</StyledLabel>
                  <StyledDiv role="group" aria-labelledby="product">
                    <StyledLabel>
                      <Field
                        type="radio"
                        name="product"
                        value="Product A"
                        as={StyledRadio}
                      />
                      Product A
                    </StyledLabel>
                    <StyledLabel>
                      <Field
                        type="radio"
                        name="product"
                        value="Product B"
                        as={StyledRadio}
                      />
                      Product B
                    </StyledLabel>
                    <StyledLabel>
                      <Field
                        type="radio"
                        name="product"
                        value="Product C"
                        as={StyledRadio}
                      />
                      Product C
                    </StyledLabel>
                  </StyledDiv>
                </StyledDiv>
                <StyledDiv>
                  <StyledButton
                    type="submit"
                    disabled={
                      !(
                        values.name &&
                        values.address &&
                        values.phoneNumber &&
                        values.email &&
                        values.product
                      )
                    }
                  >
                    Submit
                  </StyledButton>
                </StyledDiv>
              </StyledForm>
            </>
          )}
        </Formik>
      </div>
    );
  }
};

export default Basic;
