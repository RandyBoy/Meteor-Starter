import 'reflect-metadata';
import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Parties} from '../../collections/parties';
import {MeteorComponent} from 'angular2-meteor';
import {RouterLink, Router} from 'angular2/router';

@Component({
    selector: 'party-details',
    templateUrl: 'client/party-details/party-details.html',
    directives: [RouterLink]
})
export class PartyDetails extends MeteorComponent {
    partyId: any;
    party: Party;
    constructor(params: RouteParams, private router: Router) {
        super();
        this.partyId = params.get('partyId');
        this.subscribe('party', this.partyId, () => {
            this.party = Parties.findOne(this.partyId);
        }, true);
    }
    saveParty(party) {
        Parties.update(party._id, {
            $set: {
                name: party.name,
                description: party.description,
                location: party.location
            }
        });
        this.router.navigate(["/PartiesList"]);
    }
}