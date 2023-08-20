// BlogNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl, Image } from 'react-bootstrap';

import MyImage from '../images/food4.jpg';



const BlogNav = () => {
	return (
		<div>
			<Navbar style={{
				backgroundColor:"#A3C1D4"
			}}>
				<Image
			src={MyImage}
			height='50'
			alt=''
			loading='lazy'
            className="m-2"
			roundedCircle />
     
				<Navbar.Brand href="#home" style={{color:"white", marginLeft:"10px"}}>NFSoft</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
					<Nav>
						<Nav.Link  style={{color:"white"}}>
							JavaScript
						</Nav.Link>
						<Nav.Link href="#about" style={{color:"white"}}>
							Data Structure
						</Nav.Link>
						<Nav.Link href="#services" style={{color:"white"}}>
							Algorithm
						</Nav.Link>
						<Nav.Link href="#contact" style={{color:"white"}}>
							Computer Network
						</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="ml-auto ml-5" />
					</Form>
				</Navbar.Collapse>
			</Navbar>
  
		</div>
	)
}

export default BlogNav;
