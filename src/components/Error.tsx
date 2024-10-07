import { FC } from 'react'
import { useRouteError } from 'react-router-dom'

const Error: FC = () => {
    const error = useRouteError() as { statusText?: string; status?: string };
    console.log(error)
    return (
        <div className='flex flex-col justify-center items-center h-svh '>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.status} - { error.statusText}</i>
            </p>
            <button onClick={() => window.location.reload()} className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'>Reload</button>
        </div>
    )
}

export default Error