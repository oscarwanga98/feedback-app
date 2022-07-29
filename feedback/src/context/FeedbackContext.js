import {createdContext,useState} from 'react'


const FeedbackContext= createdContext()


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