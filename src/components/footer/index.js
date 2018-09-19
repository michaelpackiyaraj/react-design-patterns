import React from "react";
import PropTypes from 'prop-types';
export function Footer(props) {
	return (
		<div className="footer">
			<hr />
			<span>Copyrights</span>
			<p>@{props.year}, {props.company}, {props.trainer}</p>
		</div>
	)
}
Footer.defaultProps = {
	year: 2018,
	company: 'Sapient',
	trainer: 'Michael'
}
Footer.propTypes = {
	year: PropTypes.number.isRequired,
	company: PropTypes.string.isRequired,
	trainer: PropTypes.string.isRequired
  };
