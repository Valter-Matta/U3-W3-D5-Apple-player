import { ListGroup, Container, Row, Col } from "react-bootstrap";

const Sidebar = () => {
	return (
		<Container fluid className="bg-dark text-light text-center text-md-start">
			<Row>
				<h2 className="text-white my-3 text-md-center">Altro da esplorare</h2>

				<div className="col-12 col-md-6 col-lg-4 text-md-center">
					<ListGroup.Item className="bg-dark border-0 text-light mb-3">
						<a href="#" className="text-light text-decoration-none">
							Esplora per genere
						</a>
					</ListGroup.Item>
					<ListGroup.Item className="bg-dark border-0 text-light mb-3">
						<a href="#" className="text-light text-decoration-none">
							Decenni
						</a>
					</ListGroup.Item>
					<ListGroup.Item className="bg-dark border-0 text-light mb-3">
						<a href="#" className="text-light text-decoration-none">
							Attività e stati d'animo
						</a>
					</ListGroup.Item>
				</div>

				<div className="col-12 col-md-6 col-lg-4 text-md-center">
					<ListGroup.Item className="bg-dark border-0 text-light mb-3">
						<a href="#" className="text-light text-decoration-none">
							Worldwide
						</a>
					</ListGroup.Item>
					<ListGroup.Item className="bg-dark border-0 text-light mb-3">
						<a href="#" className="text-light text-decoration-none">
							Classifiche
						</a>
					</ListGroup.Item>
					<ListGroup.Item className="bg-dark border-0 text-light mb-3">
						<a href="#" className="text-light text-decoration-none">
							Audio spaziale
						</a>
					</ListGroup.Item>
				</div>
				<div className="col-12 col-md-6 d-md-flex d-lg-block text-lg-center  justify-content-around col-lg-4">
					<ListGroup.Item className="bg-dark border-0 text-light mb-3">
						<a href="#" className="text-light text-decoration-none">
							Video musicali
						</a>
					</ListGroup.Item>
					<ListGroup.Item className="bg-dark border-0 text-light mb-3">
						<a href="#" className="text-light text-decoration-none">
							Nuovi artisti
						</a>
					</ListGroup.Item>
					<ListGroup.Item className="bg-dark border-0 text-light mb-3">
						<a href="#" className="text-light text-decoration-none">
							Hit del passato
						</a>
					</ListGroup.Item>
				</div>

				<div className="footer mt-4 text-lg-center">
					<Row>
						<div>
							<div className="footer-links mb-2">
								<a href="#" className="text-light text-decoration-none">
									Italia
								</a>{" "}
								|{" "}
								<a href="#" className="text-light text-decoration-none">
									English (UK)
								</a>
							</div>
						</div>
					</Row>
					<Row>
						<div>
							<p>Copyright © 2024 Apple Inc. Tutti i diritti riservati.</p>
						</div>
					</Row>
				</div>
			</Row>
		</Container>
	);
};

export default Sidebar;
