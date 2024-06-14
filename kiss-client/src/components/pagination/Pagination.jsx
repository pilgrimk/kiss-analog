import React, { useState } from 'react';
import { MdArrowRight, MdArrowLeft } from "react-icons/md";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const [selectedNumber, setSelectedNumber] = useState(1);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    };

    const setNumberAndPaginage = (number) => {
        setSelectedNumber(number);
        paginate(number);
    };

    const PageDown = () => { 
        if ((pageNumbers.length > 0) && (selectedNumber > 1)) {
            setNumberAndPaginage(selectedNumber - 1);
        };
    };

    const PageUp = () => { 
        if ((pageNumbers.length > 0) && (selectedNumber < pageNumbers.length)) {
            setNumberAndPaginage(selectedNumber + 1);
        };
    };

    return (
        <nav>
            <div className="flex w-full items-center justify-center ">
                <div className="flex flex-row">
                    <button
                        type="button"
                        onClick={() => PageDown()}>
                        <MdArrowLeft size='2rem' />
                    </button>
                    <div>
                        <ul className="m-8 flex gap-4">
                            {pageNumbers.map(number => (
                                <li key={number} className="">
                                    <button 
                                        className="hover:bg-accent-light-500 p-4 rounded-lg"
                                        onClick={() => setNumberAndPaginage(number)}>
                                        {number}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-row w-full">
                        <button
                            type="button"
                            onClick={() => PageUp()}>
                            <MdArrowRight size='2rem' />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Pagination;