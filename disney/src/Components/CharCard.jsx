import { Card, CardBody, CardImg, CardText } from "reactstrap";
const CharCard = ({character}) => {

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
        <Card>
            <CardBody>
                <img width="100" src={imgUrl} alt="Card image cap" />
                <CardText><a href={character.sourceUrl}>{character.name}</a></CardText>
            </CardBody>
        </Card>
    )
}
export default CharCard;