//container to include news articles with 1.headline and 2.link to article
import React from "react";
// import { useStoreContext } from "../utils/GlobalState";

function Healthtab (props) {

    return (
        <>
        {/* <div className="container">
            <h2 className="text-center mt-4 mb-4">Recent News in Health and Wellness</h2>
        </div> */}
        <div className="card mb-4">
            <div className="card-header">
                {props.imageUrl? 
                <img className="img-thumbnail" alt={props.author} src={props.imageUrl}/>
                : <img className="img-thumbnail" alt="There is no image for this article"></img>
                }
            </div>
            <div className="card-body">
                <a href={props.url}><h3>{props.title}</h3>
                </a>
                <h5>{props.author}</h5>
                <h5>{props.publishedAt}</h5>
                <h5>Summary: {props.description}</h5>
            </div>
        </div>
        </>
    )
}

export default Healthtab;
