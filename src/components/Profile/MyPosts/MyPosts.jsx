import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLengthCreator10 = maxLengthCreator(10)

function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText"
                       component={Textarea}
                       placeholder='your message'
                       validate={[required, maxLengthCreator10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)


const MyPosts = React.memo( props => {

    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});


export default MyPosts;
