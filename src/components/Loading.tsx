import { FC } from 'react'

const Loading: FC = () => {
    return (
        <section className='flex justify-center items-center h-screen'>
            <div className="flex space-x-3">
                <div className='size-5 bg-[#00d8ff] rounded-full animate-bounce ' />
                <div className='size-5 bg-[#00d8ff] rounded-full animate-bounce ' />
                <div className='size-5 bg-[#00d8ff] rounded-full animate-bounce ' />
            </div>
        </section>
    )
}

export default Loading