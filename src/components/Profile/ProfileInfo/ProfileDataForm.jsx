import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css';
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";

function ProfileDataForm({handleSubmit, profile, error}) {
    return (<form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Nick name:</b>
            {createField("Nick Name", "fullName", Input, [])}
        </div>
        <div>
            <b>Looking for a job:</b>
            {createField("", "lookingForAJob", Input, [], {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills:</b>
            {createField("Professional skills", "lookingForAJobDescription", Textarea, [])}
        </div>
        <div>
            <b>About me:</b>
            {createField("About Me", "aboutMe", Textarea, [])}
        </div>
        <div>
            <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <i>{key}:</i>
                {createField(key, "contacts." + key, Input, [])}
            </div>
        })}
        </div>
    </form>)
}

const ProfileDataFormReduxForm = reduxForm({form: 'profile-edit'})(ProfileDataForm)

export default ProfileDataFormReduxForm
