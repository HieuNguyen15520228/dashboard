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
import { approveBlog, forbidBlog } from './actions'
import moment from 'moment'
class BlogCard extends Component {
    render() {
        const blog = this.props.blog
        const button = this.props.button 
        return (
            <Col lg="3" md="6" sm="12" className="mb-4">
                <Card small className="card-post card-post--1">
                    <div
                        className="card-post__image"
                        style={{ backgroundImage: `url(${blog.image && blog.image})` }}
                    >
                        <Badge
                            pill
                            className={`card-post__category bg-${blog.category && blog.category}`}
                        >
                            {blog.category || ''}
                        </Badge>
                        {
                            button &&
                            <div className="button-actions">
                                <ButtonGroup size="sm">
                                    <Button onClick={this.props.approveblog} theme="white">
                                        <span className="text-success">
                                            <i className="material-icons">check</i>
                                        </span>
                                    </Button>
                                    <Button onClick={this.props.forbidblog} theme="white">
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
                                style={{ backgroundImage: `url('${blog.author && blog.author.image}')` }}
                            >
                                Written by {blog.author.username}
                            </a>
                        </div>
                    </div>
                    <CardBody>
                        <h5 className="card-title">
                            <a href="#" className="text-fiord-blue">
                                {blog.title || ''}
                            </a>
                        </h5>
                        {/* <p className="card-text d-inline-block mb-3">{blog.address}</p>
                        <span className="text-muted">{moment(blog.createdAt).format('DD/MM/YYYY')}</span> */}
                    </CardBody>
                </Card>
            </Col>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        approveblog: () => dispatch(approveBlog(ownProps.blog._id)),
        forbidblog: () => dispatch(forbidBlog(ownProps.blog._id))
    }
}
export default connect(null, mapDispatchToProps)(BlogCard);