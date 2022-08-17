type ProposalJobProps = {
  id: string;
};

type ProposalUserProps = {
  id: string;
  avatar: string;
  name: string;
  formation: string;
  higherCourse: string;
  avgRating: number;
};

type ProposalStatus = {
  id: string;
  name: string;
};

export type ProposalProps = {
  id: string;
  job: ProposalJobProps;
  user: ProposalUserProps;
  price: number;
  status: ProposalStatus;
};
