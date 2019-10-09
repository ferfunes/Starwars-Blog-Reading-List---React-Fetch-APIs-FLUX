import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<div className="card-characters card col-lg-6 col-md-6  ">
			<Link to={`/details/${props.type}/${props.id}`}>
				<div className="card-body img-fluid ">
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
					<h6 className="card-subtitle mb-2 text-muted">
						{props.prop5Title}
						{props.prop5}
					</h6>
				</div>
			</Link>
		</div>
	);
};

Card.propTypes = {
	prop1: PropTypes.string,
	prop2: PropTypes.string,
	prop3: PropTypes.string,
	prop4: PropTypes.string,
	prop5: PropTypes.string,
	prop1Title: PropTypes.string,
	prop2Title: PropTypes.string,
	prop3Title: PropTypes.string,
	prop4Title: PropTypes.string,
	prop5Title: PropTypes.string,
	imgUrl: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.number
};
