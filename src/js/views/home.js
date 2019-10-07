import React from "react";
import "../../styles/home.scss";
import { Card } from "../component/Card.js";
import { render } from "react-dom";

export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			character: [],
			planet: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/people/")
			.then(response => response.json())
			.then(data => {
				let character = this.state;

				this.setState({ character: data.results });
				console.log(data.results);
			});

		fetch("https://swapi.co/api/planets/")
			.then(response => response.json())
			.then(data => {
				let planet = this.state;

				this.setState({ planet: data.results });
				console.log(data.results);
			});
	}

	parserFunction(url) {
		let temp = "";
		for (var i = url.length - 2; i >= 0; i--) {
			if (url[i] !== "/") temp = url[i] + temp;
			else return parseInt(temp);
		}
	}

	render() {
		let peopleCard = this.state.character.map((item, index) => {
			return (
				<Card
					key={index}
					imgUrl="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=768"
					prop1={item.name}
					prop1Title="Name : "
					prop2={item.height}
					prop2Title="Height : "
					prop3={item.birth_year}
					prop3Title="Birth Year : "
					prop4={item.gender}
					prop4Title="Gender : "
					prop5={item.eye_color}
					prop5Title="Eye Color : "
					type="people"
					id={this.parserFunction(item.url)}
				/>
			);
		});

		let planetCard = this.state.planet.map((item, index) => {
			return (
				<Card
					key={index}
					imgUrl="https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=768"
					prop1={item.name}
					prop1Title="Name : "
					prop2={item.terrain}
					prop2Title="Terrain : "
					prop3={item.population}
					prop3Title="Population : "
					prop4={item.climate}
					prop4Title="Climate : "
					prop5={item.diameter}
					prop5Title="Diameter : "
					type="planets"
					id={this.parserFunction(item.url)}
				/>
			);
		});

		return (
			<React.Fragment>
				<div className="home ">
					<div className="planets-div">
						<hr className="hr-top col-lg-10 col-md-6 col-sm-6 col-xs-6 " />
						<p className="pText">Planets</p>
						<hr className="hr-bottom col-lg-10 col-md-6 col-sm-6 col-xs-6 " />
					</div>
					<div className="container">
						<div className="row">{planetCard}</div>
					</div>
					<div>
						<hr className="hr-top col-lg-10 col-md-6 col-sm-6 col-xs-6" />
						<p className="pText">People</p>
						<hr className="hr-bottom col-lg-10 col-md-6 col-sm-6 col-xs-6" />
					</div>

					<div className="container">
						<div className="row">{peopleCard}</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
