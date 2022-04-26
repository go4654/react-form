import { useForm } from "react-hook-form";
import styled from "styled-components";
import { AuthLayout } from "../components/auth/AuthLayout";
import { Bottom } from "../components/auth/Bottom";
import { Button } from "../components/auth/Button";
import { Form } from "../components/auth/Form";
import { Input } from "../components/auth/Input";
import { Title } from "../components/auth/Title";
import { routes } from "../routes";

export const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    // console.log(getValues());
    const { username, password } = getValues();
  };

  return (
    <AuthLayout>
      <Title>LOGIN</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다",
            minLength: {
              value: 3,
              message: "아이디는 3자리 이상 작성 해 주세요",
            },
          })}
          type="text"
          placeholder="ID"
        />
        {/* {errors && errors.username.message} */}
        {errors?.username?.message}

        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성 해 주세요",
            },
          })}
          type="password"
          placeholder="password"
        />
        {errors?.password?.message}

        <Button opacity={isValid ? "1" : "0.5"} text="로그인" />

        <Bottom
          text="아이디가 없나요?"
          link={routes.signup}
          linkText="회원가입"
        />
      </Form>
    </AuthLayout>
  );
};
