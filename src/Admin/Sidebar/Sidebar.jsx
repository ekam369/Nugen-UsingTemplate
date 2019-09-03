import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Sidebar extends Component {

    routeComponents = (e) => {
            console.log(e)
        return(
            <Link to="/"></Link>
        )
    }

    render() { 
        return (  
            <div id="sidebar" className="nav-collapse">
                <div className="leftside-navigation">
                    <ul className="sidebar-menu" id="nav-accordion">
                    <li className="sub-menu">
                        <a href="index.html">
                            <span style={{fontWeight:"bold"}}>Main Apps</span>
                        </a>
                        <ul className="sub">
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-dashboard"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-calendar"></i>
                                    <span>Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-rss"></i>
                                    <span>News Feed</span>
                                </a>
                            </li>
                            <li>
                                <Link className="route-link" to="/expenditure">
                                    <i className="fa fa-rupee"></i>
                                    <span onClick={this.routeComponents} name="expenditure">Expenditures</span>
                                </Link>
                            </li>
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-print"></i>
                                    <span>Invoices</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                        
                    <li className="sub-menu">
                        <a href="index.html">
                            <span style={{fontWeight:"bold"}}>Student Details</span>
                        </a>
                        <ul className="sub">
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-user"></i>
                                    <span>Admissins</span>
                                </a>
                            </li>
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-money"></i>
                                    <span>Installments</span>
                                </a>
                            </li>
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-users"></i>
                                    <span>Batches</span>
                                </a>
                            </li>
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-check-square-o"></i>
                                    <span>Attendance</span>
                                </a>
                            </li>
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-tasks"></i>
                                    <span>Courses</span>
                                </a>
                            </li>
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-book"></i>
                                    <span>Assignments</span>
                                </a>
                            </li>
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-edit"></i>
                                    <span>Today's Task</span>
                                </a>
                            </li>
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-bookmark"></i>
                                    <span>Topics</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="sub-menu">
                        <a href="index.html">
                            <span style={{fontWeight:"bold"}}>Account</span>
                        </a>
                        <ul className="sub">
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-th-list"></i>
                                    <span>Account Details</span>
                                </a>
                            </li>
                            <li>
                                <a href="typography.html">
                                    <i className="fa fa-key"></i>
                                    <span>Account Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    </ul>            
                </div>
            </div>
        );
    }
}
 
export default Sidebar;