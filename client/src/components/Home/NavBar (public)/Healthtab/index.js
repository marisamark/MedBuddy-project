//container to include news articles with 1.headline and 2.link to article
import React from "react";
// import { useStoreContext } from "../utils/GlobalState";

function Healthtab (props) {

    return (
        <>
        {/* <div className="container">
            <h2 className="text-center mt-4 mb-4">Recent News in Health and Wellness</h2>
        </div> */}
        <div id="healthcards" className="card mb-4">
            <div className="card-header">
                {props.imageUrl? 
                <img className="img-thumbnail" alt={props.author} src={props.imageUrl}/>
                : <img className="img-fluid img-thumbnail" alt="There is no image for this article"></img>
                }
            </div>
            <div className="card-body">
                <a className="text-color" href={props.url}><h4>{props.title}</h4>
                </a>
                <p label="summary">{props.description}</p>
                <p>{props.author}</p>
                <p>{props.publishedAt}</p>
                
            </div>
        </div>
        </>
    )
}

export default Healthtab;
