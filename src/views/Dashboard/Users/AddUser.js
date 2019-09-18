import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from '@jbk/react-form';
import { Input } from 'src/common';

const AddUser = ({ addUserAsync }) => (
	<Form
		onSubmit={({ formValid, values: user }) => {
			if (formValid) {
				addUserAsync(user);
			}
		}}
	>
		<Input
			name="firstName"
			regex="^(?!\s*$).+"
			defaultErrorMessage="First name required"
		/>
		<Input
			name="lastName"
			regex="^(?!\s*$).+"
			defaultErrorMessage="Last name required"
		/>
		<button type="submit">Submit</button>
	</Form>
);

const mapDispatch = ({ users: { addUserAsync }}) => ({ addUserAsync });

AddUser.propTypes = { addUserAsync: PropTypes.func };

export default connect(
	null,
	mapDispatch
)(AddUser);
