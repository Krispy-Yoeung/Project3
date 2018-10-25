import React, { Fragment, Component } from 'react';
import axios from 'axios';
import FormResults from '../forumResult'
import {Link} from 'react-router-dom'
import "./style.css"


class Random extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        this.getRandom()
    }

    getRandom = () => {
        axios.get("/random").then(res => {
            this.setState({ articles: res.data })
        })
        console.log(this.state.articles)
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
                <div className="jumbotron jumbotron-fluid" id="randomtron">
                    <div className="container">
                        <h1 id="allforum" className="display-4 text-center">Random Topics
                        <p id="allforum" className="lead text-center">General interest topics that don't fall into one of the sub-categories</p>
                        </h1>
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

export default Random;