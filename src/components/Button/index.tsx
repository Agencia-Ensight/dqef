import { Wrapper } from "./styles";
import { Props } from "./typings";

export function Button({ variant, children, ...props }: Props) {
  return (
    <Wrapper type="button" variant={variant} {...props}>
      {children}
    </Wrapper>
  );
}
