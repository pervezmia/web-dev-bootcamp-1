
import Image from 'next/image';
import React from 'react';
import developer from '../../assets/image/developer.png'

export const metadata = {
  title: 'About page',
  description: '...',
}

const AboutPage  = () => {
    return (
        <div>
            <h3>This is about page</h3>
           <Image className='' src="/pervez.png" alt='Pervez' width='500' height="600"></Image>
           <Image src={developer} alt='developer' width="400" height="400"></Image>
           
        </div>
    );
};

export default AboutPage;