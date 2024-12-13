import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import MyNavBar from "./components/MyNavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import NewsSectionSx from "./components/NewsSectionSx";
import NewsSectionDx from "./components/NewsSectionDx";
import NewStreamRadio from "./components/NewStreamRadio";
import { BrowserRouter } from "react-router-dom";
import { TbBackground } from "react-icons/tb";
import Song from "./components/Song";
import Sidebar from "./components/SideBar";
import Player from "./components/Player";

function App() {
	return (
		<BrowserRouter>
			<Container fluid>
				<Row>
					<div className="col-12 col-lg-3 d-flex justify-content-between  d-lg-flex flex-lg-column ">
						<MyNavBar></MyNavBar>
					</div>
					<div className="col-12 col-lg-9  ">
						<Player></Player>
						<Row className="my-3">
							<div className="col-6">
								<NewsSectionSx></NewsSectionSx>
							</div>
							<div className="col-6">
								<NewsSectionDx></NewsSectionDx>
							</div>
						</Row>
						<Row className="my-3">
							<Col>
								<NewStreamRadio />
							</Col>
						</Row>
						<Row className="g-4">
							<h1 className="text-white mt-4 fs-4">Nuove uscite </h1>
							<Song></Song>
						</Row>
						<Row>
							<Sidebar />
						</Row>
					</div>
				</Row>
			</Container>
		</BrowserRouter>
	);
}

export default App;
