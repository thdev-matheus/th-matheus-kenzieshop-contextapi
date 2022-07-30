import { Container, InputContainer } from "./styles";

export default function Input({
  label,
  icon: Icon,
  register,
  name,
  error = "",
  ...rest
}) {
  return (
    <Container>
      <div className="inputLabel">
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}
