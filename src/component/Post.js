// Posts.js
import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";
import { Container, Row, Col, Card } from 'react-bootstrap';


const Posts = () => {
	return (
		<Container fluid>
			<Row className="justify-content-between">
			<Col md={2} className="m-5">
			<div>
						<h2>Share</h2>
							<ul className="list-unstyled">
								<li><a href="0#">Linkedln</a></li>
								<li><a href="0#">Facebook</a></li>
								<li><a href="0#">Twitter</a></li>
								<li><a href="0#">Github</a></li>
								<li><a href="0#">leetcode</a></li>
							</ul>
					</div>
				</Col>
				<Col md={6} className="mb-4 mt-4">
					<Post1 />
				</Col>
				<Col md={3} className="mt-4 float-right">
					<Card>
						<Card.Body>
							<Card.Title>Recent Posts</Card.Title>
							<ul className="list-unstyled">
								<li><a href="0#">JavaScript</a></li>
								<li><a href="0#">Data Structure</a></li>
								<li><a href="0#">Algorithm</a></li>
								<li><a href="0#">Computer Network</a></li>
							</ul>
						</Card.Body>
					</Card>
				</Col>

				<Col md={2} className="mb-4 mt-4">
			       <div>
	
					</div>
				</Col>
				<Col md={6} className="mb-4">
					<Post2 />
				</Col>
                <Col md={3} className="mt-4 float-right">
					<Card>
						<Card.Body>
							<Card.Title>popular Posts</Card.Title>
							<ul className="list-unstyled">
								<li><a href="0#">JavaScript</a></li>
								<li><a href="0#">Data Structure</a></li>
								<li><a href="0#">Algorithm</a></li>
								<li><a href="0#">reactjs</a></li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
			


				<Col md={2} className="mb-4 mt-4">
			       <div>
	
					</div>
				</Col>
				<Col md={6} className="mb-4">
					<Post3 />
				</Col>
                
				<Col md={3} className="mb-4 mt-4">
			       <div>
	
					</div>
				</Col>
				<Col md={2} className="mb-4 mt-4">
			       <div>
	
					</div>
				</Col>
				<Col md={6} className="mb-4">
					<Post4 />
				</Col>
				<Col md={3} className="mb-4 mt-4">
			       <div>
	
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Posts;
