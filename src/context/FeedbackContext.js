import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'Feedback 1',
        rating: 10
    },
    {
        id: 2,
        text: 'Feedback 2',
        rating: 5
    },
    {
        id: 3,
        text: 'Feedback 3',
        rating: 1
    },])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false}
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
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]) 
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {
            ...item, ...updatedItem } : item
        ))
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,//state
            deleteFeedback,
            addFeedback,
            editFeedback,//function
            updateFeedback
        }}
        >
            {children}
        </FeedbackContext.Provider>
    ) 
}

export default FeedbackContext