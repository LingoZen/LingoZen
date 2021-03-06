import {Component} from "@angular/core";

import {SearchQuery} from "../../interfaces/search-query.interface";
import {SourceSentence} from "../../models/source-sentence.models";
import {SourceSentenceService} from "../../services/source-sentence.service";
import {List} from "immutable";

@Component({
    selector: 'app-search-sentences',
    templateUrl: './search-sentences.component.html',
    styleUrls: ['./search-sentences.component.scss']
})
export class SearchSentencesComponent {
    searchResults: List<SourceSentence>;

    constructor(private sourceSentenceService: SourceSentenceService) {
    }

    async changeSearchQuery(newSearchQuery: SearchQuery): Promise<void> {
        this.searchResults = await this.search(newSearchQuery);
    }

    private async search(searchQuery: SearchQuery): Promise<List<SourceSentence>> {
        console.log('searching');
        return this.sourceSentenceService.search(searchQuery);
    }
}
