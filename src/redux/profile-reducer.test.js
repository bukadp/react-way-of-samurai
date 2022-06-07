import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from 'react';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
};

it('posts length should be 5', () => {
    const action = addPostActionCreator("newPostText buka")
    const newState = profileReducer(state, action)

    expect (newState.posts.length).toBe(5)
});

it('message of new post should be correct', () => {

    const action = addPostActionCreator("newPostText buka")
    const newState = profileReducer(state, action)

    expect (newState.posts[4].message).toBe("newPostText buka")
});

it('length after deleted should be decrement', () => {

    const action = deletePost(1)
    const newState = profileReducer(state, action)

    expect (newState.posts.length).toBe(3)
});

it(`after deleting length shouldn't be decrement uf id incorrect`, () => {

    const action = deletePost(1000)
    const newState = profileReducer(state, action)

    expect (newState.posts.length).toBe(4)
});
