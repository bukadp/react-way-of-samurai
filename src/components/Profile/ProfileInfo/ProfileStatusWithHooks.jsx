import React, {useEffect, useState} from 'react';
/*import s from './ProfileInfo.module.css';*/

function ProfileStatusWithHooks(props) {
 const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus ( e.currentTarget.value);
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={deactivateEditMode}
                           onChange={onStatusChange}
                           value={status}/>
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;
