export type CourseVariant =   
| 'DIREITO'
| 'ENG-CIVIL'
| 'PEDAGOGIA'
| 'NUTRICAO'
| 'MEDICINA'
| 'ARQUITETURA'
| 'ECONOMIA'
| 'ADM'
| 'PSICOLOGIA';

export type Props = CardProps & CourseContainerProps & {
    title: string;
    discipline: string;
    theme: string;
    typeOfWork: string;
    price: number;
    date: string;
} 

type CourseContainerProps = {
    course: CourseVariant;
}

export type CardProps = {
    /**
     * @default DIREITO
     */
    course?: CourseVariant;
    /**
     *
     * @default false
     */
    urgent?: boolean;
  };