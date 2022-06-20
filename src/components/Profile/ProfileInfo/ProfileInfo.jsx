import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false);
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type="file"
                                   onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm
                        initialValues={profile}
                        profile={profile}
                        onSubmit={onSubmit}/>
                    : <ProfileData
                        profile={profile}
                        isOwner={isOwner}
                        goToEditMode={()=>{setEditMode(true)}}/>

                }

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

function ProfileData({profile, isOwner, goToEditMode}) {
    return (<div>
        {isOwner &&
            <div>
                <button onClick={goToEditMode}>Edit Mode</button>
            </div>
        }
        <div>
            <b>Nick name:</b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {profile.lookingForAJob && <div>
            <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>)
}

function Contacts({contactTitle, contactValue}) {
    return (
        <div className={s.contact} >
            <i>{contactTitle}:</i> {contactValue}
        </div>
    )

}


export default ProfileInfo;
