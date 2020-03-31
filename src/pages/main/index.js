import React, {Component} from 'react'
import api from '../../services/api'
import './styles.css';
import {Link} from 'react-router-dom'

 export default class Main extends Component { 
   /* estado da classe, do componente*/
    state = {
        posts : [],
    }
    

    /* Ao carregar o componente*/
    componentDidMount() {
        this.loadProducts()
    }
    

    /* funcao dentro da classe nao precisa da palavra function*/
    loadProducts = async () =>{
        const response = await api.get('/wp-json/wp/v2/posts')
        // console.log(response.data)
        this.setState({posts: response.data})
        console.log(this.state.posts[0].id);
        //console.log(this.state.posts[0].excerpt);
    }


    /* renderiza a classe*/
    render () {
        return( 
            <div className="product-list" >

               {this.state.posts.map(post => (
                      
                  <article key={post.id}>        
                        <strong dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                        <span dangerouslySetInnerHTML={{__html : post.excerpt.rendered}} />
                        <Link to={`posts/${post.id}`}>Acessar</Link>
                   </article>
               ))}
               
            </div>
        )
    }
}