import Link from 'next/link';
import React from 'react';

const CareerPage = () => {
    return (
        <div>
            <h3>Hello Career page.</h3>
            <Link href={"/"}><button className='btn btn-success'>Go home</button></Link>
        </div>
    );
};

export default CareerPage;