import { Route, Routes } from "react-router-dom"
import {Home, WebDesign, AppDesign, GraphicDesign, About, Locations} from "./pages"
import {SharedContent} from "./components"


function App() {

  return (
    <Routes>
      <Route path="/" element={<SharedContent/>}>
        <Route index element={<Home/>}/>
        <Route path="web-design" element={<WebDesign/>}/>
        <Route path="app-design" element={<AppDesign/>}/>
        <Route path="graphic-design" element={<GraphicDesign/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="locations" element={<Locations/>}/>
      </Route>
    </Routes>
  )
}

export default App
