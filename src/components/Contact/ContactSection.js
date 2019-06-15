import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

class ContactSection extends Component {
	render() {
		return (
			<Row>
				<Col>
					<Card small className="mb-4">
						<CardHeader className="border-bottom">
							<h6 className="m-0">{this.props.title}</h6>
						</CardHeader>
						<CardBody className="p-0 pb-3">
							<table className="table mb-0">
								<thead className="bg-light">
									<tr>
										<th scope="col" className="border-0">
											#
                  </th>
										<th scope="col" className="border-0">
											Username
                  </th>
										<th scope="col" className="border-0">
											Email
                  </th>
										<th scope="col" className="border-0">
											Nội dung
                  </th>
										<th scope="col" className="border-0">
										</th>
									</tr>
								</thead>
								<tbody>
									{this.props.list.map((i, index) => (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{i.name}</td>
											<td>{i.email}</td>
											<td>{i.message}</td>
										</tr>
									)
									)
									}
								</tbody>
							</table>
						</CardBody>
					</Card>
				</Col>
			</Row>
		);
	}
}

export default (ContactSection);