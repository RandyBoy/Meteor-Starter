
import { Meteor } from 'meteor/meteor';
//import { HTTP } from 'meteor/http';
import {Parties} from '../collections/parties';
import {loadParties} from './load-parties';

Meteor.startup(loadParties);

