import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))

    },[])


    return (
        <div>
            <h4>left All Category</h4>
            <div className='ms-4'>
                {
                    categories.map(category => <p
                    key={category.id}>
                        <Link to={`/category/${categories.id}`} className='text-decoration-none text-secondary'>{ category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;