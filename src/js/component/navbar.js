import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<div className="whole">
				<nav className="navbar navbar-expand-lg">
					<a className="navbar-brand" href="#">
						<Link to="/">
							<img
								className="logo"
								src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_black-700x700.png"
							/>
						</Link>
					</a>

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
					<form className="form-inline  my-2 my-lg-0">
						<input className="input form-control mr-sm-2" type="search" placeholder="Search Star Wars" />
						<button className="search-btn btn btn-outline-light my-2 my-sm-0 " type="submit">
							<div className="btn-text">Search</div>
						</button>
					</form>
				</nav>
				<ul className="nav-links nav nav-pills nav-fill">
					<li className="nav-item">
						<a className="nav-link " href="#">
							News + Blog
						</a>
					</li>
					<li className="nav-item">
						<Link to="/Details">
							<a className="nav-link" href="#">
								Detail
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Film
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Series
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
