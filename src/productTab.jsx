import "./productTab.css"
import Price from "./Price"

export default function productTab({title, idx, price, features}){
let oldPrice=["12,495", "11,900", "1,599", "599"];
let newPrice=["8,995", "9,199", "899", "278"];
let description =[["8,000 DPI","5 Programmable buttons"],["intuitive surface","desingned for iPad Pro"],  ["desingned for iPad Pro","desingned for iPad Pro"], ["wireless","desingned for iPad Pro"]];

    return(
       <div className="product">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
       </div> 
    )
}