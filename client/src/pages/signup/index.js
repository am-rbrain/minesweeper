import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signupRequest } from "../../http/requests";
import { useAuthContext } from "../../context/auth-context";
import { toast } from "react-toastify";
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

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuthContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const signupHandler = async (e) => {
    const { fullname, email, password } = e;

    setLoading(true);
    try {
      const response = await signupRequest({
        fullname,
        email,
        password,
      });
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
            <Form onSubmit={handleSubmit(signupHandler)}>
              <Div className="formHeader">
                <Paragraph className="formTitle">
                  {" "}
                  <Logo /> Signup
                </Paragraph>
              </Div>
              <FormGroup>
                <FormLabel htmlFor="fullname">Fullname</FormLabel>
                <FormInput
                  type="text"
                  placeholder="Fullname"
                  className="formControl"
                  id="fullname"
                  name="fullname"
                  register={register("fullname", {
                    required: true,
                  })}
                />
                <InputError
                  show={errors?.fullname?.type === "required"}
                  errorText={`Fullname is required`}
                />
              </FormGroup>
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
                  placeholder={`Signup`}
                  className="signupBtn"
                  loading={loading}
                />
              </FormGroup>
              <FormGroup>
                <Paragraph>
                  I already have an account.{" "}
                  <NavLink to={`/login`}>Login</NavLink>
                </Paragraph>
              </FormGroup>
            </Form>
          </FormWrapper>
        </Div>
      </Div>
    </Div>
  );
};

export default Signup;
