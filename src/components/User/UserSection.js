import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from "shards-react";

class UserSection extends Component {
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
                      Họ tên
                  </th>
                    <th scope="col" className="border-0">
                      Giới tính
                  </th>
                    <th scope="col" className="border-0">
                      Điện thoại
                  </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.list.map((i, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{i.username}</td>
                      <td>{i.email}</td>
                      <td>{i.fullname}</td>
                      <td>{i.gender}</td>
                      <td>{i.phone}</td>
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

export default UserSection;