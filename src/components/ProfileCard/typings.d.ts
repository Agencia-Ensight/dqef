export type Props = { 
    img: string;
    profileName: string;
    course: CourseVariant;
}

type CourseVariant =   
| 'Direito'
| 'Eng-Civil'
| 'Pedagogia'
| 'Nutrição'
| 'Medicina'
| 'Arquitetura'
| 'Economia'
| 'ADM'
| 'Psicologia';
