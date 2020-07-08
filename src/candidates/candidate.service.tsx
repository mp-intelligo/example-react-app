import { Candidate, CandidateView } from './candidate.types';
import { HttpApiService } from '../http/http.service';
import { HttpEndPoint } from '../http/http.config';

export const fetchCandidates = async () => {
}

export class CandidateService {

    static candidates: CandidateView[];

    static populateCandidates(candidates: Candidate[]) {

        this.candidates = candidates.map(({first_name, last_name, ...rest}) => ({
            first_name,
            last_name,
            fullName: `${first_name} ${last_name}`,
            ...rest
        }));
    }

    static async fetchCandidates() {

        if (this.candidates) {
            return;
        }

        return HttpApiService.get
            <any, { success: string, candidates: Candidate[] }>
            (HttpEndPoint.candidates)
            .then(({ candidates }) => candidates)
            .then(this.populateCandidates.bind(this));
    }
}