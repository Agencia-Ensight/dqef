type ProposalJobProps = {
  id: string;
};

type ProposalUserProps = {
  id: string;
  avatar: string;
  name: string;
};

type ProposalStatus = {
  id: string;
  name: string;
};

export type ProposalProps = {
  id: string;
  job: ProposalJobProps;
  user: ProposalUserProps;
  status: ProposalStatus;
};
