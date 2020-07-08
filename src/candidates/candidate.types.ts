export type Candidate = {
    avatar: string,
    email: string,
    first_name: string,
    gender: string,
    id: number,
    job_description: string,
    job_title: string,
    last_name: string
};

export interface CandidateView extends Candidate {
    fullName: string
};

export type CandidateListProps = {
    candidates: CandidateView[]
};

export type CandidateDetailsProps = {
    fetchById: (id: string) => CandidateView | undefined
};