import { useContext } from 'react'
import { AppContext } from './content'

function Child(){
    const {name, lastname} = useContext(AppContext)

    return(
        <>
            <h1>
                my name is {name} and last name is {lastname}
            </h1>
        </>
    )
}

export default Child;