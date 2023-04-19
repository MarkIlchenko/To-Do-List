import React from "react";
// import './App.css';
import './index.css'
import FromInput from "./components/FromInput";
import List from "./components/List";
import Footer from "./components/Footer";
import {DataProvider} from "./components/DataProvider";
import Navigation from "./Navigation";

function App() {
    return (
        <DataProvider>
            <Navigation />
            <div className="App">

                {/*<div className="shape"></div>*/}
                <h1>To Do List</h1>
                <FromInput />
                <List />
                <Footer />
            </div>
        </DataProvider>
    );
}

export default App;
