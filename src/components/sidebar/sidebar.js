import React, { useState, useEffect } from 'react';

const Sidebar = () => {
    return <div className="main-sidebar" id="m-sidebar">
        <nav className="navbar p-0" role="navigation">
            <div className="navbar-header pl15 mt20">
                <div className="brand-wrapper">
                    RIRM
                </div>
            </div>
            <div className="side-menu-container">
                <ul className="nav navbar-nav">
                    <li><a href="#"><i className="fa fa-th-large"></i> Dashboards</a></li>
                    <li><a href="#"><i className="fa fa-diamond"></i> Layuot</a></li>
                    <li><a href="#"><i className="fa fa-bar-chart"></i> Graphs</a></li>
                    <li className="main-list" id="mailbox">
                        <a data-toggle="collapse" href="#mailbox-dropdown" className="active">
                            <i className="fa fa-envelope"></i> Mailbox
                            <span className="caret"></span>
                        </a>
                        <div id="mailbox-dropdown" className=" collapse pl30">
                            <div className="">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="#">Inbox</a></li>
                                    <li><a href="#">Email view</a></li>
                                    <li><a href="#">Compose email</a></li>
                                    <li><a href="#">Email templates</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><a href="#"><i className="fa fa-pie-chart"></i> Metrics</a></li>
                    <li><a href="#"><i className="fa fa-filter"></i> Widgets</a></li>
                    <li><a href="#"><i className="fa fa-edit"></i> Forms</a></li>
                    <li><a href="#"><i className="fa fa-desktop"></i> App Views</a></li>
                </ul>
            </div>
        </nav>
    </div>;
}

export default Sidebar;