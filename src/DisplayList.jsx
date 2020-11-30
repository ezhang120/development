import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FilteredList from './FilteredList';
import './index.css';

export default class DisplayList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            agg: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    }

    addClick = (item) => {
        
        let agg = this.state.agg
        // console.log(this.state.agg)
        agg[item.key] = agg[item.key] + 1
        this.setState({
            agg:agg
        })
        // console.log(this.state.agg[key])
        item.agg = this.state.agg[item.key]

    }
    
    removeClick = (item) => {
        // {console.log(key)}
        let agg = this.state.agg
        if (agg[item.key] > 0){
            agg[item.key] = agg[item.key] - 1
            this.setState({
                agg:agg
            })
            item.agg =  this.state.agg[item.key]
        }
        // console.log(this.state.agg[key])
        
    }


    render(){
        // const half = this.props.list.length/2
        // const first = this.props.list.slice(0, half)
        // const last = this.props.list.slice(half)
        return(
                <div class="main-wrapper">
                    {this.props.list.map((item) =>
                        <div class="shelf">
                            {/* {console.log("ITEM")}
                            {console.log(item)} */}
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Text>
                                        Agg: {item.agg}<br></br>
                                        Size: {item.size} <br></br>
                                        Color: {item.color}<br></br>
                                        Quantity: {item.num}
                                    </Card.Text>
                                    <Button onClick={() =>{this.addClick(item); this.props.calculateTotal();}} variant="primary">Add to Cart</Button> <br></br>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                    <Button onClick = {() => {this.removeClick(item); this.props.calculateTotal();}} variant="primary">Remove from Cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </div>
            
            
            
        )
    }
}