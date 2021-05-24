import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Shop() {

     useEffect(() => {
        fetchItems();
    }, []);

    const [items,setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const items = await data.json();
        console.log(items);
        setItems(items);
    }
  return (
    <div>
        {items.map(items=>(
        <h1 key={items.title}>
            <Link to={`/shop/${items.title}`}>{items.title}</Link>
            <br></br>
            <img  src={items.image} />
        </h1>
        ))}
    </div>
  );
}

export default Shop;
