//container to include news articles with 1.headline and 2.link to article
import React from "react";
// import { useStoreContext } from "../utils/GlobalState";

function Healthtab (props) {

    return (
        <>
        {/* <div className="container">
            <h2 className="text-center mt-4 mb-4">Recent News in Health and Wellness</h2>
            
        </div> */}
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.urlToImage}/>
            </div>
            <div className="content">
                <h3>{props.title}</h3>
                <h5>{props.author}</h5>
                <h5>{props.publishedAt}</h5>
                <h5>{props.description}</h5>
                <h5>Click to read more: {props.url}</h5>
            </div>
        </div>
        </>
    )
}

export default Healthtab;
