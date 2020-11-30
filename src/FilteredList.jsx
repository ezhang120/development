import React from "react";
import DisplayList from "./DisplayList";
import DisplayAgg from "./DisplayAgg";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class FilteredList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            qty: 0,
            sorted: [
                { key: 0, agg: 0, img: "https://imgprd19.hobbylobby.com/8/af/53/8af53111e4081aabf5cd6046d0cf8ab74fa6b82c/350Wx350H-506485-0120-px.jpg", size: "Small", color: "Purple", num: 20},
                { key: 1, agg: 0, img: "https://ilovecheer.com/wp-content/uploads/2018/01/LVCPMS0066-1.png", size: "Large", color: "Orange", num: 1},
                { key: 2, agg: 0, img: "https://cdn.shopify.com/s/files/1/1169/5498/products/troll-pom-pom-color-purple-paradise-fibers_600x.png?v=1603221545", size: "Large", color: "Purple", num: 1},
                { key: 3, agg: 0, img: "https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_IMAGE_400/blue-tinsel-pom-poms~13834764", size: "Small", color: "Blue", num: 15},
                { key: 4, agg: 0, img: "https://cdn.shopify.com/s/files/1/1169/5498/products/rabbit_fur_pom_pom_559_purple_600x.jpg?v=1584848138", size: "Large", color: "Purple", num: 1},
                { key: 5, agg: 0, img: "https://images-na.ssl-images-amazon.com/images/I/81znp8MKk5L._AC_SX679_.jpg", size: "Medium", color: "Blue", num: 12},
                { key: 6, agg: 0, img: "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/466593", size: "Medium", color: "Purple", num: 3},
                { key: 7, agg: 0, img: "https://imgprd19.hobbylobby.com/f/44/0d/f440d2e5b88c46649fac5c18d2eac6c167c9ff1d/350Wx350H-392720-0120-px.jpg", size: "Small", color: "Orange", num: 25},
                { key: 8, agg: 0, img: "https://i.ebayimg.com/images/g/kQ4AAOSwEDtbdo-Z/s-l300.jpg", size: "Medium", color: "Orange", num: 10},
                { key: 9, agg: 0, img: "https://stringyarns-weblinc.netdna-ssl.com/product_images/string-fox-fur-pom-poms/BABYBL/5d2e7078736964001a00564f/detail.jpg?c=1565803195", size: "Large", color: "Blue", num: 1},
                { key: 10, agg: 0, img: "https://cdn-fsly.yottaa.net/551561a7312e580499000a44/www.joann.com/v~4b.ad/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwfba237fa/images/hi-res/alt/16650780ALT1.jpg?sw=556&sh=680&sm=fit&yocs=5t_5G_5E_", size: "Small", color: "Orange", num: 15},
                { key: 11, agg: 0, img: "https://images-na.ssl-images-amazon.com/images/I/81aptnwdiuL._AC_SX679_.jpg", size: "Medium", color: "Purple", num: 10}
            ],
            original: [
                { key: 0, agg: 0, img: "https://imgprd19.hobbylobby.com/8/af/53/8af53111e4081aabf5cd6046d0cf8ab74fa6b82c/350Wx350H-506485-0120-px.jpg", size: "Small", color: "Purple", num: 20},
                { key: 1, agg: 0, img: "https://ilovecheer.com/wp-content/uploads/2018/01/LVCPMS0066-1.png", size: "Large", color: "Orange", num: 1},
                { key: 2, agg: 0, img: "https://cdn.shopify.com/s/files/1/1169/5498/products/troll-pom-pom-color-purple-paradise-fibers_600x.png?v=1603221545", size: "Large", color: "Purple", num: 1},
                { key: 3, agg: 0, img: "https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_IMAGE_400/blue-tinsel-pom-poms~13834764", size: "Small", color: "Blue", num: 15},
                { key: 4, agg: 0, img: "https://cdn.shopify.com/s/files/1/1169/5498/products/rabbit_fur_pom_pom_559_purple_600x.jpg?v=1584848138", size: "Large", color: "Purple", num: 1},
                { key: 5, agg: 0, img: "https://images-na.ssl-images-amazon.com/images/I/81znp8MKk5L._AC_SX679_.jpg", size: "Medium", color: "Blue", num: 12},
                { key: 6, agg: 0, img: "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/466593", size: "Medium", color: "Purple", num: 3},
                { key: 7, agg: 0, img: "https://imgprd19.hobbylobby.com/f/44/0d/f440d2e5b88c46649fac5c18d2eac6c167c9ff1d/350Wx350H-392720-0120-px.jpg", size: "Small", color: "Orange", num: 25},
                { key: 8, agg: 0, img: "https://i.ebayimg.com/images/g/kQ4AAOSwEDtbdo-Z/s-l300.jpg", size: "Medium", color: "Orange", num: 10},
                { key: 9, agg: 0, img: "https://stringyarns-weblinc.netdna-ssl.com/product_images/string-fox-fur-pom-poms/BABYBL/5d2e7078736964001a00564f/detail.jpg?c=1565803195", size: "Large", color: "Blue", num: 1},
                { key: 10, agg: 0, img: "https://cdn-fsly.yottaa.net/551561a7312e580499000a44/www.joann.com/v~4b.ad/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwfba237fa/images/hi-res/alt/16650780ALT1.jpg?sw=556&sh=680&sm=fit&yocs=5t_5G_5E_", size: "Small", color: "Orange", num: 15},
                { key: 11, agg: 0, img: "https://images-na.ssl-images-amazon.com/images/I/81aptnwdiuL._AC_SX679_.jpg", size: "Medium", color: "Purple", num: 10}
            ],
            order: "Default",
            size: "All",
            color: "All"
        }
    }

    // sortByNum = (event) => {
    //     if(event === "Default"){
    //         this.setState({order: event});
    //         this.props.list.sort(undefined);
    //     }
    //     if(event === "Low to High"){
    //         this.setState({order: event});
    //         this.props.list.sort((a,b) => a.num - b.num);
    //     }
    //     else if(event === "High to Low"){
    //         this.setState({order: event});
    //         this.props.list.sort((a,b) => b.num - a.num);
    //     }
    // };

    sortByNum = (event) => {
        if(event === "Default"){
            this.setState({order: event});
            let sorted = this.state.original;
            this.setState({sorted:sorted})
        }
        if(event === "Low to High"){
            this.setState({order: event});
            let sorted = this.state.sorted
            sorted.sort((a,b) => a.num - b.num);
            this.setState({sorted:sorted})
        }
        else if(event === "High to Low"){
            this.setState({order: event});
            let sorted = this.state.sorted
            sorted.sort((a,b) => b.num - a.num);
            this.setState({sorted:sorted})
        }
    };



    onSelectFilterSize = (event) => {
        this.setState({
            size: event
        })
    };

    onSelectFilterColor = (event) => {
        this.setState({
            color: event
        })
    };

    matchesFilter = (item) => {
		// if neither size nor color is selected, everything returns true
        if (this.state.size === "All" && this.state.color === "All") {
            return true
		}
		if (this.state.size !== "All" && this.state.color === "All") {
			if (this.state.size === item.size) {
				return true
			} else {
				return false
			}
		}
		if (this.state.size === "All" && this.state.color !== "All") {
			if (this.state.color === item.color) {
				return true
			} else {
				return false
			}
		}
		if (this.state.size !== "All" && this.state.color !== "All") {
			if (this.state.size === item.size && this.state.color === item.color) {
				return true
			} else {
				return false
			}
		}
        return false
    }

    inCart = (item) => {
        if(item.agg > 0){
            console.log("true")
            return true
        }
        else{
            return false
        }
    }

    render(){
        return (
            <div>
                <h1><br></br>Pom Pom Shop<br></br></h1>
                <div style = {{display: 'flex', justifyContent:'space-around'}}>
                    <div>
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
                        <Navbar.Brand>Sort by Quantity</Navbar.Brand>
                        <Nav.Item><Nav.Link eventKey = "Default" onSelect = {this.sortByNum}>Default</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey = "Low to High" onSelect = {this.sortByNum}>Low to High</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey = "High to Low" onSelect = {this.sortByNum}>High to Low</Nav.Link></Nav.Item>
                    </Navbar>
                    <DisplayList list = {this.state.sorted.filter(this.matchesFilter)} qty = {this.state.qty}/>
                    </div>
                    {/* <div style = {{marginTop: '1rem'}}>
                        {
                        <Card style={{ width: '24 rem' }}>
                        <Card.Header>Basket</Card.Header>
                            <Card.Body>
                                {this.state.sorted.filter(pom => pom.agg > 0).map((item) =>
                                    <div style = {{marginTop: '1rem'}}>
                                        { {console.log("ITEM")}
                                        {console.log(item)} }
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={item.img} />
                                            <Card.Body>
                                                <Card.Text>
                                                    Agg: {item.agg}<br></br>
                                                    Size: {item.size} <br></br>
                                                    Color: {item.color}<br></br>
                                                    Quantity: {item.num}
                                                </Card.Text>
                                                <Button onClick={() => this.addClick(item), this.calculateTotal} variant="primary">Add to Cart</Button> <br></br>
                                                <Card.Text>
                                                    
                                                </Card.Text>
                                                <Button onClick = {() => this.removeClick(item), this.calculateTotal} variant="primary">Remove from Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                                }
                                
                                <Card.Title>
                                    Total Pom Poms: {this.state.qty}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        }
                    </div>   */}
                </div> 
            </div>
        )
    }

}