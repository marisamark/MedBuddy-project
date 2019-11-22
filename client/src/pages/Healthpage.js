import React, {useEffect} from "react";
import Healthtab from "../components/Home/NavBar (public)/Healthtab/index";
import NavBeforeLogin from "../components/Home/NavBar (public)/index";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function Health() {

    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        API.getNews().then(results => {
            console.log(results);
        });
    }, []);

    return (
        <>
       <NavBeforeLogin/>
       {/* {results.articles.map(results => */}
        <Healthtab
        // title={results.articles}
        />
        {/* // )} */}

        </>
    )
}

export default Health;