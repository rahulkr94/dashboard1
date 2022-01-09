import React, { useEffect } from 'react';
import Sidebar from '../sidebar/sidebar';
import MailBox from './MailBox';
import Header from '../header/header';
import "./dashboard.scss"


const Dashboard = () => {

    return <div className="">
        <Header />
        <Sidebar />
        <div className="main-body" id="m-body">
            <div className="p20 main-body-content">
                <MailBox />
            </div>
        </div>
    </div>;
}

export default Dashboard;