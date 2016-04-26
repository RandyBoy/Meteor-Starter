import {loadParties} from './load-parties';
import './parties.ts';

Meteor.startup(loadParties);


