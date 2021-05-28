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
        <Container align="center" style={{ fontFamily: "Goudy Old Style,Garamond,Big Caslon,Times New Roman,serif" }}>
            <div style={{ backgroundColor: "BurlyWood" }}>
                <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>Disney Characters</h1>
                <img src="http://assets.stickpng.com/images/58428d79a6515b1e0ad75ab2.png" alt="Disney Logo" style={{ maxWidth: "150px", filter: "invert(1)" }} />
            </div>
            <div style={{marginTop:"10px", marginBottom:"10px", fontSize:"30px", fontWeight:"bold"}}>
                <SearchBar query={q} queryFunction={qHandler} />
            </div>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gridTemplateRows:"auto", marginTop:"10px", marginBottom:"10px"}}>
                <Character data={data} query={q} />
            </div>
        </Container>
    );
};




export default Disney;