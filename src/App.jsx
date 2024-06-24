import './App.css'
import ProductTab from './productTab'

function App() {
 let style = {
  display:"flex",
  flexWrap:"wrap",
  justifyContent:"center",
  alignItems:"center",
 }

  return (
    <div style={style} >
        <ProductTab title="Logitech MX Master" idx={0} />
            <ProductTab title="Apple Pencil (2nd Gen" idx={1} />
            <ProductTab title="Zebronics Zeb-transformer" idx={2} />
            <ProductTab title="Petronics Toad 23" idx={3} />
    </div>
   
    
    
  )
}

export default App
