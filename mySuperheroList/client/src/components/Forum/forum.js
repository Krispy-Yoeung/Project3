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
                        <Link to="/forum"><li id="subcat">All</li></Link>
                        <Link to="/forum/superhero"><li id="subcat">Superhero</li></Link>
                        <Link to="/forum/villain"><li id="subcat">Villain</li></Link>
                        <Link to="/forum/random"><li id="subcat">Random</li></Link>


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