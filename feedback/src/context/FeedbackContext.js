import {createContext,useState} from 'react'


const FeedbackContext= createContext()


export const FeedbackProvider=({children})=>{

    const [feedback,setFeedback]=useState([
        {
            id:1,
            text:'This item is for context',
            rating:10
        }
    ])
    return(
    <FeedbackContext.Provider value={{
        feedback,
    }}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext