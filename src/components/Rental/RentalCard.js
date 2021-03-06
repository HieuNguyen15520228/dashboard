import React, { Component } from 'react';
import {
    Col,
    Card,
    CardBody,
    Badge,
    Button,
    ButtonGroup
} from "shards-react";
import { connect } from 'react-redux';
import { approveRental, forbidRental } from './actions'
import moment from 'moment'
class RentalCard extends Component {
    render() {
        const rental = this.props.rental
        const button = this.props.button 
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
                        {
                            button &&
                            <div className="button-actions">
                                <ButtonGroup size="sm">
                                    <Button onClick={this.props.approveRental} theme="white">
                                        <span className="text-success">
                                            <i className="material-icons">check</i>
                                        </span>
                                    </Button>
                                    <Button onClick={this.props.forbidRental} theme="white">
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
                        }
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
                                {rental.title || '' + ', ' + rental.price + ' VND'}
                            </a>
                        </h5>
                        <p className="card-text d-inline-block mb-3">{rental.address}</p>
                        <span className="text-muted">{moment(rental.createdAt).format('DD/MM/YYYY')}</span>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        approveRental: () => dispatch(approveRental(ownProps.rental._id)),
        forbidRental: () => dispatch(forbidRental(ownProps.rental._id))
    }
}
export default connect(null, mapDispatchToProps)(RentalCard);