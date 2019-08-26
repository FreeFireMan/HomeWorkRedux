import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Products from "./components/products";

class App extends React.Component {



    render() {
        return (
            <div>
                <Header/>
                <Products/>
            </div>
        );
    }
}

export default App;
