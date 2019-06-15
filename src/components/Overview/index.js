import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "components/common/PageTitle";
import SmallStats from "components/common/SmallStats";
import UsersOverview from "components/blog/UsersOverview";
import UsersByDevice from "components/blog/UsersByDevice";
import NewDraft from "components/blog/NewDraft";
import Discussions from "components/blog/Discussions";
import TopReferrals from "components/common/TopReferrals";
import { getNumbers } from './actions';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Overview extends Component {
    componentDidMount() {
        this.props.getNumbers()
    }
    render() {
        const smallStats = [
            {
                label: "User",
                value: this.props.numbers.user || 0,
                link: '/user',
                // percentage: "0%",
                increase: true,
                attrs: { md: "6", sm: "6" },
                datasets: [
                    {
                        // label: "Today",
                        // fill: "start",
                        // borderWidth: 1.5,
                        // backgroundColor: "rgba(0, 184, 216, 0.1)",
                        // borderColor: "rgb(0, 184, 216)",
                        data: []
                    }
                ]
            },
            {
                label: "Rentals",
                value: this.props.numbers.rental || 0,
                // percentage: "12.4",
                // increase: true,
                link : '/rental',
                attrs: { md: "6", sm: "6" },
                datasets: [
                    {
                        // label: "Today",
                        // fill: "start",
                        // borderWidth: 1.5,
                        // backgroundColor: "rgba(23,198,113,0.1)",
                        // borderColor: "rgb(23,198,113)",
                        data: []
                    }
                ]
            },
            {
                label: "Bookings",
                value: this.props.numbers.booking || 0,
                // percentage: "3.8%",
                // increase: false,
                // decrease: true,
                link : '/booking',
                chartLabels: [null, null, null, null, null, null, null],
                attrs: { md: "4", sm: "6" },
                datasets: [
                    {
                        // label: "Today",
                        // fill: "start",
                        // borderWidth: 1.5,
                        // backgroundColor: "rgba(255,180,0,0.1)",
                        // borderColor: "rgb(255,180,0)",
                        data: []
                    }
                ]
            },
            {
                label: "Payments",
                value: this.props.numbers.payment,
                // percentage: "2.71%",
                // increase: false,
                // decrease: true,
                link : '/payment',
                chartLabels: [null, null, null, null, null, null, null],
                attrs: { md: "4", sm: "6" },
                datasets: [
                    {
                        // label: "Today",
                        // fill: "start",
                        // borderWidth: 1.5,
                        // backgroundColor: "rgba(255,65,105,0.1)",
                        // borderColor: "rgb(255,65,105)",
                        data: []
                    }
                ]
            },
            {
                label: "Comments",
                value: this.props.numbers.user || 0,
                // percentage: "2.4%",
                // increase: false,
                // decrease: true,
                link :'/comment',
                chartLabels: [null, null, null, null, null, null, null],
                attrs: { md: "4", sm: "6" },
                datasets: [
                    {
                        // label: "Today",
                        // fill: "start",
                        // borderWidth: 1.5,
                        // backgroundColor: "rgb(0,123,255,0.1)",
                        // borderColor: "rgb(0,123,255)",
                        data: []
                    }
                ]
            }
        ]
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle title="Blog Overview" subtitle="Dashboard" className="text-sm-left mb-3" />
                </Row>

                {/* Small Stats Blocks */}
                <Row>
                    {smallStats.map((stats, idx) => (
                        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
                            <Link to={stats.link}>
                            <SmallStats
                                id={`small-stats-${idx}`}
                                variation="1"
                                chartData={stats.datasets}
                                chartLabels={stats.chartLabels}
                                label={stats.label}
                                value={stats.value}
                                percentage={stats.percentage}
                                increase={stats.increase}
                                decrease={stats.decrease}
                            />
                            </Link>
                        </Col>
                    ))}
                </Row>

                <Row>
                    {/* Users Overview */}
                    {/* <Col lg="8" md="12" sm="12" className="mb-4">
                        <UsersOverview />
                    </Col> */}

                    {/* Users by Device */}
                    {/* <Col lg="4" md="6" sm="12" className="mb-4">
                        <UsersByDevice />
                    </Col> */}

                    {/* New Draft */}
                    {/* <Col lg="4" md="6" sm="12" className="mb-4">
                        <NewDraft />
                    </Col> */}

                    {/* Discussions */}
                    {/* <Col lg="5" md="12" sm="12" className="mb-4">
                        <Discussions />
                    </Col> */}

                    {/* Top Referrals */}
                    {/* <Col lg="3" md="12" sm="12" className="mb-4">
                        <TopReferrals />
                    </Col> */}
                </Row>
            </Container>
        );
    }
}

Overview.propTypes = {
    /**
     * The small stats dataset.
     */
    smallStats: PropTypes.array
};

Overview.defaultProps = {

};
const mapStateToProps = (state) => {
    return {
        numbers: state.overview.numbers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNumbers: () => dispatch(getNumbers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Overview);
