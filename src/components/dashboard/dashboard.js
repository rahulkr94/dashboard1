import React, { useEffect } from 'react';
import Sidebar from '../sidebar/sidebar';
import MailBox from './MailBox';
import Header from '../header/header';
import $ from 'jquery';
import "./dashboard.scss"


const Dashboard = () => {

    useEffect(() => {
        $('#sidebar-toggle').on('click', function(){
            $('#m-sidebar').toggleClass('sidebar-collapse');
            $('#m-body').toggleClass('m-body-expand');
          });
        // console.log(appContext.emailList);
    }, [])

    return <div className="jcb">
        <Sidebar />
        <div className="main-body-top" id="m-body">
            <Header />
            <div className="main-body">
                <div className="p20 main-body-content">
                    <MailBox />
                </div>
            </div>
        </div>
        
    </div>;
}

export default Dashboard;