import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 
    | 'PRIMARY' 
    | 'SECONDARY' 
    | 'TERITIARY';

type ButtonSize = 'lg' | 'md' | 'sm' ;

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    size: ButtonSize;
    variant: ButtonVariant;
}