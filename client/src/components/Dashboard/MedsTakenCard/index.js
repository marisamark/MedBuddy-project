import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

function MedTakenCard(){
    return(
        
       
        <Card style={{ width: '18rem' ,'margin-left': '140px' }}>
        <Card.Body>
          
          <Card.Text>
          
                <h2>Name of Drug : </h2>
          
          </Card.Text>
      
        </Card.Body>
      </Card>
          
    

    )
}

export default MedTakenCard;