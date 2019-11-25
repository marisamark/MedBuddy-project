//container to include news articles with 1.headline and 2.link to article
import React from "react";
// import { useStoreContext } from "../utils/GlobalState";

function Healthtab (props) {

    return (
        <>
        {/* <div className="container">
            <h2 className="text-center mt-4 mb-4">Recent News in Health and Wellness</h2>
            
        </div> */}
        <div className="card-center w-75">
        <div className="card-header mb-4">
            <div className="img-container">
                {props.imageUrl? 
                <img className="img-thumbnail" alt={props.author} src={props.imageUrl}/>
                : <img className="img-fluid" alt="There is no image for this article"></img>
                }
            </div>
            <div className="card-body">
                <a href={props.url}><h3>{props.title}</h3>
                </a>
                <h5>{props.author}</h5>
                <h5>{props.publishedAt}</h5>
                <h5>{props.description}</h5>
                {/* <a href={props.url}>Click to read more:</a> */}
            </div>
        </div>
        </div>
        </>
    )
}

export default Healthtab;
