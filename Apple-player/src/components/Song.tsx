import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import ISongs from "../Interface/ISong";
import { TbCircleLetterEFilled } from "react-icons/tb";

const API = " https://striveschool-api.herokuapp.com/api/deezer/search?q=";

interface Track {
	id: number;
	title: string;
	album: {
		cover: string;
	};
}
interface initialState {
	main: {
		songs: Track;
	};
	search: {
		input: "";
	};
}

function Song() {
	const disp = useDispatch();
	const arrOfSongs = useSelector((state: initialState) => {
		console.log(state.main.songs);

		return state.main.songs;
	});

	const getSongs = async () => {
		try {
			const call = await fetch(`${API}queen`);
			if (call.ok) {
				const resp = await call.json();
				const limitedSongs = resp.data.slice(0, 8);
				// console.log(resp.data);

				disp({
					type: "GET_SONG",
					payload: limitedSongs,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getSongs();
	}, []);

	return arrOfSongs.map((s: ISongs) => (
		<div className="col-6 col-md-4 col-lg-3 m-0 p-2" key={s.album.id}>
			<Card className="text-white h-100">
				<Card.Img variant="top" src={s.album.cover} alt={s.title} />
				<Card.Body
					className="h-50 d-flex flex-column justify-content-between"
					style={{ backgroundColor: " rgba(46, 46, 46, 0.8)" }}
				>
					<Card.Title className="fs-5">{s.title}</Card.Title>
					<div className="d-flex justify-content-between">
						<Card.Text className="p-0 m-0">{s.artist.name}</Card.Text>
						<TbCircleLetterEFilled className="fs-3" />
					</div>
				</Card.Body>
			</Card>
		</div>
	));
}

export default Song;
