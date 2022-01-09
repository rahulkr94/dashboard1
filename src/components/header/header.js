import React, { useState, useEffect, useContext } from 'react';
import $ from 'jquery';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import './header.css';


const Header = () => {
    const history = useHistory();
    const appContext = useContext(AppContext);

    useEffect(() => {
        // $('#sidebar-toggle').on('click', function(){
        //     $('#m-sidebar').toggleClass('sidebar-collapse');
        //     $('#m-body').toggleClass('m-body-expand');
        //   });
        console.log(appContext.emailList);
    }, [])
    
    return  <nav className="navbar fixed-top top-nav-bar " id="top-nav">
    <div className="container-fluid">
        <div className="top-nav-header">
            <div className="jcb">
                <button id="sidebar-toggle" className="btn btn-sm theme-bg px5 cfff aic"><i className="fa fa-bars"></i></button>
                <div className="aic c777">
                    <div className="mr20 p-rel">
                        <i className="fa fa-envelope-o cp"></i>
                        {
                            !_.isEmpty(appContext?.emailList)
                            && appContext.emailList.filter(r => !r.isRead).length > 0
                            && <div className="header-email-count-badge">
                                <div className="bc-clients mail-count-badge">{appContext.emailList.filter(r => !r.isRead).length}</div>
                            </div>
                        }
                    </div>
                    <div className="mr20 cp p-rel">
                        <i className="fa fa-bell-o"></i>
                        <div className="header-email-count-badge">
                            <div className="bc-work mail-count-badge">{"8"}</div>
                        </div>
                    </div>
                    <div className="cp" onClick={() => {
                        history.push("/");
                        appContext.setUserInfo(null);
                    }}>
                        <i className="fa fa-sign-out"></i>
                        <span className="pl5">Log out</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>;
}
 
export default Header;