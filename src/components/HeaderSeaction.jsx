import Movie from '../../public/movie1.jpg'

const HeaderSeaction = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16 lg:gap-28 2xl:px-8 2xl:py-4 justify-between">
      <div className='md:ml-12 text-left px-4 mt-12 flex flex-1 flex-col justify-start gap-3 md:gap-8 lg:gap10'>
        <div className='font-bold capitalize 2xl:text-6xl'>
            <h1>Jungle Cruise</h1>
        </div>
        <div className='max-w-screen-2xl text-sm 2xl:text-3xl'>
            <p className='md:leading-relaxed'>
                Dr Lily Houghton, a researcher, and her brother team up with Frank, a skipper, to locate a mystical tree in the Amazon. However, they are pursued by evil entities lusting after immortality.
            </p>
        </div>
      </div>
      <div>
        <img src={Movie} width={300} alt="Movie Image" className='object-fill'  />
      </div>
    </div>
  )
}

export default HeaderSeaction