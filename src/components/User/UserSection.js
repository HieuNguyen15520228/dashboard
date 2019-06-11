import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import {activate, deactivate} from './actions'
import {connect} from 'react-redux'
class UserSection extends Component {
  renderBtn = ({ status = this.props.status }) => {
    switch (status) {
      case 'active':
        return <Button outline theme="danger" className="mb-2 mr-1">Deactive</Button>
      case 'inactive':
        return <Button outline theme="success" className="mb-2 mr-1">Active</Button>
    }
  }
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
                    <th scope="col" className="border-0">
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.list.map((i, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{i.username}</td>
                      <td>{i.email}</td>
                      <td>{i.fullname}</td>
                      <td>{i.gender}</td>
                      <td>{i.phone}</td>
                      <td>{i.status === 'active' ? <Button onClick={()=> this.props.deactivate(i._id)} outline theme="danger" className="mb-2 mr-1">Deactivate</Button>
                        : <Button onClick={() => this.props.activate(i._id)} outline theme="success" className="mb-2 mr-1">Activate</Button>
                      }</td>
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
const mapDispatchToProps = (dispatch) => {
  return {
    activate: (userId) => dispatch(activate(userId)),
    deactivate: (userId) => dispatch(deactivate(userId))
  }
}
export default connect(null, mapDispatchToProps)(UserSection);