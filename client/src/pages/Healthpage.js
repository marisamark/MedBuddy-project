import React, {useEffect} from "react";
import Healthtab from "../components/Home/NavBar (public)/Healthtab/index";
import NavBeforeLogin from "../components/Home/NavBar (public)/index";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function Health() {

    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        dispatch({ type: 'get_articles'});
        API.getNews().then(data => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <>
       <NavBeforeLogin/>
       <div className="container">
            <h2 className="text-center mt-4 mb-4">Recent News in Health and Wellness</h2> 
        <Healthtab

        />
        </div>
        </>
    )
}

export default Health;