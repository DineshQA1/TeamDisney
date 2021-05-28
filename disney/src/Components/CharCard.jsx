import { Card, CardBody, CardImg, CardText, UncontrolledCollapse, Button } from "reactstrap";
const CharCard = ({ character }) => {

    //Image methods
    const strippedUrl = character.imageUrl;
    let position;
    let imgUrl;

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
                <img width="50%" src={imgUrl} alt="Card image cap" />
                <CardText><a href={character.sourceUrl} target="_blank" style={{ textDecoration: "none", color: "black", fontSize: "20px", fontWeight: "bold" }}>{character.name}</a></CardText>
                    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}> Show More Information</Button>
                    <UncontrolledCollapse toggler="#toggler">
                        <CardText>TV Shows: {character.tvShows}</CardText>
                    </UncontrolledCollapse>
            </CardBody>
        </Card>
    )
}
export default CharCard;