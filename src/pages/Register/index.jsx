import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Content, AnimationContainer, Background, Container } from "./styles";

import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Register(/* { authenticated } */) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "deve conter ao menos 1 número")
      .matches(/(\W)/, "deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes"),
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

  const registerFunction = ({ name, email, password }) => {
    const newUser = { name, email, password };

    console.log(newUser);
    history.push("/login");
  };

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(registerFunction)}>
            <h1>Cadastro</h1>
            <Input
              register={register}
              icon={FiUser}
              label="Nome"
              placeholder="Seu nome"
              name="name"
              error={errors.name?.message}
            />
            <Input
              register={register}
              icon={FiMail}
              label="Email"
              placeholder="Digite um e-mail válido"
              name="email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              icon={FiLock}
              label="Senha"
              placeholder="Digite uma senha"
              type="password"
              name="password"
              error={errors.password?.message}
            />
            <Input
              register={register}
              icon={FiLock}
              label="Confirme sua senha"
              placeholder="Confirmação da Senha"
              type="password"
              name="passwordConfirm"
              error={errors.passwordConfirm?.message}
            />
            <Button type="submit">Enviar</Button>
            <p>
              Já tem uma conta? Faça seu <Link to="/login">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
