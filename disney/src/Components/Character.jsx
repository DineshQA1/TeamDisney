
import CharCard from "./CharCard";

const Character = (props) => {

    const { data, query } = props;

    //searchBar methods
    const filterQuery = () => (data) => data.name.toLowerCase().includes(query.toLowerCase());
    let filteredList = data.filter(filterQuery());
    

    //Return body
    return (
        <>
         {
            filteredList.map((char)=>(
            <CharCard key={char.id} character={char}/>
            ))
        } 
        </>

    )

}

export default Character;