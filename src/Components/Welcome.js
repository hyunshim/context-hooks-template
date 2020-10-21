import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import './Welcome.scss';

function App() {
    // const [age, setAge] = useState();
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(age);
    // }


    const { example, setExample } = useContext(Context);
    const [formText, setFormText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(example)
    };

    return (
        <div className="age-container">
            <div className="age">
                <form onSubmit={handleSubmit}>
                    <div><label>What is your age? {example}</label></div>
                    <div><input type="number" onChange={e => setExample(e.target.value)} /></div>
                    <div><input type="submit" value="Submit" /></div>
                </form>
            </div>
            <Link to="/home">asd</Link>
        </div>
    );
}

export default App;