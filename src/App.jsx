import { Route, Routes } from "react-router-dom"
import {Home, WebDesign} from "./pages"
import {SharedContent} from "./components"


function App() {

  return (
    <Routes>
      <Route path="/" element={<SharedContent/>}>
        <Route index element={<Home/>}/>
        <Route path="web-design" element={<WebDesign/>}/>
      </Route>
    </Routes>
  )
}

export default App
