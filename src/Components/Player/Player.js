
import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
   const{name , salary, image}  = props.players
   const imgStyle = {height: '150px'}
   const handleAddPlayer = props.handleAddPlayer
   
   
  
    return (
        <div>
    {/* Using Bootstrap in react */}
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
      <Card.Title><h5>Name is: {name}</h5></Card.Title>
          <Card.Text>
          <img style={imgStyle} src={image} alt=""/>
          
            <p>Salary is: ${salary}</p>
    </Card.Text>
   <Button variant="warning" onClick={() => handleAddPlayer(props.players)}><FontAwesomeIcon icon={faUserPlus}/> Add player</Button>{' '}
     </Card.Body>
</Card>




      
        </div>
    );
};

export default Player;