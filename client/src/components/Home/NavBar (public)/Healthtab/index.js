//container to include news articles with 1.headline and 2.link to article
import React from "react";
import { FETCHING_ARTICLES } from "../../../../utils/actions";
// import { useStoreContext } from "../utils/GlobalState";

const Healthtab = ({articles, articlesStatus}) => {

    if (articlesStatus.type === FETCHING_ARTICLES) {
    return(
        <div>
            Still searching for articles!
        </div>
        )
    }

    return (
        <>
        {/* <div className="container">
            <h2 className="text-center mt-4 mb-4">Recent News in Health and Wellness</h2>
            
        </div> */}
        {articles.map(articles)}
        <div className="card">
            <div className="img-container">
                <img alt={articles.name} src={articles.urlToImage}/>
            </div>
            <div className="content">
                <h2>{articles.title}</h2>
                <h3>{articles.author}</h3>
                <h3>{articles.publishedAt}</h3>
                <h3>{articles.description}</h3>
                <h3>Click to read more: {articles.url}</h3>
            </div>
        </div>
        </>
    )
}

export default Healthtab;
