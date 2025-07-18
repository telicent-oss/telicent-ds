import { OntologyService } from '@telicent-oss/ontologyservice';

export declare const PreferredLabelCache: {
    init: (ontologyService: OntologyService) => Promise<void>;
    get: (val: string) => string;
};
