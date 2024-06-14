import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Header, Alert } from '../../components'
import { data, images } from '../../constants'

const ViewPost = () => {
    const [alertState, setAlertState] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const location = useLocation();
    const { post } = location.state;

    const setAlert = (severity, message) => {
        setAlertState(true);
        setAlertSeverity(severity);
        setAlertMessage(message);
    };

    const clearAlert = () => {
        setAlertState(false);
        setAlertSeverity('');
        setAlertMessage('');
    };

    useEffect(() => {
        if (!post) { setAlert('error', 'No POST data found!'); }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {(alertState) ?
                (<Alert
                    alertSeverity={alertSeverity}
                    alertMessage={alertMessage}
                    onClose={() => clearAlert()} />
                ) : (
                    <React.Fragment />
                )}
            <Header title={data.viewPostSection.title} />
            {(post) ?
                (<div className="flex flex-col">
                    <h1 className="text-center m-8 italic underline text-4xl">
                        {post.title}
                    </h1>
                    <div className="flex flex-col md:flex-row gap-8 px-8 py-4">
                        <div className="md:basis-1/3">
                            {post.photo ? (
                                <img className="w-100" src={images.default_blog} alt="blog_img"></img>
                            ) : (
                                <img className="w-100" src={images.default_blog} alt="blog_img"></img>
                            )}
                        </div>
                        <div className="md:basis-2/3">
                            <div className="flex flex-row justify-between py-4">
                                <span className="italic font-serif font-bold">Author: {post.username}</span>
                                <span className="italic">{new Date(post.createdAt).toDateString()}</span>
                            </div>
                            <div>
                                {post.desc}
                            </div>
                        </div>
                    </div>
                </div>
                ) : (
                    <React.Fragment />
                )}
        </>
    )
}

export default ViewPost