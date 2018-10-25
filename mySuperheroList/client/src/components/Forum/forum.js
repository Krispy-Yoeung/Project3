import React, { Fragment, Component } from 'react';
import axios from 'axios'
import FormResults from './forumResult'
import { Link } from 'react-router-dom'
import './forum.css'


class Forum extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        this.getTopics()
    }

    getTopics = () => {
        axios.get("/all").then(res => {
            // console.log(res.data)
            this.setState({ articles: res.data })
            console.log(this.state.articles)
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <Fragment>
                <div className="categories">
                    <ul>
                        <li><Link to="/forum">All</Link></li>
                        <li><Link to="/forum/superhero">Superhero</Link></li>
                        <li><Link to="/forum/villain">Villain</Link></li>
                        <li><Link to="/forum/random">Random</Link></li>


                    </ul>
                </div>
                <div className="jumbotron jumbotron-fluid" id="alltron">
                    <div className="container">
                        <h1 id="allforum"className="display-4 text-center">All topic
                        <p  id="allforum" className="lead text-center">Below are the topics from all categories</p></h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="createNew float-right">
                        {loggedIn ? (
                            <Link to="/newstory" className="btn btn-warning float-right" role="button">Create New Topic</Link>
                        ) : (
                            <Link to="/login" className="btn btn-warning float-right" role="button">Create New Topic</Link>
                        )}
                            </div>
                        
                        <div className="posts col-md-12">
                            <ul>
                                {this.state.articles.map(article => (

                                    <FormResults
                                        key={article._id}
                                        id={article._id}
                                        title={article.title}
                                        author={article.author}
                                        description={article.description}
                                    />

                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Forum;