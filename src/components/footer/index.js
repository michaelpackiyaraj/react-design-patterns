import React from "react";
export function Footer(props) {
	return (
		<div className="footer">
			<hr />
			<span>Copyrights</span>
			<p>@{props.year}, {props.company}, {props.trainer}</p>
		</div>
	)
}
