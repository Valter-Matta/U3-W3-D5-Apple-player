import Card from "react-bootstrap/Card";

function NewsSectionSx() {
	return (
		<>
			<Card style={{ height: "300px", backgroundColor: "#1f1f1f" }}>
				<Card.Body className="text-white">
					Nuova Stazione Radio
					<Card.Text style={{ height: "50px" }}>
						Rilassati, al resto ci pensiamo noi, Ascolta Apple Music Chill
					</Card.Text>
				</Card.Body>
				<Card.Img
					className="rounded-3
					"
					style={{ height: "200px" }}
					variant="bottom"
					src="./assets/images/1a.png"
				/>
			</Card>
		</>
	);
}

export default NewsSectionSx;
