// Post4.js

import { Card } from "react-bootstrap";
import MyImage from '../images/network.jpg';


const Post4 = () => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src={MyImage}
				width={20}
				height={250}
			/>
			<Card.Body>
				<Card.Title>Computer Network</Card.Title>
				<Card.Text>
					An interconnection of multiple devices,
					also known as hosts, that are connected using
					multiple paths for the purpose of sending/
					receiving data media. Computer networks can
					also include multiple devices/mediums which
					help in the communication between two different
					devices; these are known as Network devices
					and include things such as routers, switches,
					hubs, and bridges.
				</Card.Text>
				<a href="0#" className="btn btn-primary">Read More</a>
			</Card.Body>
		</Card>
	)
}

export default Post4;
