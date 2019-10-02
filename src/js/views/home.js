import React from "react";
import "../../styles/home.scss";
import { Planets } from "../component/Planets.js";
import { Characters } from "../component/Characters.js";

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
				<Characters
					key={index}
					name={item.name}
					height={item.height}
					birth_year={item.birth_year}
					gender={item.gender}
				/>
			);
		});

		let newArray2 = this.state.planet.map((item, index) => {
			return (
				<Planets
					key={index}
					name={item.name}
					terrain={item.terrain}
					population={item.population}
					climate={item.climate}
				/>
			);
		});

		return (
			<div className="home ">
				<div>
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
