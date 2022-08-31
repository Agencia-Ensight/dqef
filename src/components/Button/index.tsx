import { Wrapper } from "./styles";
import { Props } from "./typings";

function Button({
  variant = "primary",
  children,
  loading = false,
  ...props
}: Props) {
  return (
    <Wrapper type="button" variant={variant} disabled={loading} {...props}>
      {loading ? "Carregando..." : children}
    </Wrapper>
  );
}

export { Button };
