import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "../../components/Logo/Logo";
import { Div, Paragraph } from "../../components/Grid/Grid";
import {
  Form,
  FormGroup,
  FormInput,
  FormLabel,
  FormWrapper,
  InputError,
} from "../../components/Form/Form";
import { Button } from "../../components/Button/Button";

const ResetPassword = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const resetPasswordHandler = async (e) => {
    console.log(e);
  };

  return (
    <Div className="container-fluid">
      <Div className="row justify-content-center">
        <Div className="col-md-6 col-xl-4">
          <FormWrapper>
            <Form onSubmit={handleSubmit(resetPasswordHandler)}>
              <Div className="formHeader">
                <Paragraph className="formTitle">
                  <Logo /> Reset Password
                </Paragraph>
              </Div>
              <FormGroup>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                  type="password"
                  placeholder="Password"
                  className="formControl"
                  id="password"
                  name="password"
                  register={register("password", {
                    required: true,
                  })}
                />
                <InputError
                  show={errors?.password?.type === "required"}
                  errorText={`Password is required`}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="repeat_password">Repeat Password</FormLabel>
                <FormInput
                  type="password"
                  placeholder="Repeat Password"
                  className="formControl"
                  id="repeat_password"
                  name="repeat_password"
                  register={register("repeat_password", {
                    required: true,
                    validate: (value) => value === password.current,
                  })}
                />
                <InputError
                  show={errors?.repeat_password?.type === "required"}
                  errorText={`Repeat password is required`}
                />
                <InputError
                  show={errors?.repeat_password?.type === "validate"}
                  errorText={`Passwords don't match`}
                />
              </FormGroup>
              <FormGroup>
                <Button
                  className="loginBtn"
                  placeholder="Reset"
                  type="submit"
                />
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

export default ResetPassword;
