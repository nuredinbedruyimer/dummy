
import { Route, Routes } from 'react-router-dom';
// This is Other commit In Destached Mode

//  There is Also Adding This Line Of Code On The branch I created from nuredin branch

import AdminsPage from './components/router-example/Admins';
//  This is Comment I Do 
import UsersPage from './components/router-example/Users';
import ProductPage from './components/router-example/Products';
import Homepage from './components/router-example/HomePage';
import AdminPosts from './components/router-example/AdminPosts';
import AdminProfile from './components/router-example/AdminProfile';
import UserProfile from './components/router-example/UserProfile';
import Navbar from './components/router-example/Navbar';
import ProductDetail from './components/router-example/ProductDetail';
import UserProfilePage from './components/router-example/UserProfilePage';

function App() {
  return (
    <div className='flex flex-col gap-12 px-12 min-h-screen'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />

        <Route path='/admins' element={<AdminsPage />}>
          <Route index element={<AdminProfile />} /> {/* Default view for /admins */}
          <Route path='profile' element={<AdminProfile />} />
          <Route path='admin-post' element={<AdminPosts />} />
        </Route>

        <Route path='/users' element={<UsersPage />}>
          <Route index element={<UserProfile />} /> {/* Default view for /users */}
          <Route path='profile' element={<UserProfile />} />
          <Route path=':userID' element={<UserProfilePage />} />
        </Route>

        <Route path='/products' element={<ProductPage />}>
          <Route index element={<ProductDetail />} /> {/* Default view for /products */}
          <Route path='product-detail' element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
