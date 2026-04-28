// import Button from './components/Button.jsx'
// import Input, { Text } from './components/Input.js'
// import './App.css';
// import Navbar from './components/Navbar.jsx';
// import User from './components/User.jsx';
// import products from './components/products.jsx';
// import productcard from './components/productcard.jsx';
// import './components/sab.css';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <h1>Hello World</h1>

//       <button className='class'>Click me</button>

//       <Button />
//       <Input />
//       <User name="nisar" age="18" id="1770" />

//       <Button title="hello sir" />
//       <Button subtitle="hellom sir" />

//       <Text />

//       {products.map((product) => {
//         return (
//           <div key={product.id} className="card">
//             <img
//               className="card-img"
//               src={product.image}
//               alt={product.name}
//             />

//             <h1 className="card-title">{product.name}</h1>
//             <h1 className="card-price">{product.price}</h1>
//             <h1 className="card-desc">{product.description}</h1>

//             <button className="card-btn">Learn More</button>
//           </div>
//         );
//       })}

//     </div>
//   );
// }

// export default App;
import React from 'react'
import Button from './components/Button.jsx'
import Input, { Text } from './components/Input.js'
import './App.css';
import products from './components/products.jsx';
import ProductCard from './components/productcard.jsx';

function App() {
  return (
    <div>
      <Button />
      <Input />
      <Text />
      <ProductCard/>
      </div>
  )
}

export default App