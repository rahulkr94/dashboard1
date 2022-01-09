import React, { useState, useEffect, useContext } from 'react';
import _ from 'lodash';
import { getClorByType } from '../../service/CommonServices';
import { AppContext } from '../../context/AppContext';

const MailBox = () => {
    const { emailList, setEmailList } = useContext(AppContext);
    const [inboxList, setInboxList] = useState(emailList.map(e => ({ ...e, "isSelect": false })));
    const [tmpemailList, setTempemailList] = useState(emailList.map(e => ({ ...e, "isSelect": false })));
    const [searchText, setSearchText] = useState("");

    const handleSelectEmail = (idx, val) => {
        try {
            let tmpArr = [...inboxList];
            let tempObj = {};
            tempObj = tmpArr.find((r, i) => i === idx);
            if (tempObj) {
                tempObj.isSelect = val;
                tmpArr[idx] = tempObj;
                setInboxList(tmpArr);
            }
        } catch (error) {
            console.error("Error occurred while handleSelectEmail", error);
        }
    }

    const deleteEmail = () => {
        try {
            let tmpArray = inboxList.filter(r => !r.isSelect)
            setInboxList(tmpArray);
            setTempemailList(tmpArray);
            setEmailList(tmpArray)
        } catch (error) {
            console.error("Error occurred while deleteEmail--", error);
        }
    }

    const viewEmail = (i, val = true) => {
        try {
            let tmpArray = inboxList.map((r, idx) => {
                if (i === idx && !r.isRead) {
                    return ({ ...r, "isRead": val })
                } else {
                    return r;
                }
            });
            setInboxList(tmpArray);
            setTempemailList(tmpArray);
            setEmailList(tmpArray)
        } catch (error) {
            console.error("Error occurred while deleteEmail--", error);
        }
    }

    const handleSearch = () => {
        try {
            let filteredList = tmpemailList.filter(res => Object.values(res).some(r => typeof r === "string" && r.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())));
            setInboxList(searchText ? filteredList : tmpemailList);
        } catch (error) {
            console.error("Error occurred while searching", error);
        }
    }

    useEffect(() => {
        handleSearch();
    }, [searchText])

    return <>
        <div className="row pb20">
            <div className="col-md-3">
                <div className="email-body-menu">
                    <div className="mb20 py20">
                        <button type="button" className="btn btn-block theme-bg cfff" data-toggle="modal" data-target="#composeEmailModal">Compose Mail</button>
                    </div>
                    <div className="email-folders">
                        <div className="f13 c666">FOLDERS</div>
                        <ul>
                            <li>
                                <a href="#">
                                    <div className="aic jcb">
                                        <div>
                                            <i className="fa fa-envelope-open-o"></i>
                                            <span className="pl10">Inbox</span>
                                        </div>
                                        <div>
                                            {
                                                !_.isEmpty(emailList)
                                                && emailList.filter(r => !r.isRead).length > 0
                                                && <div className="bc-clients mail-count-badge">{emailList.filter(r => !r.isRead).length}</div>
                                            }
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="aic jcb">
                                        <div>
                                            <i className="fa fa-envelope-o"></i>
                                            <span className="pl10">Send Mail</span>
                                        </div>
                                        <div></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="aic jcb">
                                        <div>
                                            <i className="fa fa-certificate"></i>
                                            <span className="pl10">Important</span>
                                        </div>
                                        <div></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="aic jcb">
                                        <div>
                                            <i className="fa fa-file-text-o"></i>
                                            <span className="pl10">Drafts</span>
                                        </div>
                                        <div><div className="bc-documents mail-count-badge">2</div></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="aic jcb">
                                        <div>
                                            <i className="fa fa-trash-o"></i>
                                            <span className="pl10">Trash</span>
                                        </div>
                                        <div></div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="email-category">
                        <div className="f13 c666">CATEGORIES</div>
                        <div className="f13 c666 mt5">
                            <div className="aic mb5"><div className="category-circle bc-work"></div><span className="pl10">Work</span></div>
                            <div className="aic mb5"><div className="category-circle bc-documents"></div><span className="pl10">Documents</span></div>
                            <div className="aic mb5"><div className="category-circle bc-social"></div><span className="pl10">Social</span></div>
                            <div className="aic mb5"><div className="category-circle bc-advertisement"></div><span className="pl10">Advertising</span></div>
                            <div className="aic mb5"><div className="category-circle bc-clients"></div><span className="pl10">Clients</span></div>
                        </div>
                    </div>
                    <div className="email-labels mt20">
                        <div className="f13 c666">LABELS</div>
                        <div className="f12 c666 fwrap mt5">
                            <div className="b-radius-4 aic jcc b-ddd px5 bg-white mr5 mb5"><i className="fa fa-tag"></i><span className="pl5"> Family</span></div>
                            <div className="b-radius-4 aic jcc b-ddd px5 bg-white mr5 mb5"><i className="fa fa-tag"></i><span className="pl5"> Work</span></div>
                            <div className="b-radius-4 aic jcc b-ddd px5 bg-white mr5 mb5"><i className="fa fa-tag"></i><span className="pl5"> Home</span></div>
                            <div className="b-radius-4 aic jcc b-ddd px5 bg-white mr5 mb5"><i className="fa fa-tag"></i><span className="pl5"> Children</span></div>
                            <div className="b-radius-4 aic jcc b-ddd px5 bg-white mr5 mb5"><i className="fa fa-tag"></i><span className="pl5"> Holidays</span></div>
                            <div className="b-radius-4 aic jcc b-ddd px5 bg-white mr5 mb5"><i className="fa fa-tag"></i><span className="pl5"> Music</span></div>
                            <div className="b-radius-4 aic jcc b-ddd px5 bg-white mr5 mb5"><i className="fa fa-tag"></i><span className="pl5"> Photography</span></div>
                            <div className="b-radius-4 aic jcc b-ddd px5 bg-white mr5 mb5"><i className="fa fa-tag"></i><span className="pl5"> Film</span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <div className="b-ddd bc-fff b-radius-2">
                    <div className="px15 pt30">
                        <div className="aic jcb pb20">
                            <div className="f24">{`Inbox ${!_.isEmpty(emailList) && emailList.filter(r => !r.isRead).length > 0 ? `(${emailList.filter(r => !r.isRead).length})` : ""}`}</div>
                            <div>
                                <div className="input-group mb-3">
                                    <input
                                        onChange={(e) => setSearchText(e.target.value)}
                                        type="text"
                                        className="form-control form-control-sm"
                                        placeholder="Search email"
                                        aria-label="Search email"
                                        aria-describedby="basic-addon2"
                                    />
                                    <div className="input-group-append cp">
                                        <span className="input-group-text form-control-sm f14 theme-bg cfff" id="basic-addon2">Search</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aic jcb pb20 f12">
                            <div className="jcb aic">
                                <div className="b-ddd et-action-box mr5"><i className="fa fa-refresh" aria-hidden="true"></i><span className="pl5">Refresh</span></div>
                                <div className="b-ddd et-action-box mr5"><i className="fa fa-eye" aria-hidden="true"></i></div>
                                <div className="b-ddd et-action-box mr5"><i className="fa fa-exclamation" aria-hidden="true"></i></div>
                                <div
                                    className={`b-ddd et-action-box mr5 ${inboxList && inboxList.some(r => r.isSelect) ? "c333" : ""}`}
                                    onClick={() => deleteEmail()}
                                ><i className="fa fa-trash-o"></i></div>
                            </div>
                            <div className="jcb aic">
                                <div className="b-ddd et-action-box brr-0 br-0"><i className="fa fa-arrow-left"></i></div>
                                <div className="b-ddd et-action-box brl-0"><i className="fa fa-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-stripped email-table">
                        <tbody>
                            {
                                !_.isEmpty(inboxList)
                                && inboxList.map((email, i) => <tr
                                    key={i}
                                    className={`cp ${email.isRead ? "c777" : "bc-f9 fw600"}`}
                                    onClick={() => viewEmail(i)}
                                >
                                    <td>
                                        <input
                                            type="checkbox"
                                            className=""
                                            checked={email.isSelect}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleSelectEmail(i, e.target.checked)
                                            }}
                                        />
                                    </td>
                                    <td>{email.title}</td>
                                    <td><div className={`table-label ${getClorByType(email.emailType)} b-radius-4 aic jcc cfff f12`}>{email.emailType}</div></td>
                                    <td>{email.subject}</td>
                                    <td></td>
                                    <td>{email.receivedOn}</td>
                                </tr>)
                            }
                            {
                                _.isEmpty(inboxList) && <tr>
                                    <td colSpan="6" className="text-center c999 py20">No records found.</td>
                                </tr>
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal fade" id="composeEmailModal" tabindex="-1" role="dialog" aria-labelledby="composeEmailModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Compose Email</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className="form-control">
                            <label>To</label>
                            <input placeholder="" className="form-control form-control-sm"/>
                        </div>
                        <div className="form-control">
                            <label>CC</label>
                            <input placeholder="" className="form-control form-control-sm"/>
                        </div>
                        <div className="form-control">
                            <label>Subjuct</label>
                            <input placeholder="" className="form-control form-control-sm"/>
                        </div>
                        <div className="form-control">
                            <input type="textarea" placeholder="" className="form-control form-control-sm"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default MailBox;