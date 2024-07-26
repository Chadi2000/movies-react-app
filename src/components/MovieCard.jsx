/* eslint-disable react/prop-types */
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const MovieCard = ({overview,title,imgUrl}) => {
    const [isTruncated, setIsTruncated] = useState(true);

    const handleToggle = () => {
        setIsTruncated(!isTruncated);
    }


    const baseUrl = 'https://image.tmdb.org/t/p/w500';

    const truncateText = (text, maxLength) => {
        if(text.length > maxLength && isTruncated){
            return text.substring(0, maxLength)+ '...';
        }
        return text;
    }
  return (
    <div className='flex flex-col sm-max:w-[300px] md:w-[400px] border rounded-3xl relative md:h-[520px] cursor-pointer'>
      <img className=' top-0 rounded-t-3xl ' src={`${baseUrl}${imgUrl}`} alt="Poster Image" />
      <h1 className=" flex justify-center items-center text-center h-[60px] md:h-[110px] md:text-[30px] font-extrabold text-white shadow-md bg-gray-800 bg-opacity-50 px-2" >
        {title}
      </h1>
      <div className={`m-4 font-semibold p-[5px] ${!isTruncated ? 'overflow-y-scroll' : ''}`}>
                <p className='text-[13px] md:text-[16px]'>{truncateText(overview, 200)}</p>
                {overview.length > 200 && (
                    <span onClick={handleToggle} className="text-blue-500 cursor-pointer">
                        {isTruncated ? ' Show more' : ' Show less'}
                    </span>
                )}
            </div>
    </div>
  )
}

export default MovieCard
