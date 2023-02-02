import React from 'react';
import { Outlet } from 'react-router-dom';
import AddStudent from '../AddStudent/AddStudent';

const Home = () => {
    return (
       <div>
        <AddStudent></AddStudent>
       </div> 
    );
};

export default Home;