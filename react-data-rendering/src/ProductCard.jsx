import React from 'react'

export const ProductCard = ({product, del}) => {
  return (
    <div className='p-2 w-60 border-2 rounded-xs border-white  flex flex-col gap-2 flex-wrap'><img src={product.image}  />
    
    <div><h2 className='text-xl text-white'>{product.title}</h2>
    <p className='text-xl text-green-600'>{product.rate}</p>
    <button className='bg-white text-blue-500' onClick={()=>del(product.id)}>Add to Cart</button>
    </div>
    </div>
  )
}
