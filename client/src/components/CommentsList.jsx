/* eslint-disable react/prop-types */
import "../assets/Navbar.css"

const CommentsList = ({ comments }) => {
    return (
        <div className="shadow rounded px-5 py-1 mt-10 background-custom">
            <h3 className='sm:text-2xl text-xl font-bold my-6 text-white uppercase text-center'>Comments
            </h3>
            {comments.map((comment, index) => (
                <div key={index} className="flex items-center mb-4">
                    <h4 className='text-lg font-bold'>{comment.username}:</h4>
                    <h4 className="text-lg ml-2">{comment.text}</h4>
                </div>
            ))}
        </div>
    )
}

export default CommentsList