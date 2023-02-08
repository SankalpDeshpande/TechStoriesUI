import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { createBlog, getBlogs } from '../ApiClient/ApiCalls';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#222831',
        borderRadius: '10px'
    },
};

Modal.setAppElement('#root');

export default function Feed() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [blogs, setBlogs] = useState([]);

    const createBlogModal = () => {
        setIsOpen(true);
    }
    const closeBlogModal = () => {
        setIsOpen(false);
    }
    const createBlogPost = async (e) => {
        e.preventDefault();
        console.log(title, description);
        await createBlog({ title, description });
        setTitle("");
        setDescription("");
        setIsOpen(false);
    }
    useEffect(() => {
        const asyncFn = async () => { setBlogs(await getBlogs()); }; 
        asyncFn();
    }, []);
    return (
        <div className='feed'>
            <div className='startPostBtn'>
                <button onClick={createBlogModal}>
                    Start a post
                </button>
                <Modal
                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeBlogModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <form>
                        <div className='createBlogModal'>
                            <h1>Create a Post</h1>
                            <input value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                            <textarea value={description} rows='10' cols="50" onChange={(e) => setDescription(e.target.value)} />
                            <div className='createBlogButtons'>
                                <button onClick={createBlogPost}>Post</button>
                                <button onClick={closeBlogModal}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </Modal>
            </div>
            <div className='blogs'>
                {blogs.map((blog) => {
                    return (
                        <div>
                            <h1>{blog.title}</h1>
                            <h3>{blog.description}</h3>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
