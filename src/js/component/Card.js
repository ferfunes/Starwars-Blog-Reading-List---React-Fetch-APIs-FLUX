import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card-characters card col-lg-6 col-md-6  ">
			<div className="card-body">
				<img src={props.imgUrl} className="card-img-top" alt="..." />
				<h5 className="title card-title" />
				<h6 className="card-subtitle mb-2 text-muted">
					{props.prop1Title}
					{props.prop1}
				</h6>
				<h6 className="card-subtitle mb-2 text-muted">
					{props.prop2Title}
					{props.prop2}
				</h6>
				<h6 className="card-subtitle mb-2 text-muted">
					{props.prop3Title}
					{props.prop3}
				</h6>
				<h6 className="card-subtitle mb-2 text-muted">
					{props.prop4Title}
					{props.prop4}
				</h6>
			</div>
		</div>
	);
};

Card.propTypes = {
	prop1: PropTypes.string,
	prop2: PropTypes.string,
	prop3: PropTypes.string,
	prop4: PropTypes.string,
	prop1Title: PropTypes.string,
	prop2Title: PropTypes.string,
	prop3Title: PropTypes.string,
	prop4Title: PropTypes.string,
	imgUrl: PropTypes.string
};
