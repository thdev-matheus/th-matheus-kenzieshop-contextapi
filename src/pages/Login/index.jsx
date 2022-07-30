import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Content, AnimationContainer, Background, Container } from "./styles";

import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const registerFunction = (data) => {
    console.log(data);

    history.push("/dashboard");
  };

  if (authenticated) {
    return history.push("/dashboard");
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(registerFunction)}>
            <h1>Login</h1>

            <Input
              register={register}
              icon={FiMail}
              label="Email"
              placeholder="Seu email"
              name="email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              icon={FiLock}
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              name="password"
              error={errors.password?.message}
            />

            <Button type="submit">Enviar</Button>
            <p>
              Não tem conta? <Link to="/register">Faça seu cadastro</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}
