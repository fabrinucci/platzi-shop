export const SkeletonCards = () => {
  return (
    <div className='grid grid-cols-1 place-items-center gap-4 px-10 sm:grid-cols-auto-fit sm:place-items-stretch'>
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className='h-[300px] max-w-[250px] animate-pulse rounded-sm border border-gray-400 bg-gray-400 p-6'
        >
          <div className='relative'>
            <div className='absolute bottom-[12px] left-2 h-7 w-24 rounded-md bg-slate-500'></div>
            <div className='h-48 w-full rounded-md bg-gray-300'></div>
            <div className='absolute right-2 top-4 h-8 w-8 cursor-pointer rounded-full bg-slate-500'></div>
          </div>
          <div className='mt-5 flex items-start justify-between'>
            <div className='h-6 w-20 rounded-full bg-gray-300'></div>
            <div className='h-4 w-12 rounded-full bg-gray-300'></div>
          </div>
        </div>
      ))}
    </div>
  )
}
