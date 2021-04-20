import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { useForm } from "react-hook-form";
import { loginRequest } from "../../http/requests";
import { toast } from "react-toastify";
import Logo from "../../components/Logo/Logo";
import { Button } from "../../components/Button/Button";
import {
  Form,
  FormGroup,
  FormInput,
  FormLabel,
  FormWrapper,
  InputError,
} from "../../components/Form/Form";
import { Div, Paragraph, Small } from "../../components/Grid/Grid";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { login } = useAuthContext();

  const loginHandler = async (e) => {
    const { email, password } = e;
    
    setLoading(true);
    try {
      const response = await loginRequest({ email, password });
      login(response.token);
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Div className="container-fluid">
      <Div className="row justify-content-center">
        <Div className="col-md-6 col-xl-4">
          <FormWrapper>
            <Form onSubmit={handleSubmit(loginHandler)}>
              <Div className="formHeader">
                <Paragraph className="formTitle">
                  <Logo /> Login
                </Paragraph>
              </Div>
              <FormGroup>
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
                <Button
                  placeholder={`Login`}
                  className="loginBtn"
                  loading={loading}
                />
              </FormGroup>
              <FormGroup>
                <Paragraph>
                  <Small>
                    In case you forgot your password{" "}
                    <NavLink to={`/forgot-password`}>Reset Here</NavLink>
                  </Small>
                </Paragraph>
                <Paragraph>
                  I don't have an account{" "}
                  <NavLink to={`/signup`}>Signup</NavLink>
                </Paragraph>
              </FormGroup>
            </Form>
          </FormWrapper>
        </Div>
      </Div>
    </Div>
  );
};

export default Login;
