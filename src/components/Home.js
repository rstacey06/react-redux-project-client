import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className ="home-page">
        <h3>Add a new task to your <Link to="/todos">HoneyDo List</Link>!</h3>
    </div>
)
export default Home;
