import axios from "axios";
import { useEffect, useState } from "react";
import Character from "./Character";
import { Container } from "reactstrap";
import SearchBar from "./SearchBar";

//const [isLoaded, setIsLoaded] = useState(false);
//const [error, setError] = useState(null);

const Disney = () => {
    const [data, setData] = useState([]);
    const [q, setQ] = useState("");

    const qHandler = (e) => {
        setQ(e.target.value);
    }

    useEffect(() => {
        setTimeout(() => {


            axios
                .get("https://api.disneyapi.dev/characters")
                .then((response) => {
                    //setIsLoaded(true);  
                    setData(response.data.data);
                    console.log(response);

                })
                .catch((error) => {
                    //setError(error);
                    //setIsLoaded(true);
                    console.error(error);

                });
        }, 1000);
    }, []);
    console.log(q);


    return (
        <Container>
            <h1>Disney Characters</h1>
            <SearchBar query={q} queryFunction={qHandler} />

            <div>


                <Character data={data} query={q}/>



            </div>
        </Container>
    );
};




export default Disney;