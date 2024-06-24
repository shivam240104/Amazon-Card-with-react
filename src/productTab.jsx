import "./productTab.css"
import Price from "./Price"

export default function productTab({title, idx, price, features}){
let oldPrice=["12,495", "11,900", "1,599", "599"];
let newPrice=["8,995", "9,199", "899", "278"];

    return(
       <div className="product">
        <h4>{title}</h4>
        <p>Description</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
       </div> 
    )
}