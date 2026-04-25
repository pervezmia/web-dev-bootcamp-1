import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            about page <br />
            <Link href={"/"}><button className='btn btn-success'>Go home</button></Link>
        </div>
    );
};

export default AboutPage;