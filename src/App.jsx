import { Route, Routes } from "react-router-dom"
import {Home} from "./pages"
import {SharedContent} from "./components"


function App() {

  return (
    <Routes>
      <Route path="/" element={<SharedContent/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App
