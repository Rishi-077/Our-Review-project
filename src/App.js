import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-bootstrap'
import Review from './components/Review';
function App() {
    return ( 
        <main>
            <div className="container">
                <div className="title">
                    <h2>Our Review</h2>
                    <div className="underline"></div>
                    <Review />
                </div>
            </div>
        </main>
    );
}

export default App;