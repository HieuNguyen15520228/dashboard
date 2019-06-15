import React, { Component } from "react";
import { Container, Row} from "shards-react";
import PageTitle from "components/common/PageTitle";

import { getUsers } from './actions'
import { connect } from 'react-redux'
import _ from 'lodash'
import UserSection from './UserSection'
class User extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    const activeUsers = this.props.userList.filter( user => {return (user.status==='active' && user.isVerified === true)}) || [];
    const inactiveUsers = this.props.userList.filter( user => {return (user.status==='inactive' && user.isVerified === true)}) || [];
    const unVerifiedUsers = this.props.userList.filter( user => {return (user.isVerified === false)}) || [];
    
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Danh sách người dùng" className="text-sm-left" />
        </Row>
        {!_.isEmpty(activeUsers) && <UserSection title="Active Users" list={activeUsers}/>}
        {!_.isEmpty(inactiveUsers) && <UserSection title='Inactive Users' list={inactiveUsers}/>}
        {!_.isEmpty(unVerifiedUsers) && <UserSection title="Tài khoản chưa xác nhận email" list={unVerifiedUsers}/>}
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userList: state.user.userList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);
