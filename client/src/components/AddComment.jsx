/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../assets/Navbar.css"

const AddComment = ({name, setArticleInfo}) => {

    const [message, setMessage] = useState('');
    const {user} = useAuth0();
    
    const handleCommentSubmit = async () => {
        if(message != ''){
            const result = await fetch(`http://localhost:8000/api/articles/${name}/add-comments`, {
                method: "POST",
                body: JSON.stringify({
                    username: user.nickname,
                    text: message,
                }),
                headers: {
                    "Content-type": "application/json",
                }
            });
            const body = await result.json();
            setArticleInfo(body);
            setMessage('');
        }
        
    }

    return (
        <form className='shadow rounded px-8 pt-6 pb-8 mb-4 background-custom'>
            <label className='block text-white text-sm font-bold mb-2 mt-2' htmlFor="comment">
            Comment :
            </label>
            <textarea
            id="comment"
            rows='4'
            cols='50'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder="Good content..."
            onKeyDown={(e) => { if(e.key === "Enter" && {message} != '') { handleCommentSubmit() }}}
            />
            <button
            onClick={() => handleCommentSubmit()}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rouded focus:outline-none focus:shadow-outline'
            >
            Post
            </button>
        </form>
    )
}

export default AddComment