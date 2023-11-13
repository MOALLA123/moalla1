import './index.css'
import Navbar from './component/Navbar'
import Slider from './component/Slider'
import Productslist from './component/Productslist'
import {Routes,Route} from 'react-router-dom'
import About from './about'


import Form from './component/form'
import Productdetails from './component/Productdetails'



function App() {

  return (
    <>

<Navbar />

 <Routes>
  <Route path='/' element={ 

          <><Slider />
           
           <Productslist />
          
          </>
  } />
<Route path='/about'  element={ <About/>}/>
<Route path='form' element={<Form/>} />
<Route path='/product/:productId' element={ <Productdetails/>}/>

 
 </Routes>

    </>
  )
}

export default App
