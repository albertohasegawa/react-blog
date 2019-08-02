export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }

  //bad return document.querySelector('input');
  //bad return axios.get('/posts');
  //good return state + action
};
