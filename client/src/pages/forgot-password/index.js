import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Div, Paragraph } from "../../components/Grid/Grid";
import {
  Form,
  FormGroup,
  FormInput,
  FormLabel,
  FormWrapper,
  InputError,
} from "../../components/Form/Form";
import Logo from "../../components/Logo/Logo";
import { Button } from "../../components/Button/Button";

const ForgotPassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const forgotPasswordHandler = (e) => {};

  return (
    <Div className="container-fluid">
      <Div className="row justify-content-center">
        <Div className="col-md-6 col-xl-4">
          <FormWrapper>
            <Form onSubmit={handleSubmit(forgotPasswordHandler)}>
              <Div className="formHeader">
                <Paragraph className="formTitle">
                  <Logo /> Forgot Password
                </Paragraph>
              </Div>
              <FormGroup className="formGroup">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="text"
                  placeholder="Email"
                  className="formControl"
                  id="email"
                  name="email"
                  register={register("email", {
                    required: true,
                    pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                  })}
                />
                <InputError
                  show={errors?.email?.type === "required"}
                  errorText={`Email is required`}
                />
                <InputError
                  show={errors?.email?.type === "pattern"}
                  errorText={`Field must be an email`}
                />
              </FormGroup>
              <FormGroup>
                <Button className="loginBtn" placeholder="Send" />
              </FormGroup>
              <FormGroup>
                <Paragraph>
                  Back to <NavLink to={`/login`}>Login</NavLink>
                </Paragraph>
              </FormGroup>
            </Form>
          </FormWrapper>
        </Div>
      </Div>
    </Div>
  );
};

export default ForgotPassword;
