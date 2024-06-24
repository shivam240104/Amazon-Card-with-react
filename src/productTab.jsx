import "./productTab.css"
import Price from "./Price"
export default function productTab({title, price, features}){
    return(
       <div className="product">
        <h4>{title}</h4>
        <p>Description</p>
        <Price/>
       </div> 
    )
}