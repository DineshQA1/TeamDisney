import axios from "axios";
import { useEffect, useState } from "react";
import Character from "./Character";
import { Container } from "reactstrap";

//const [isLoaded, setIsLoaded] = useState(false);
//const [error, setError] = useState(null);

const Disney = () => {
    const [data, setData] = useState([]);
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

    return (
        <Container>
            <h1>Disney Characters</h1>

            <div>
            
                {data.map((character) => (

                    <Character key={character._id} character={character} />

                ))}

            </div>
        </Container>
    );
};




export default Disney;