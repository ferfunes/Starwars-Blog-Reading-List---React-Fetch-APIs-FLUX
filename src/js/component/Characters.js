import React from "react";
import PropTypes from "prop-types";

export class Characters extends React.Component {
	render(props) {
		return (
			<div className="card-characters card col-lg-6 col-md-6  ">
				<div className="card-body">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=768"
						className="card-img-top"
						alt="..."
					/>
					<h5 className="title card-title" />
					<h6 className="card-subtitle mb-2 text-muted">Name: {this.props.name}</h6>
					<h6 className="card-subtitle mb-2 text-muted">Height: {this.props.height}</h6>
					<h6 className="card-subtitle mb-2 text-muted">Birth-Year: {this.props.birth_year}</h6>
					<h6 className="card-subtitle mb-2 text-muted">Gender: {this.props.gender}</h6>
				</div>
			</div>
		);
	}
}

Characters.propTypes = {
	name: PropTypes.string,
	height: PropTypes.string,
	birth_year: PropTypes.string,
	gender: PropTypes.string
};
