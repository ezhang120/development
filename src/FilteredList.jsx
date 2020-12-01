import React from "react";
import DisplayList from "./DisplayList";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css';

/*
*   Filtered List renders the filtering options and aggregator 
*   This class handles filtering and sorting the list items and adding them to the aggregator
*/
export default class FilteredList extends React.Component{

    constructor(props){
        super(props);

        /*
        *   The states are: 
        *   qty: total number of items in the aggregator
        *   agg: the total aggregated quantity for each item
        *   sorted: a state that is altered 
        *   size: the size to filter by
        *   color: the color to filter by
        */
        this.state = {
            qty: 0,
            agg: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            sorted: [
                { key: 0, agg: 0, img: "https://imgprd19.hobbylobby.com/8/af/53/8af53111e4081aabf5cd6046d0cf8ab74fa6b82c/350Wx350H-506485-0120-px.jpg", size: "Small", color: "Purple", num: 30},
                { key: 1, agg: 0, img: "https://ilovecheer.com/wp-content/uploads/2018/01/LVCPMS0066-1.png", size: "Large", color: "Orange", num: 1},
                { key: 2, agg: 0, img: "https://cdn.shopify.com/s/files/1/1169/5498/products/troll-pom-pom-color-purple-paradise-fibers_600x.png?v=1603221545", size: "Large", color: "Purple", num: 1},
                { key: 3, agg: 0, img: "https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_IMAGE_400/blue-tinsel-pom-poms~13834764", size: "Small", color: "Blue", num: 25},
                { key: 4, agg: 0, img: "https://www.beadsdirect.co.uk/storage/app/uploads/public/d46/355/ffd/thumb__1000_1000_0_0_crop.jpg", size: "Large", color: "Purple", num: 2},
                { key: 5, agg: 0, img: "https://images-na.ssl-images-amazon.com/images/I/81znp8MKk5L._AC_SX679_.jpg", size: "Medium", color: "Blue", num: 12},
                { key: 6, agg: 0, img: "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/466593", size: "Medium", color: "Purple", num: 3},
                { key: 7, agg: 0, img: "https://imgprd19.hobbylobby.com/f/44/0d/f440d2e5b88c46649fac5c18d2eac6c167c9ff1d/350Wx350H-392720-0120-px.jpg", size: "Small", color: "Orange", num: 40},
                { key: 8, agg: 0, img: "https://i.ebayimg.com/images/g/kQ4AAOSwEDtbdo-Z/s-l300.jpg", size: "Medium", color: "Orange", num: 7},
                { key: 9, agg: 0, img: "https://www.beadsdirect.co.uk/storage/app/uploads/public/52a/9f6/44d/thumb__1000_1000_0_0_crop.jpg", size: "Large", color: "Blue", num: 2},
                { key: 10, agg: 0, img: "https://cdn-fsly.yottaa.net/551561a7312e580499000a44/www.joann.com/v~4b.ad/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwfba237fa/images/hi-res/alt/16650780ALT1.jpg?sw=556&sh=680&sm=fit&yocs=5t_5G_5E_", size: "Small", color: "Orange", num: 15},
                { key: 11, agg: 0, img: "https://images-na.ssl-images-amazon.com/images/I/81aptnwdiuL._AC_SX679_.jpg", size: "Medium", color: "Purple", num: 10}
               ],
            size: "All",
            color: "All"
        }
    }

    /*
    *   This function sorts the list items by ascending or descending quantity.
    *   if the click event is Default, then we revert the order to the original, done easily by setting the sorted state to a constant
    *   if the click event is Low to High, then we sort the items in ascending order using the sort function and set the sorted state to this.
    *   if the click event is High to Low, then we sort the items in descending order using the sort function and set the sorted state to this.
    */
    sortByNum = (event) => {
        if(event === "Default"){
            const original= [
                { key: 0, agg: 0, img: "https://imgprd19.hobbylobby.com/8/af/53/8af53111e4081aabf5cd6046d0cf8ab74fa6b82c/350Wx350H-506485-0120-px.jpg", size: "Small", color: "Purple", num: 30},
                { key: 1, agg: 0, img: "https://ilovecheer.com/wp-content/uploads/2018/01/LVCPMS0066-1.png", size: "Large", color: "Orange", num: 1},
                { key: 2, agg: 0, img: "https://cdn.shopify.com/s/files/1/1169/5498/products/troll-pom-pom-color-purple-paradise-fibers_600x.png?v=1603221545", size: "Large", color: "Purple", num: 1},
                { key: 3, agg: 0, img: "https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_IMAGE_400/blue-tinsel-pom-poms~13834764", size: "Small", color: "Blue", num: 25},
                { key: 4, agg: 0, img: "https://www.beadsdirect.co.uk/storage/app/uploads/public/d46/355/ffd/thumb__1000_1000_0_0_crop.jpg", size: "Large", color: "Purple", num: 2},
                { key: 5, agg: 0, img: "https://images-na.ssl-images-amazon.com/images/I/81znp8MKk5L._AC_SX679_.jpg", size: "Medium", color: "Blue", num: 12},
                { key: 6, agg: 0, img: "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/466593", size: "Medium", color: "Purple", num: 3},
                { key: 7, agg: 0, img: "https://imgprd19.hobbylobby.com/f/44/0d/f440d2e5b88c46649fac5c18d2eac6c167c9ff1d/350Wx350H-392720-0120-px.jpg", size: "Small", color: "Orange", num: 40},
                { key: 8, agg: 0, img: "https://i.ebayimg.com/images/g/kQ4AAOSwEDtbdo-Z/s-l300.jpg", size: "Medium", color: "Orange", num: 7},
                { key: 9, agg: 0, img: "https://www.beadsdirect.co.uk/storage/app/uploads/public/52a/9f6/44d/thumb__1000_1000_0_0_crop.jpg", size: "Large", color: "Blue", num: 2},
                { key: 10, agg: 0, img: "https://cdn-fsly.yottaa.net/551561a7312e580499000a44/www.joann.com/v~4b.ad/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwfba237fa/images/hi-res/alt/16650780ALT1.jpg?sw=556&sh=680&sm=fit&yocs=5t_5G_5E_", size: "Small", color: "Orange", num: 15},
                { key: 11, agg: 0, img: "https://images-na.ssl-images-amazon.com/images/I/81aptnwdiuL._AC_SX679_.jpg", size: "Medium", color: "Purple", num: 10}
            ]
            let og = original;
            //map the original constant using the agg state so the aggregator total for each item is updated
            og.map((item) => item.agg = this.state.agg[item.key])
            this.setState({sorted:og})
        }
        else if(event === "Low to High"){
            let sorted = this.state.sorted
            sorted.sort((a,b) => a.num - b.num);
            this.setState({sorted:sorted})
        }
        else if(event === "High to Low"){
            let sorted = this.state.sorted
            sorted.sort((a,b) => b.num - a.num);
            this.setState({sorted:sorted})
        }
    };


    /*
    *   This function sets the size state according to what the click event is.
    */
    onSelectFilterSize = (event) => {
        this.setState({
            size: event
        })
    };

    /*
    *   This function sets the color state according to what the click event is.
    */
    onSelectFilterColor = (event) => {
        this.setState({
            color: event
        })
    };

    /*
    *   This function filters the list items according to the newly set state sizes.
    */
    matchesFilter = (item) => {
		// if neither size nor color is selected, everything returns true
        if (this.state.size === "All" && this.state.color === "All") {
            return true
        }
        //if the size is selected and no color is selected, only return true for items of that size
		if (this.state.size !== "All" && this.state.color === "All") {
			if (this.state.size === item.size) {
				return true
			} else {
				return false
			}
        }
        //if the color is selected and no size is selected, only return true for items of that color
		if (this.state.size === "All" && this.state.color !== "All") {
			if (this.state.color === item.color) {
				return true
			} else {
				return false
			}
        }
        //if the color and aize is selected, only return true for items of that size and color
		if (this.state.size !== "All" && this.state.color !== "All") {
			if (this.state.size === item.size && this.state.color === item.color) {
				return true
			} else {
				return false
			}
		}
        return false
    }

    /*
    *   This function filters the list items if they should be in the aggregator or not (if there is 1 or more item added to the cart).
    */
    inCart = (item) => {
        if(item.agg > 0){
            return true
        }
        else{
            return false
        }
    }

    /*
    *   This function calculates the total overall quantity to be displayed in the aggregator
    */
    calculateTotal = () => {
        var qty = this.state.qty
        console.log("Before")
        console.log(this.state.qty)
        //create a list of total quantity for a item by multiplying the number of sets of an item by the number of individual items in that items set
        const totalArr = this.state.sorted.map((item) => item.agg*item.num)
        //reduce the list by adding all of he elements together
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        qty = totalArr.reduce(reducer)
        //set the qty state to the final reduced total
        this.setState({
            qty:qty
        })
        console.log("After")
        console.log(this.state.qty)
    }

    /*
    *   This function increments the agg total for each item when the item is added to the cart
    */
    addClick = (item) => {
        let agg = this.state.agg
        //increment the agg at the item index
        agg[item.key] = agg[item.key] + 1
        this.setState({
            agg:agg
        })
        //set the agg for the item itself 
        item.agg = this.state.agg[item.key]
        console.log("AGG")
        console.log(this.state.agg[item.key])
    }
    
    /*
    *   This function decrements the agg total for each item when the item is removed from the cart
    */
    removeClick = (item) => {
        let agg = this.state.agg
        //if there is more than 0 of this item in the cart, decrement the agg at the item index
        if (agg[item.key] > 0){
            agg[item.key] = agg[item.key] - 1
            this.setState({
                agg:agg
            })
            //set the agg for the item itself
            item.agg =  this.state.agg[item.key]
        }
        
    };

    /*
    *   This function sets the agg to 0 if an item is to be removed from the total, and then recalculates the total
    */
    remove = (item) => {
        let agg = this.state.agg
        //set the agg at the item index to 0
        agg[item.key] = 0
        this.setState({
            agg:agg
        })
        //set the agg for the item itself
        item.agg =  this.state.agg[item.key]
        this.calculateTotal();
    };

    render(){
        return (
            <div class = "giant-wrap">
                <h1><br></br>Pom Pom Shop<br></br></h1>
                <div style = {{display: 'flex', justifyContent:'space-around'}}>
                    <div class="full-wrapper">
                    {/* The Navbars hold the links for filtering an sorting. If a link is clicked, the appropriate handler is called */}
                    <Navbar>
                        <Navbar.Brand>Filter by Size</Navbar.Brand>
                        <Nav.Item><Nav.Link eventKey = "All" onSelect = {this.onSelectFilterSize}>All</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey = "Small" onSelect = {this.onSelectFilterSize}>Small</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey = "Medium" onSelect = {this.onSelectFilterSize}>Medium</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey = "Large" onSelect = {this.onSelectFilterSize}>Large</Nav.Link></Nav.Item>
                    </Navbar>
                    <Navbar>
                        <Navbar.Brand>Filter by Color</Navbar.Brand>
                        <Nav.Item><Nav.Link eventKey = "All" onSelect = {this.onSelectFilterColor}>All</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey = "Purple" onSelect = {this.onSelectFilterColor}>Purple</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey = "Orange" onSelect = {this.onSelectFilterColor}>Orange</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey = "Blue" onSelect = {this.onSelectFilterColor}>Blue</Nav.Link></Nav.Item>
                    </Navbar>
                    <Navbar>
                        <Navbar.Brand>Sort by Quantity in a Set</Navbar.Brand>
                        <Nav.Item><Nav.Link eventKey = "Default" onSelect = {this.sortByNum}>Default</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey = "Low to High" onSelect = {this.sortByNum}>Low to High</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey = "High to Low" onSelect = {this.sortByNum}>High to Low</Nav.Link></Nav.Item>
                    </Navbar>

                    {/* props passed to DisplayList to be used to render the list itself */}
                    <DisplayList list = {this.state.sorted.filter(this.matchesFilter)} calculateTotal = {this.calculateTotal} agg = {this.state.agg} addClick = {this.addClick} removeClick = {this.removeClick}/>
                    </div>

                    {/* This card holds the aggregator */}
                    <div style = {{marginTop: '1rem'}}>
                        {
                        <Card style={{minWidth: '30 rem' }}>
                        <Card.Header>Basket</Card.Header>
                                <br></br>
                                <Card.Title>
                                      Total Pom Poms: {this.state.qty}  
                                </Card.Title>
                            <Card.Body>
                                {/* Filter the sorted list for items that have more than 0 aggregated items and map the items so they are a card in the aggregator */}
                                {this.state.sorted.filter(this.inCart).sort((a,b) => a.num - b.num).map((item) =>
                                    <div style = {{marginTop: '1rem'}}>
                                        <Card style={{ width: '12rem' }}>
                                            <Card.Img variant="top" src={item.img} />
                                            <Card.Body>
                                                <Card.Text>
                                                   Individual Quantity: {item.num}<br></br>
                                                    Number of Sets:
                                                </Card.Text>
                                                {/* If a button is clicked, call the appropriate handlers to change the value of the total agg */}
                                                    <div class = "button-div">
                                                        <Button onClick = {() => {this.removeClick(item); this.calculateTotal();}} variant="primary"> - </Button>
                                                        <Card.Text> {item.agg} </Card.Text>
                                                        <Button onClick={() =>{this.addClick(item); this.calculateTotal();}} variant="primary"> + </Button>
                                                    </div>
                                                    <br></br>
                                                    <Button onClick = {() => {this.remove(item);}} variant="primary"> Remove from cart </Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                        }
                    </div>  
                </div> 
            </div>
        )
    }

}