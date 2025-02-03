

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './body';
import Home from './home';
import Search from './search';
import Electronics from './electronics';
import Electronic from './eletronic';
import Jewelery from './jewelery';
import Jewelerys from './Jewelerys';
import Menclothing from './men\'s clothing';
import Womenclothing from './women\'s clothing';
import Searchfiltered from './searchfiltered';
import Men from './Men';
import Women from './Women';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='' element={<Body />} />
          <Route path='/home/:min/:max' element={<Home/>} />
          <Route path='/search/:search' element={<Search />} />
          <Route path='/search/:search/:min/:max' element={<Searchfiltered/> } />

          <Route path='/electronic' element={<Electronic/>}> </Route>
          <Route path='/jewelery' element={<Jewelerys/>}> </Route>
          <Route path="/mens clothing"  element={<Men/>}> </Route>
          <Route path='/womens clothing'  element={<Women/>}> </Route>

          <Route path='/category/electronics/:min/:max' element={<Electronics/>} />
          <Route path='/category/jewelery/:min/:max' element={<Jewelery/>} />
          <Route path='/category/men/:min/:max' element={<Menclothing />} />
          <Route path='/category/women/:min/:max' element={<Womenclothing />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
