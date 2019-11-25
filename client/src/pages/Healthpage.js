import React, { useEffect} from "react";
import Healthtab from "../components/Home/NavBar (public)/Healthtab/index";
import NavBeforeLogin from "../components/Home/NavBar (public)/index";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import {ADD_ARTICLES} from "../utils/actions";


function Health() {

    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        API.getNews().then(data => {
            // console.log(data);
            let articles = data.data.articles
            // console.log(articles)
            dispatch({ type: ADD_ARTICLES, articles });
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    console.log('STATE', state);

    return (
        <>
       <NavBeforeLogin/>
       <div className="container">
            <h2 className="text-center mt-4 mb-4">Recent News in Health and Wellness</h2> 
        {state.headline.map(headline =>
        <Healthtab
        title={headline.title}
        author={headline.author}
        publishedAt={headline.publishedAt}
        description={headline.description}
        url={headline.url}
        imageUrl={headline.urlToImage}
        />
        )} 
        </div>
        </>
    )
}

export default Health;