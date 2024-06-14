import axios from 'axios';

const api = {
  fetchPosts: async function () {
    const urlString = `${import.meta.env.VITE_APP_API}api/posts`;
    //console.log(urlString);

    const response = await axios.get(urlString);
      var data_1 = response.data.map(function (element) {
          return {
              'id': `${element.id}`,
              'title': `${element.title}`,
              'desc': `${element.desc}`,
              'photo': `${element.photo}`,
              'username': `${element.username}`,
              'categoryIds': `${element.categoryIds}`,
              'createdAt': `${element.createdAt}`,
              'updatedAt': `${element.updatedAt}`,
              '__v': `${element.__v}`,
          };
      });
      return data_1;
  }
};

export default api;