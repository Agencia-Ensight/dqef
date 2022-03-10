import { ButtonHTMLAttributes } from 'react'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'quinternary'
  | 'text';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xxl';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * @default primary
     */
    variant?: ButtonVariant;
    /**
     * Defines the button Size
     *
     * @default md
     */
    size?: ButtonSize;
  };
  

