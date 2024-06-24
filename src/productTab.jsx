import "./productTab.css"
import Price from "./Price"
export default function productTab(){
    return(
       <div className="product">
        <p>Title</p>
        <p>Description</p>
        <Price/>
       </div> 
    )
}