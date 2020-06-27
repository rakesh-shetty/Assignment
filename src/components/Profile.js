import React from 'react'
import { connect } from 'react-redux'
import { GoLocation } from 'react-icons/go';
import { BsBuilding } from 'react-icons/bs';
import { MdMailOutline } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';


const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <div className="profile-pic">
                <img src={props.user.avatar_url} alt="Profile Pic" />
            </div>
            <div className="profile-name less-line-spacing">
                <h2>{props.user.name}</h2>
                <p className="muted-text">{props.user.login}</p>
            </div>
            <h6>{props.user.bio}</h6>
            <div className="row">
                <div className="col-10">
                    <button className="btn follow-btn">Follow</button>
                </div>
                <div className="col-2" style={{ cursor: 'pointer' }}><h4>···</h4></div>
            </div>
            <div className="profile-sub-menus">
                <p className="link"><FiUsers /> <span className="text-bold">{props.user.followers}</span> followers</p>          · <p className="link"><span className="text-bold">{props.user.following}</span> following</p>          · <p className="link"><AiOutlineStar/><span className="text-bold">{props.user.following}</span></p>
            </div>
            <div className="mt-2 less-line-spacing">
                <p>{props.user.company && <><BsBuilding /> {props.user.company}</>}</p>
                <p>{props.user.location && <><GoLocation /> {props.user.location}</>}</p>
                <p>{props.user.email && <><MdMailOutline /> {props.user.email}</>}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)