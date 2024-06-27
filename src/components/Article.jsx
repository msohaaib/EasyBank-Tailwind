import React from 'react'
import currency from '../../public/images/image-currency.jpg'
import restaurant from '../../public/images/image-restaurant.jpg'
import plane from '../../public/images/image-plane.jpg'
import confetti from '../../public/images/image-confetti.jpg'

export default function article() {
    return (
        <div className='container mx-auto bg-[#FAFAFA]'>
            <div>
                <div>
                    <h2 className='text-4xl my-8 text-center'>Latest Article</h2>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div className='flex flex-col mx-4 bg-white my-4'>
                        <img src={currency} className='w-4/5 rounded-t-md mx-auto md:w-auto' alt="currency" />
                        <p className='text-xs text-center mt-4'>By Claire Robinson</p>
                        <h3 className='font-semibold hover:text-blue-400 text-center lg:text-start lg:px-4 my-2'>Receive money in any currency with no fees</h3>
                        <p className='text-center text-sm mr-3 text-[#6B7284] px-8 lg:text-start lg:px-4'>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...</p>
                    </div>
                    <div className='flex flex-col mx-4 bg-white my-4'>
                        <img src={restaurant} className='w-4/5 rounded-t-md mx-auto md:w-auto' alt="currency" />
                        <p className='text-xs text-center mt-4'>By Claire Robinson</p>
                        <h3 className='font-semibold hover:text-blue-400 text-center my-2'>Receive money in any currency with no fees</h3>
                        <p className='text-center text-sm mr-3 text-[#6B7284] px-8 lg:text-start lg:px-4'>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...</p>
                    </div>
                    <div className='flex flex-col mx-4 bg-white my-4'>
                        <img src={plane} className='w-4/5 rounded-t-md mx-auto md:w-auto' alt="currency" />
                        <p className='text-xs text-center mt-4'>By Claire Robinson</p>
                        <h3 className='font-semibold hover:text-blue-400 text-center my-2'>Receive money in any currency with no fees</h3>
                        <p className='text-center text-sm mr-3 text-[#6B7284] px-8 lg:text-start lg:px-4'>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...</p>
                    </div>
                    <div className='flex flex-col mx-4 bg-white my-4'>
                        <img src={confetti} className='w-4/5 rounded-t-md mx-auto md:w-auto' alt="currency" />
                        <p className='text-xs text-center mt-4'>By Claire Robinson</p>
                        <h3 className='font-semibold hover:text-blue-400 text-center my-2'>Receive money in any currency with no fees</h3>
                        <p className='text-center text-sm mr-3 text-[#6B7284] px-8 lg:text-start lg:px-4'>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
