import React, { useContext, useState, useEffect } from 'react';
import Context from '../Context/Context';
import './Home.scss';

function Home() {
    const { example, setExample } = useContext(Context);
    return (
        <div className="home">
            Hello {example}
        </div>
    );
}

export default Home;
