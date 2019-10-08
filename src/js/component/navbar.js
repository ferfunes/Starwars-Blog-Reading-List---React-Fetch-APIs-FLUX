import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext.js";

export class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			clicked: false
		};
	}
	show = () => {
		this.setState({ clicked: !this.state.clicked });
	};
	render() {
		return (
			<div className="whole">
				<nav className="navbar navbar-expand-lg">
					<Link to="/">
						<img
							className="logo"
							src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_black-700x700.png"
						/>
					</Link>

					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									<i className="social-cont facebook fab fa-facebook" />
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<i className="social-cont twitter fab fa-twitter-square" />
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<i className="social-cont instagram fab fa-instagram" />
								</a>
							</li>
						</ul>
					</div>
					<div className={"btn-group " + (this.state.clicked && "show")}>
						<button
							onClick={this.show}
							type="button"
							className="btn btn-secondary dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
						</button>

						<div className={"dropdown-menu dropdown-menu-right " + (this.state.clicked && "show")}>
							<Consumer>
								{({ store, actions }) => {
									return store.favorites.map((item, index) => (
										<button key={index} className="dropdown-item" type="button">
											{item.name}
										</button>
									));
								}}
							</Consumer>
						</div>
					</div>
				</nav>
				<ul className="nav-links nav nav-pills nav-fill">
					<li className="nav-item">
						<Link to="/Details">
							<a className="nav-link " href="#">
								News + Blog
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Details">
							<a className="nav-link " href="#">
								Details
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Details">
							<a className="nav-link" href="#">
								Film
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Details">
							<a className="nav-link" href="#">
								Series
							</a>
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}
