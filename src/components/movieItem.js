//imports React libiraries and components
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

//start MovieItem class - export used in order to use component elsewhere
export class MovieItem extends React.Component {
    //start render method
    render() {
        //returns div tag content and print to screen 
        //div tag with bootstrap Card - displays JSON data from movie object
        return (
            < div >
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.movie.year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/*link to URL with button to edit movie*/}
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-warning">Edit</Link>
                </Card>
            </div>
        );
    }//end render method
}//end MovieItem class

