import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FilteredList from './FilteredList';
import './index.css';

export default class DisplayList extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
                <div class="main-wrapper">
                    {this.props.list.map((item) =>
                        <div class="shelf">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Text>
                                        Size: {item.size} <br></br>
                                        Color: {item.color}<br></br>
                                        Quantity: {item.num}
                                    </Card.Text>
                                    <Button onClick={() =>{this.props.addClick(item); this.props.calculateTotal();}} variant="primary">Add to Cart</Button> <br></br>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                    <Button onClick = {() => {this.props.removeClick(item); this.props.calculateTotal();}} variant="primary">Remove from Cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </div>
            
            
            
        )
    }
}