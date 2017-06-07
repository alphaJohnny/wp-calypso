/**
 * Internal dependencies
 */
import {
	HELP_SELECTED_SITE,
} from 'state/action-types';
import courses from './courses/reducer';
import { combineReducers } from 'state/utils';
import directly from './directly/reducer';
import ticket from './ticket/reducer';
import { createReducer } from 'state/utils';

/**
 * Tracks the site id for the selected site in the help/contact form
 *
 * @param  {Object} state  Current state
 * @param  {Object} action Action payload
 * @return {Object}        Updated state
 */
export const selectedSiteId = createReducer( null, {
	[ HELP_SELECTED_SITE ]: ( state, action ) => action.siteId,
} );

export default combineReducers( {
	courses,
	directly,
	ticket,
	selectedSiteId,
} );
