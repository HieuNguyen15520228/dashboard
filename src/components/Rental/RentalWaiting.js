/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row
} from "shards-react";
import RentalCard from './RentalCard'
import './style.scss'
import { getPendingRentals } from './actions'
import PageTitle from "components/common/PageTitle";
import { connect } from 'react-redux'
class RentalWaiting extends React.Component {
  componentDidMount() {
    this.props.getPendingRentals()
  }
  render() {
    const list = this.props.pendingRentals;
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Rental List" subtitle="Pending" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {list.map((rental, index) => (
            <RentalCard button={true} key={index} rental={rental}/>
          ))}
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    pendingRentals: state.rental.pendingList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPendingRentals: () => dispatch(getPendingRentals())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RentalWaiting);
