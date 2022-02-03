import { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";


function FeedbackForm() {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>
                    How would you rate your service?
                </h2>
                <div className="input-group">
                    <input value={text} type="text" placeholder="Write a review" onChange={handleTextChange} />
                     <Button type="submit">Sender</Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm;
