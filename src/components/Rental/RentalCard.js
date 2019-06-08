import React, { Component } from 'react';
import {
    Col,
    Card,
    CardBody,
    Badge,
    Button,
    ButtonGroup
} from "shards-react";
import {connect} from 'react-redux';
import {approveRental} from './actions'
class RentalCard extends Component {
    approve = () => {

    }
    render() {
        const rental = this.props.rental
        return (
            <Col lg="3" md="6" sm="12" className="mb-4">
                <Card small className="card-post card-post--1">
                    <div
                        className="card-post__image"
                        style={{ backgroundImage: `url(${rental.image && rental.image[0]})` }}
                    >
                        <Badge
                            pill
                            className={`card-post__category bg-${rental.category && rental.category}`}
                        >
                            {rental.category || ''}
                        </Badge>
                        <div className="button-actions">
                            <ButtonGroup size="sm">
                                <Button onClick={this.props.approveRental} theme="white">
                                    <span className="text-success">
                                        <i className="material-icons">check</i>
                                    </span>
                                </Button>
                                <Button theme="white">
                                    <span className="text-danger">
                                        <i className="material-icons">clear</i>
                                    </span>

                                </Button>
                                <Button theme="white">
                                    <span className="text-light">
                                        <i className="material-icons">more_vert</i>
                                    </span>

                                </Button>
                            </ButtonGroup>
                        </div>
                        <div className="card-post__author d-flex">
                            <a
                                href="#"
                                className="card-post__author-avatar card-post__author-avatar--small"
                                style={{ backgroundImage: `url('${rental.user && rental.user.image}')` }}
                            >
                                Written by {rental.user.username}
                            </a>
                        </div>
                    </div>
                    <CardBody>
                        <h5 className="card-title">
                            <a href="#" className="text-fiord-blue">
                                {rental.title || ''}
                            </a>
                        </h5>
                        <p className="card-text d-inline-block mb-3">{rental.address}</p>
                        <span className="text-muted">{rental.createdAt}</span>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        approveRental: () => dispatch(approveRental(ownProps.rental._id))
    }
}
export default connect(null, mapDispatchToProps)(RentalCard);