import React, { Component } from 'react';

import eal1 from '../../properties/Ealing/eal-1.jpg';
import eal2 from '../../properties/Ealing/eal-2.jpg';
import eal3 from '../../properties/Ealing/eal-3.jpg';
import eal4 from '../../properties/Ealing/eal-4.jpg';

import bla1 from '../../properties/Blackfriars/black-1.jpg';
import bla2 from '../../properties/Blackfriars/black-2.jpg';
import bla3 from '../../properties/Blackfriars/black-3.jpg';
import bla4 from '../../properties/Blackfriars/black-4.jpg';

import kni1 from '../../properties/Knightsbridge/kinght-1.jpg';
import kni2 from '../../properties/Knightsbridge/kinght-2.jpg';
import kni3 from '../../properties/Knightsbridge/kinght-3.jpg';
import kni4 from '../../properties/Knightsbridge/kinght-4.jpg';
import kni5 from '../../properties/Knightsbridge/kinght-5.jpg';
import kni6 from '../../properties/Knightsbridge/kinght-6.jpg';
import kni7 from '../../properties/Knightsbridge/kinght-7.jpg';
import kni8 from '../../properties/Knightsbridge/kinght-8.jpg';
import kni9 from '../../properties/Knightsbridge/kinght-9.jpg';

class FeaturedProperties extends Component {
	render() {
		return (
			<div className="property-container">
				<div className="underlined-title-blue">
					<h1>Featured Properties</h1>
				</div>
				<div className="card-deck">
					<div className="card">
						<div
							id="carouselOneControls"
							className="property-carousel carousel slide"
						>
							<div className="carousel-inner" role="listbox">
								<div className="property-carousel-item carousel-item active">
									<img className="d-block img-fluid" src={eal1} />
								</div>
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={eal2} />
								</div>
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={eal3} />
								</div>
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={eal4} />
								</div>
							</div>
							<a
								className="carousel-control-prev"
								href="#carouselOneControls"
								role="button"
								data-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								/>
								<span className="sr-only">Previous</span>
							</a>
							<a
								className="carousel-control-next"
								href="#carouselOneControls"
								role="button"
								data-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								/>
								<span className="sr-only">Next</span>
							</a>
						</div>
						<div className="card-block">
							<h4 className="card-title text-info text-center mt-4">
								Ealing Broadway, W5
							</h4>
							<p className="card-text text-center mx-2">
								A breathtaking residential complex with modern architecture in
								the heart of the popular Ealing district offers a truly 5-star
								lifestyle.
							</p>
							<div className="text-center mb-4">
								<a href="#" className="btn btn-info">
									More Details
								</a>
							</div>
						</div>
					</div>

					<div className="card">
						<div
							id="carouselTwoControls"
							className="property-carousel carousel slide"
						>
							<div className="carousel-inner" role="listbox">
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={kni1} />
								</div>
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={kni2} />
								</div>
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={kni3} />
								</div>
								<div className="property-carousel-item carousel-item active">
									<img className="d-block img-fluid" src={kni4} />
								</div>
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={kni5} />
								</div>
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={kni6} />
								</div>
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={kni7} />
								</div>
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={kni8} />
								</div>
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={kni9} />
								</div>
							</div>
							<a
								className="carousel-control-prev"
								href="#carouselTwoControls"
								role="button"
								data-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								/>
								<span className="sr-only">Previous</span>
							</a>
							<a
								className="carousel-control-next"
								href="#carouselTwoControls"
								role="button"
								data-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								/>
								<span className="sr-only">Next</span>
							</a>
						</div>
						<div className="card-block">
							<h4 className="card-title text-info text-center mt-4">
								Knightsbridge, SW7
							</h4>
							<p className="card-text text-center mx-2">
								Capital Estate London offers to your attention an exclusive
								offer, which is not on the market! Full interior decoration,
								Smart home system, Fully furnished.
							</p>
							<div className="text-center mb-4">
								<a href="#" className="btn btn-info">
									More Details
								</a>
							</div>
						</div>
					</div>

					<div className="card">
						<div
							id="carouselThreeControls"
							className="property-carousel carousel slide"
						>
							<div className="carousel-inner" role="listbox">
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={bla1} />
								</div>
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={bla2} />
								</div>
								<div className="property-carousel-item carousel-item active">
									<img className="d-block img-fluid" src={bla3} />
								</div>
								<div className="property-carousel-item carousel-item">
									<img className="d-block img-fluid" src={bla4} />
								</div>
							</div>
							<a
								className="carousel-control-prev"
								href="#carouselThreeControls"
								role="button"
								data-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								/>
								<span className="sr-only">Previous</span>
							</a>
							<a
								className="carousel-control-next"
								href="#carouselThreeControls"
								role="button"
								data-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								/>
								<span className="sr-only">Next</span>
							</a>
						</div>
						<div className="card-block">
							<h4 className="card-title text-info text-center mt-4">
								Blackfriars, EC4
							</h4>
							<p className="card-text text-center mx-2">
								A new business-class residential building in the financial
								center of London. All apartments are equipped with the latest
								technology with the use of smart home systems.
							</p>
							<div className="text-center mb-4">
								<a href="#" className="btn btn-info">
									More Details
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FeaturedProperties;
