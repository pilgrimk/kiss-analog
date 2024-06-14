import React, { useState, useEffect } from 'react'
import { Header, Alert, PostCard, Pagination } from '../../components'
import { data } from '../../constants'
import blogsHelper from '../../helpers/BlogsHelper'
import shortid from 'shortid'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [alertState, setAlertState] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(4);

  //get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  }

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

  const handleGetBlogs = async () => {
    // clear alerts and the current movie data
    clearAlert();
    setBlogs([]);

    try {
      const res_blogs = await blogsHelper.fetchPosts();
      if (res_blogs !== 'undefined') {
        setBlogs(res_blogs);
      } else {
        setAlert('info', 'No blog posts available at this time.');
      }
    }
    catch (err) {
      console.log(err);
      setAlert('error', 'Something went wrong!');
    }
  };

  useEffect(() => {
    handleGetBlogs();
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
      <Header title={data.blogsSection.title} />
      <div className='w-full flex flex-col'>
        <div className="p-8">
          {data.blogsSection.desc.map((info) => (
            <p key={shortid()} className='mb-4'>
              {info}
            </p>
          ))}
        </div>
        <div className="flex flex-row flex-wrap justify-evenly 
        gap-4">
          {currentBlogs.map((post_info) => (
            <PostCard key={shortid()} post={post_info} />
          ))
          }
        </div>
      </div>
      <Pagination
        postsPerPage={blogsPerPage}
        totalPosts={blogs.length}
        paginate={paginate} />
    </>
  )
}

export default Blogs