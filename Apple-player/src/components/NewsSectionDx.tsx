import Card from "react-bootstrap/Card";

function NewsSectionDx() {
	return (
		<>
			<Card style={{ height: "300px", backgroundColor: "#1f1f1f" }}>
				<Card.Body className="fs-6 text-white ">
					Nuova Stazione Radio
					<Card.Text style={{ height: "50px" }}>
						Ecoo la nuova casa della musica latina
					</Card.Text>
				</Card.Body>
				<Card.Img
					className="rounded-3
					"
					style={{ height: "200px" }}
					variant="bottom"
					src="./assets/images/1b.png"
				/>
			</Card>
		</>
	);
}

export default NewsSectionDx;
