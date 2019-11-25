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
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <h3>{props.publishedAt}</h3>
                <h3>{props.description}</h3>
                <h3>Click to read more: {props.url}</h3>
            </div>
        </div>
        </>
    )
}

export default Healthtab;
