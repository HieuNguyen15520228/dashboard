import React, { Component } from "react";
import { Container, Row } from "shards-react";
import PageTitle from "components/common/PageTitle";
import { getContact } from 'components/Blog/actions'
import { connect } from 'react-redux'
import ContactSection from './ContactSection'
class Contact extends Component {
    componentDidMount() {
        this.props.getContact()
    }
    render() {
        const contactList = this.props.contactList
        console.log(contactList)
        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Danh sách người dùng" className="text-sm-left" />
                </Row>
                <ContactSection title="Trang liên hệ" list={contactList} />
            </Container>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        contactList: state.blog.contactList
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getContact: () => dispatch(getContact())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact);