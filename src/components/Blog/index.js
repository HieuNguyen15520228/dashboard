import React, { Component } from 'react';
import {
	Container,
	Row
} from "shards-react";
import PageTitle from "components/common/PageTitle";

import {getPendingBlogs} from './actions'
import {connect} from 'react-redux'
import BlogCard from './BlogCard'
class Blog extends Component {
    componentDidMount() {
        console.log('run')
        this.props.getPendingBlogs()
    }
    render() { 
        const List = this.props.pendingList
        return (
            <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <PageTitle sm="4" title="Rental List" subtitle="Pending" className="text-sm-left" />
            </Row>
    
            {/* First Row of Posts */}
            <Row>
                {
                    List.map((i,index)=> {
                        return <BlogCard button={true} blog={i} key={index}/>
                    })
                }
            	</Row>
			</Container>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        pendingList: state.blog.pendingList
    }
}
const mapDispatchToProps  = (dispatch) => {
    return {
        getPendingBlogs: () => dispatch(getPendingBlogs())
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(Blog);