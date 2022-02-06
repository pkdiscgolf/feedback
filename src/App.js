import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

import AboutPage from './pages/AboutPage'
import AboutIconLink from "./components/AboutIconLink"
import {FeedbackProvider} from './context/FeedbackContext'

function App () {

    return (
        <FeedbackProvider>
            <BrowserRouter>
            <>
                <Header />
                <div className="container">
                    <Route exact path='/'>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
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