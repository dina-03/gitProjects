import '../css/App.css';
import React from 'react';
import {getPosts} from '../store/store';
import PostList from './PostList';

export default class App extends React.Component{
  
  state={
    posts: getPosts()
  }

  onIncClickHandler=(id)=>{
    const newPost=[...this.state.posts];
    const index=newPost.findIndex(post=>post.id===id);
    const post={...newPost[index]};
    if(post.like !== undefined){  
      post.like++;
    }else post.like=1
    newPost[index]=post
    this.setState({...this.state, posts: newPost})
  }

  onDecClickHandler=(id)=>{
    const newPost=[...this.state.posts];
    const index=newPost.findIndex(post=>post.id===id);
    const post={...newPost[index]};
    if(post.dislike !== undefined){  
      post.dislike++;
    }else post.dislike=1
    newPost[index]=post
    this.setState({...this.state, posts: newPost})
  }  


  render(){
const newPosts=this.state.posts
console.log(newPosts)
    return (
      <div className="App">
      <PostList posts={newPosts}
                onIncClickHandler={this.onIncClickHandler}
                onDecClickHandler={this.onDecClickHandler}/>
    </div>
    )
  }
}

