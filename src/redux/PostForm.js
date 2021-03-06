import React, { Component } from 'react'

export default class PostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
onChange(e) {
    this.setState({[e.target.name]: e.target.value })
}
onSubmit(e) {
    e.preventDefault()

    const post = {
        title: this.state.title,
        body: this.state.body
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify('post')
    })
    .then(res => res.json())
    .then(data => console.log(data))
    
}

    render() {
        return (
            <div>
               <h3>Add post</h3> 
               <form onSubmit={this.onSubmit}>
                   <div>
                       <label htmlFor="">Title: </label><br/>
                       <input type="text" value={this.state.title} onChange={this.onChange} name="title"/>
                   </div>
                   <div>
                       <label htmlFor="">body</label><br/>
                      <textarea name="body"  value={this.state.body} onChange={this.onChange}></textarea>
                   </div><br/>
                   <button type="submit">Submit</button>
               </form>
            </div>
        )
    }
}
