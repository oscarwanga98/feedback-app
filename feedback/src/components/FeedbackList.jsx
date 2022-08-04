//import {motion,AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import Feedbackitem from './Feedbackitem'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {

    const {feedback,isLoading}=useContext(FeedbackContext)


    if(!isLoading&&(!feedback||feedback.length===0)){
        return <p>No feedback yet</p>
    }
  return isLoading? <Spinner/>:(
   <div className="feedback-list">
    {feedback.map((item)=>(
        <Feedbackitem key={item.id} item={item}/>
    )
    )}
   </div>
  )

// return isLoading? <h3>Loading....</h3>:(
//     <div className="feedback-list"> 
//         <AnimatePresence>
//             {feedback.map((item)=>(
//             <motion.div 
//                 key={item.id}
//                 initial={{opacity:0}}
//                 animate={{opacity:1}}
//                 exit={{opacity:0}} 
//             >
//                 <Feedbackitem key={item.id} item={item}/>
//             </motion.div>
//             )
//             )}
//         </AnimatePresence>
     
//     </div>
//    )
}


export default FeedbackList