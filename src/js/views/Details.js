import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Details extends React.Component {
	constructor() {
		super();
		this.state = {
			item: {}
		};
	}
	componentDidMount() {
		fetch(`https://swapi.co/api/${this.props.match.params.type}/${this.props.match.params.id}`)
			.then(result => result.json())
			.then(data => this.setState({ item: data }));
	}

	dynamType(type) {
		if (type === "planets") {
			return `Terrain: ${this.state.item.terrain}\n Population: ${this.state.item.population} \nClimate: ${
				this.state.item.climate
			} \n Diameter:${this.state.item.diameter}`;
		} else if (type === "people") {
			return `Height: ${this.state.item.height} \n Birth Year: ${this.state.item.birth_year} \n Gender: ${
				this.state.item.gender
			} \n Eye Color: ${this.state.item.eye_color}`;
		}
	}

	dynamImg(type) {
		if (type === "planets") {
			return "https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=768";
		} else if (type === "people") {
			return "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=768";
		}
	}
	render() {
		console.log(this.props);
		console.log(this.state);
		console.log(this.dynamType(this.props.match.params.type));
		return (
			<React.Fragment>
				<div className="wrapper container">
					<div className="row cont1 ">
						<img className="img1 col" src={this.dynamImg(this.props.match.params.type)} />

						<div className=" description-holder col ">
							<p className="name">{this.state.item.name}</p>
							<p className="description">{this.dynamType(this.props.match.params.type)}</p>
						</div>
					</div>
					<div className="cont2 row d-flex text-center">
						<div className="txt1 col-lg-3">
							<div className="vr-line">
								<p className="title-attribute">
									{this.state.item.terrain}
									{this.state.item.height}
								</p>
							</div>
						</div>
						<div className="txt2 col-lg-3">
							<div className="vr-line">
								<p className="title-attribute">
									{this.state.item.population}
									{this.state.item.birth_year}
								</p>
							</div>
						</div>

						<div className="txt3 col-lg-3">
							<div className="vr-line">
								<p className="title-attribute">
									{this.state.item.climate}
									{this.state.item.gender}
								</p>
							</div>
						</div>
						<div className="txt4 col-lg-3">
							<div className="vr-line">
								<p className="title-attribute">
									{this.state.item.diameter}
									{this.state.item.eye_color}
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Details.propTypes = {
	match: PropTypes.object
};
