import { Card, CardBody, CardImg, CardText } from "reactstrap";

const Character = (props) => {

    const {character} = props;
    console.log(character);
    

    return (
        <>
        <Card>
          <CardBody>
          <CardImg top width="20%" src={character.imageUrl} alt="Card image cap" />
            <CardText><a href={character.sourceUrl}>{character.name}</a></CardText>
            </CardBody>
        </Card>
        </>    
        
    )

}

export default Character;