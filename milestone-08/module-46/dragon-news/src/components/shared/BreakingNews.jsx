import React from 'react';
import Marquee from 'react-fast-marquee';


const newsData = [
  {
    id: 1,
    title: "Global Markets Rally Amid Economic Recovery Hopes",
  },
  {
    id: 2,
    title: "AI Technology Transforming Modern Healthcare Systems",
  },
  {
    id: 3,
    title: "Climate Change Talks Show Mixed Progress at Summit",
  },
  {
    id: 4,
    title: "New Smartphone Launch Sets Record Preorders",
  },
  {
    id: 5,
    title: "Space Agency Plans Next Mission to Mars",
  },
  {
    id: 6,
    title: "Cybersecurity Concerns Rise with Remote Work Trends",
  },
];



const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto lg:max-w-[90%]'>
            <button className='btn bg-pink-500 text-white'>Latest News</button>
            <Marquee pauseOnHover = {true} speed ={100}>
                {
                    newsData.map(news => {
                        
                        return <span key={news.id} className='ml-9'>{news.title}</span>
                        
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;