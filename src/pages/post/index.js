import React, {Component} from 'react';
import api from '../../services/api'
import './styles.css';

export default class Post extends Component{
    state = { 
        post: {},
        post_content: null,
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        const response =  await api.get(`/wp-json/wp/v2/posts/${id}`)
        //await console.log(response.data);
        await this.setState({post:response.data})
        await console.log(this.state.post.content.rendered);
        await this.setState({post_content:this.state.post.content.rendered})
    }

    render() {
        var {post_content} = this.state;
        return (
            <div className='container'>
                <div className="post-info">
                   <div dangerouslySetInnerHTML={{__html: post_content}}></div>
                </div>,
                <a href="/" className="voltar">Voltar</a>
            </div>
            )
        
       }
}


/*

 <h1>{post.title.rendered}</h1>
                    <p>{post.content.rendered}</p>
*/