import { Route, Routes } from "react-router-dom"
import {Home, WebDesign, AppDesign, GraphicDesign} from "./pages"
import {SharedContent} from "./components"


function App() {

  return (
    <Routes>
      <Route path="/" element={<SharedContent/>}>
        <Route index element={<Home/>}/>
        <Route path="web-design" element={<WebDesign/>}/>
        <Route path="app-design" element={<AppDesign/>}/>
        <Route path="graphic-design" element={<GraphicDesign/>}/>
      </Route>
    </Routes>
  )
}

export default App
