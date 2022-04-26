import { useForm } from "react-hook-form";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dbdbdb;
  padding: 50px 20px 10px 20px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      all: unset;
      width: 100%;
      border: 1px solid #dbdbdb;
      padding: 5px;
      box-sizing: border-box;
      margin-bottom: 10px;
      &::placeholder {
        font-size: 14px;
      }
    }
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: salmon;
  color: white;
  font-weight: 700;
  box-sizing: border-box;
  margin-top: 30px;
  opacity: ${(props) => props.opacity};
`;

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

  console.log(isValid);

  return (
    <Wrap>
      <Container>
        <Title>LOGIN</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
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

          <input
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

          <Button opacity={isValid ? "1" : "0.5"}>LOGIN</Button>
        </form>
      </Container>
    </Wrap>
  );
};
