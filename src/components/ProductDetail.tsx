export const ProductDetail = () => {
  return (
    <article className='mt-4 flex w-full flex-col items-start justify-start gap-4 border-b border-gray-500 pb-4'>
      <div className='flex w-full items-center gap-4'>
        <h4 className='text-lg'>Mens Cotton Jacket</h4>
        <p>$58</p>
      </div>
      <div>
        <img
          className='w-32'
          src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
          alt=''
        />
      </div>
    </article>
  )
}
