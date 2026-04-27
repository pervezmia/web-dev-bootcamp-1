import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Career Page",
  description: "Career page in Dragon news portal",
};

const CareerPage = () => {
    return (
        <div>
            <h3>Hello Career page.</h3>
            <Link href={"/"}><button className='btn btn-success'>Go home</button></Link>
        </div>
    );
};

export default CareerPage;