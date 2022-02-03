import { useState } from "react"
import Header from "./components/Header"

import FeedbackData from './data/feedbackdata'
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App () {
    const [feedback, setFeedback] = useState(
        FeedbackData
    )

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?'))
        {
            setFeedback(
                feedback.filter((item) => item.id !== id)
            )
        }
    }

    const addFeedback = (newFeedback) => {
        console.log(newFeedback)
    }

    return (
        <>
            <Header />
             <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}  />   
             </div>
        </>

    )
}

export default App