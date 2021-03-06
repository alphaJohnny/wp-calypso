/**
 * Internal dependencies
 *
 * @format
 */

import { GRAVATAR_RECEIVE_IMAGE_FAILURE, GRAVATAR_UPLOAD_REQUEST } from 'state/action-types';
import {
	bumpStat,
	composeAnalytics,
	recordTracksEvent,
	withAnalytics,
} from 'state/analytics/actions';

export function uploadGravatar( file, email ) {
	return withAnalytics( recordTracksEvent( 'calypso_edit_gravatar_upload_start' ), {
		type: GRAVATAR_UPLOAD_REQUEST,
		file,
		email,
	} );
}

export const receiveGravatarImageFailed = ( { errorMessage, statName } ) =>
	withAnalytics(
		composeAnalytics(
			recordTracksEvent( 'calypso_edit_gravatar_file_receive_failure' ),
			bumpStat( 'calypso_gravatar_update_error', statName )
		),
		{
			type: GRAVATAR_RECEIVE_IMAGE_FAILURE,
			errorMessage,
		}
	);
