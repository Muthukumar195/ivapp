import React, { Component, Fragment } from "react";
import Image from 'react-bootstrap/Image';
import {assetURL} from '_constants/BaseConfig';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class VerificationSuccess extends Component {
	render() {
		return (
			<Fragment>
				<div className="error-header">
					<section className="error-header-inner text-center">
						<Container>
							<Link to="/" className="logo"><Image src={`${assetURL}images/logo.png`} alt="Invoice Application" fluid /></Link>
						</Container>
					</section>
				</div>
				<div className="error-body">
					<Container>
						<div className="error-body-inner text-center">
							<Image src={`${assetURL}images/error/verified.png`} alt="Session Expired" fluid />
							<h3>Successfully Verified</h3>
							<p>Your account has verified</p>
							<Button className="btn-custom btn-light-blue" variant="back-to-home">Login</Button>
						</div>
					</Container>
				</div>
				<div className="error-footer">
					<section className="copyright">
						<Container>
							<Row>
								<Col>
									<p>&copy; 2019, invoice application</p>
								</Col>
							</Row>
						</Container>
					</section>
				</div>
			</Fragment>
		);
	}
}

export default VerificationSuccess;