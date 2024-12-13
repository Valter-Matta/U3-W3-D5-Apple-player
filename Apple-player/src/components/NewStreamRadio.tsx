import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbCircleLetterEFilled } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";

const NewStreamRadio = () => {
	const settings = {
		dots: true, // Mostra i punti di navigazione
		infinite: true, // Loop infinito
		speed: 500, // Velocità di transizione
		slidesToShow: 2, // Quanti elementi mostrare per volta
		slidesToScroll: 1, // Quanti elementi scorrere per volta
		autoplay: true, // Avvia automaticamente
		autoplaySpeed: 2000, // Velocità dell'autoplay
	};

	return (
		<div className="w-3/4 mx-auto text-white mt-10 mb-3">
			<h2 className="text-start text-xl mb-2 mt-4">
				Nuovi episodi radio <IoIosArrowForward />{" "}
			</h2>
			<Slider {...settings}>
				<div>
					<img className="w-100" src="./assets/images/2c.png" alt="Slide 1" />
					<div className="d-flex justify-content-between mt-2 px-2">
						<p>Michael Bublè & Carly Pearce</p>
						<TbCircleLetterEFilled className="fs-3" />
					</div>
				</div>
				<div>
					<img className="w-100" src="./assets/images/2a.png" alt="Slide 2" />
					<div className="d-flex justify-content-between mt-2 px-2">
						<p>Prodigo con Abuelo</p>
						<TbCircleLetterEFilled className="fs-3" />
					</div>
				</div>
				<div>
					<img className="w-100" src="./assets/images/2b.png" alt="Slide 3" />
					<div className="d-flex justify-content-between mt-2 px-2">
						<p>The king</p>
						<TbCircleLetterEFilled className="fs-3" />
					</div>
				</div>
				<div>
					<img className="w-100" src="./assets/images/2d.png" alt="Slide 3" />
					<div className="d-flex justify-content-between mt-2 px-2">
						<p>ullala</p>
						<TbCircleLetterEFilled className="fs-3" />
					</div>
				</div>
				<div>
					<img className="w-100" src="./assets/images/2e.png" alt="Slide 3" />
					<div className="d-flex justify-content-between mt-2 px-2">
						<p>rado manila</p>
						<TbCircleLetterEFilled className="fs-3" />
					</div>
				</div>
				<div>
					<img className="w-100" src="./assets/images/2f.png" alt="Slide 3" />
					<div className="d-flex justify-content-between mt-2 px-2">
						<p>The Wanderer</p>
						<TbCircleLetterEFilled className="fs-3" />
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default NewStreamRadio;
