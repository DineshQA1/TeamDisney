import { Card, CardBody, CardImg, CardText } from "reactstrap";

const Character = (props) => {

    const {character} = props;
    // console.log(character);
    const strippedUrl = character.imageUrl;
    let position;
    let imgUrl;
    console.log("Position", position);
    // if(position===-1){
    //     position = strippedUrl.indexOf(".jpg")
    //     if(strippedUrl.includes(".jpeg")){
    //         position = strippedUrl.indexOf(".jpeg") 
    //     }
    // }
    if (character.imageUrl.includes(".png")){
        position = strippedUrl.indexOf(".png");
        imgUrl = character.imageUrl.substring(0, position+4);
    }
    else if (character.imageUrl.includes(".jpeg")){
        position = strippedUrl.indexOf(".jpeg");
        imgUrl = character.imageUrl.substring(0, position+5);
    }
    else if (character.imageUrl.includes(".jpg")){
        position = strippedUrl.indexOf(".jpg");
        imgUrl = character.imageUrl.substring(0, position+4);
    }
    

    return (
        <>
        <Card>
          <CardBody>
          <CardImg top width="20%" src={imgUrl} alt="Card image cap" />
            <CardText><a href={character.sourceUrl}>{character.name}</a></CardText>
            </CardBody>
        </Card>
        </>    
        
    )

}

export default Character;