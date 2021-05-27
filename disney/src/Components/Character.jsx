import { Card, CardBody, CardImg, CardText } from "reactstrap";

const Character = (props) => {

    const {character} = props;
    // console.log(character);
    const strippedUrl = character.imageUrl;
    let position = strippedUrl.indexOf(".png");
    console.log("Position", position);
    if(position===-1){
        position = strippedUrl.indexOf(".jpg")
        if(strippedUrl.includes(".jpeg")){
            position = strippedUrl.indexOf(".jpeg")
        }
    }
    const imgUrl = strippedUrl.substring(0, position+4);
    console.log("img", imgUrl);

    // for(let c in strippedUrl){}
    
        
    

    

    return (
        <>
        <Card>
          <CardBody>
          <CardImg top width="100%" src={imgUrl} alt="Card image cap" />
            <CardText><a href={character.sourceUrl}>{character.name}</a></CardText>
            </CardBody>
        </Card>
        </>    
        
    )

}

export default Character;