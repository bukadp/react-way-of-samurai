import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {required, maxLengthCreator} from "../../../utils/validators/validators";

const maxLengthCreator50 = maxLengthCreator(50)

function AddMessageForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>

            <Field component={Textarea}
                   name="newMessageBody"
                   placeholder="Enter text message"
                   validate={[required, maxLengthCreator50]}/>
            <button>Send</button>
        </form>
    )
}

export default reduxForm ({form: "dialogAddMessageForm"}) (AddMessageForm)
