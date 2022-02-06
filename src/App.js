import { useState } from "react"
import Header from "./components/Header"
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FeedbackData from './data/feedbackdata'
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

import AboutPage from './pages/AboutPage'
import AboutIconLink from "./components/AboutIconLink"
import {FeedbackProvider} from './context/FeedbackContext'

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
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]) 
    }

    return (
        <FeedbackProvider>
            <BrowserRouter>
            <>
                <Header />
                <div className="container">
                    <Route exact path='/'>
                        <FeedbackForm handleAdd={addFeedback}/>
                        <FeedbackStats feedback={feedback} />
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                    </Route>
                    <Route path='/about' component={AboutPage} />
                    <AboutIconLink />
                </div>
            </>
            </BrowserRouter>
        </FeedbackProvider>
    )
}

export default App