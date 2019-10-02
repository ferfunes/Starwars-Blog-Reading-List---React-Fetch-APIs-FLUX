import React from "react";

export const Details = () => {
	return (
		<div className="wrapper container">
			<div className="row cont1 ">
				<img
					className="img1 col"
					src="https://lumiere-a.akamaihd.net/v1/images/Appo-main-image_653bd25a.jpeg?region=0%2C0%2C1387%2C779&width=768"
				/>

				<div className=" description-holder col ">
					<p className="name">APPO</p>
					<p className="description">
						A clone trooper in Republic service, Appo took part in a number of critical battles during the
						fight against the Separatists. As a sergeant, he served under General Pong Krell on Umbara, and
						saw firsthand Krells willingness to throw away the lives of his troops. In the final days of the
						war Appo accompanied Anakin Skywalker to Coruscants Jedi Temple as part of Order 66. When
						Senator Bail Organa arrived during the aftermath of the Temple attack, Appo told him of the
						“Jedi rebellion” and ordered him to leave the area.
					</p>
				</div>
			</div>
			<div className="cont2 row d-flex text-center">
				<div className="txt1 col-lg-3">
					<div className="vr-line">
						<p className="title-attribute">APPEARANCES</p>

						<p>Star Wars: Revenge of the Sith</p>
						<p>Star Wars: The Clone Wars</p>
					</div>
				</div>
				<div className="txt2 col-lg-3">
					<div className="vr-line">
						<p className="title-attribute">AFFILIATIONS</p>

						<p>Clone Troopers</p>
						<p>Galactic Republic</p>
					</div>
				</div>

				<div className="txt3 col-lg-3">
					<div className="vr-line">
						<p className="title-attribute">LOCATIONS</p>
						<p>Kamino</p>
					</div>
				</div>
				<div className="txt4 col-lg-3">
					<div className="vr-line">
						<p className="title-attribute">GENDER</p>
						<p>Male</p>
					</div>
				</div>
			</div>
		</div>
	);
};
