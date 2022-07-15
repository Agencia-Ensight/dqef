export type IMenu = 'STUDENT' | 'EMPLOYEE';

export type Props = ISelected & {
    type: IMenu;
}

export type ISelected = {
    selected: boolean;
}