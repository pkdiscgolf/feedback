function App () {
    const title = 'Blog Post'
    const body = 'This is my post'
    const comments = [
        {id: 1, text: 'Comment 1'},
        {id: 2, text: 'Comment 2'},
        {id: 3, text: 'Comment 3'},
    ]

    return (
        <div className='container'>
            <h1>
                {title}
            </h1>      
            <div className="comments">
                <h1>Comments ({comments.length})</h1>
                <ul>
                    {comments.map((comment, index) => (
                        <li>
                            {comment.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App