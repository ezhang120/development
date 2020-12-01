import './App.css';
import React from "react"
import FilteredList from "./FilteredList"
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

/*
* This class holds the original list of items and passes the list to FilteredList
*/
function App() {
  var productList = [
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
   
  return (
    <div className="App">
      <FilteredList list = {productList} />
    </div>
  );
}

export default App;
