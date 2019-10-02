import React from "react";
import "../../styles/home.scss";

import { Card } from "../component/Card.js";

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

	render() {
		let newArray = this.state.character.map((item, index) => {
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
				/>
			);
		});

		let newArray2 = this.state.planet.map((item, index) => {
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
				/>
			);
		});

		return (
			<div className="home ">
				<div className="planets-div">
					<hr className="hr-top col-lg-10 col-md-6 col-sm-6 col-xs-6 " />
					<p className="pText">Planets</p>
					<hr className="hr-bottom col-lg-10 col-md-6 col-sm-6 col-xs-6 " />
				</div>
				<div className="container">
					<div className="row">{newArray2}</div>
				</div>
				<div>
					<hr className="hr-top col-lg-10 col-md-6 col-sm-6 col-xs-6" />
					<p className="pText">People</p>
					<hr className="hr-bottom col-lg-10 col-md-6 col-sm-6 col-xs-6" />
				</div>

				<div className="container">
					<div className="row">{newArray}</div>
				</div>
			</div>
		);
	}
}
