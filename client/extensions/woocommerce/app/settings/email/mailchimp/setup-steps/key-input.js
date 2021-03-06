/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Internal dependencies
 */
import FormFieldset from 'components/forms/form-fieldset';
import FormLabel from 'components/forms/form-label';
import FormTextInput from 'components/forms/form-text-input';
import FormInputValidation from 'components/forms/form-input-validation';
import { localize } from 'i18n-calypso';

const KeyInputStep = localize( ( { translate, onChange, apiKey, isKeyCorrect } ) => (
	<FormFieldset className="setup-steps__mailchimp-key-input">
		<div className="setup-steps__mailchimp-api-intro-notice">
			{ translate( 'Now that you\'re signed in to MailChimp, you need an API key to start the connection process' ) }
		</div>
		<div className="setup-steps__mailchimp-api-directions" >
			<span>{ translate( 'To find your Mailchimp API key ' ) }</span>
			<span className="setup-steps__mailchimp-api-directions-bold">
				{ translate( 'click your profile picture, select \'Account\', and go to Extras > API keys.' ) }
			</span>
			<div>{ translate( 'From there, grab an existing key or generate a new one for your store.' ) } </div>
		</div>
		<FormLabel required={ ! isKeyCorrect }>
			{ translate( 'Mailchimp API Key:' ) }
		</FormLabel>
		<FormTextInput
			name={ 'api_key' }
			isError={ ! isKeyCorrect }
			placeholder={ 'Enter your MailChimp API key' }
			onChange={ onChange }
			value={ apiKey }
		/>
		{ ! isKeyCorrect && <FormInputValidation isError text="Key appears to be invalid" /> }
	</FormFieldset>
) );

KeyInputStep.propTypes = {
	apiKey: PropTypes.string,
	isKeyCorrect: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
};

export default KeyInputStep;
