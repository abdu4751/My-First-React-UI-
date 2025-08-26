
import "./Product.css"; 
import "./Media.css";
import CashmereCardigan from "./Project Images/Cashmere Cardigan.png";
import ChinoPants from "./Project Images/ChinoPants.png"
import CozyKnitSweater from "./Project Images/CozyKnitSweater.png"
import DenimJeans from "./Project Images/DenimJeans.png"
import LeatherAnkle from "./Project Images/LeatherAnkle.png"
import LeatherShoes from "./Project Images/LeatherShoes.png"
import  Sneakers from "./Project Images/Sneakers.png"
import  SuedeLoafers from "./Project Images/SuedeLoafers.png"
import  TailoredBlazer from "./Project Images/TailoredBlazer.png"
import  TrenchCoat from "./Project Images/TrenchCoat.png"
import  Tshirt from "./Project Images/Tshirt.png"
import  WoolBlendScarf from "./Project Images/WoolBlendScarf.png"
function Products(){
return(
    <div className="container">
        <div className="product-container">
          <div className="product-card-contaniner">
            <div className="product-image-container">
                <img src={CashmereCardigan} alt="Cashmere Cardigan" />
            </div>
            <div className="proudct-text-container">
                <h4>Cashmere Cardigan</h4>
                    <p className="price-text">$79.99</p>
            </div>

          </div>
          <div className="product-card-contaniner">
            <div className="product-image-container">
                <img src={ChinoPants} alt="Cashmere Cardigan" />
            </div>
            <div className="proudct-text-container">
                <h4>Chino Pants</h4>
                    <p className="price-text">$85.99</p>
            </div>
            </div>
          <div className="product-card-contaniner">
            <div className="product-image-container">
                <img src={CozyKnitSweater} alt="Cashmere Cardigan" />
            </div>
            <div className="proudct-text-container">
                <h4>Cozy Knit Sweater</h4>
                    <p className="price-text">$58.99</p>
            </div>
            


          </div>
          <div className="product-card-contaniner">
            <div className="product-image-container">
                <img src={DenimJeans} alt="Cashmere Cardigan" />
            </div>
            <div className="proudct-text-container">
                <h4>Denim Jeans</h4>
                    <p className="price-text">$60.99</p>
            </div>

          </div>
          <div className="product-card-contaniner">
            <div className="product-image-container">
                <img src={LeatherAnkle} alt="Cashmere Cardigan" />
            </div>
            <div className="proudct-text-container">
                <h4>Leather Ankle</h4>
                    <p className="price-text">$50.99</p>
            </div>
           
          </div>
          <div className="product-card-contaniner">
            <div className="product-image-container">
                <img src={LeatherShoes} alt="Cashmere Cardigan" />
            </div>
            <div className="proudct-text-container">
                <h4>Leather Shoes</h4>
                    <p className="price-text">$78.99</p>
            </div>
          </div>
          <div className="product-card-contaniner">

            <div className="product-image-container">
                <img src={Sneakers} alt="Cashmere Cardigan" />
            </div>
            <div className="proudct-text-container">
                <h4>Sneakers</h4>
                    <p className="price-text">$65.99</p>
            </div>

          </div>
          <div className="product-card-contaniner">
            <div className="product-image-container">
                <img src={SuedeLoafers} alt="Cashmere Cardigan" />
            </div>
            <div className="proudct-text-container">
                <h4>Suede Loafers</h4>
                    <p className="price-text">$45.99</p>
            </div>

          </div>
          <div className="product-card-contaniner">
            <div className="product-image-container">
                <img src={TailoredBlazer} alt="Cashmere Cardigan" />
            </div>
            <div className="proudct-text-container">
                <h4>Tailored Blazer</h4>
                    <p className="price-text">$40.99</p>
            </div>
          </div>
          <div className="product-card-contaniner">
            <div className="product-image-container">
                <img src={TrenchCoat} alt="Cashmere Cardigan" />
            </div>
            <div className="proudct-text-container">
                <h4>Trench Coat</h4>
                    <p className="price-text">$49.99</p>
            </div>
            

          </div>
          <div className="product-card-contaniner">
            <div className="product-image-container">
                <img src={Tshirt} alt="Cashmere Cardigan" />
            </div>
            <div className="proudct-text-container">
                <h4>T-Shirt</h4>
                    <p className="price-text">$60.99</p>
            </div>
            

          </div>
          <div className="product-card-contaniner">
             <div className="product-image-container">
                <img src={WoolBlendScarf} alt="Cashmere Cardigan" />
            </div>
            <div className="proudct-text-container">
                <h4>Wool Blend Scarf</h4>
                    <p className="price-text">$55.99</p>
            </div>
          </div>
        </div>
        
    </div>
)
}
export default Products;