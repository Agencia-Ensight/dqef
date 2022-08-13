import { Wrapper } from "./styles";
import { Props } from "./typings";

function Button({ variant = "primary", children, ...props }: Props) {
  return (
    <Wrapper type="button" variant={variant} {...props}>
      {children}
    </Wrapper>
  );
}

export { Button };
