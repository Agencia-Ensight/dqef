import { ButtonHTMLAttributes } from 'react';


export type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: 'SUCCESS' | 'WARNING' | 'ERROR';
}