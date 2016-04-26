import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Parties} from '../../collections/parties.ts';
@Component({
    selector: 'party-details',
    templateUrl: 'client/party-details/party-details.html'
})
export class PartyDetails {
    partyId: any;
    party: Party;
    constructor(params: RouteParams) {
        this.partyId = params.get('partyId');
        this.party = Parties.findOne(this.partyId);
    }
}