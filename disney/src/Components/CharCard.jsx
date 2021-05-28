import { Card, CardBody, CardImg, CardText, UncontrolledCollapse, Button } from "reactstrap";
const CharCard = ({ character }) => {

    //Image methods
    const strippedUrl = character.imageUrl;
    let position;
    let imgUrl;

    var idIdent = "toggle" + character._id;
    var idToggle = "#toggle" + character._id;

    if (character.imageUrl.includes(".png")) {
        position = strippedUrl.indexOf(".png");
        imgUrl = character.imageUrl.substring(0, position + 4);
    }
    else if (character.imageUrl.includes(".jpeg")) {
        position = strippedUrl.indexOf(".jpeg");
        imgUrl = character.imageUrl.substring(0, position + 5);
    }
    else if (character.imageUrl.includes(".jpg")) {
        position = strippedUrl.indexOf(".jpg");
        imgUrl = character.imageUrl.substring(0, position + 4);
    }
    return (
        <Card style={{ backgroundColor: "lightCyan", marginBottom: "1%", marginTop: "1%", marginRight: "1%", marginLeft: "1%" }}>
            <CardBody>
                <img width="100" height="100" src={imgUrl} alt="Card image cap" />
                <CardText><a href={character.sourceUrl} target="_blank" style={{ textDecoration: "none", color: "black", fontSize: "20px", fontWeight: "bold" }}>{character.name}</a></CardText>
                <Button buttoncolor="primary" id={idIdent} style={{ marginBottom: '1rem' }}> More Info</Button>
                <UncontrolledCollapse toggler={idToggle}>
                    {character.tvShows.length > 0 ? <CardText>TV Shows: {character.tvShows} </CardText> : null}
                    {character.films.length > 0 ? <CardText>Films: {character.films} </CardText> : null}
                </UncontrolledCollapse>
            </CardBody>
        </Card>
    )
}
export default CharCard;