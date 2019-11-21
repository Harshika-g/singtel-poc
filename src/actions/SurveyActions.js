import { Fetch_Users, Get_Token }  from './types';

export const fetchUsers() {
  // fetch('https://api.themoviedb.org/4/list/1?page=1&api_key=bd0830ad7ef334b313907c035d767bd1')
  //   .then(response => response.json())
  //   .then(users => dispatch({
  //     type: Fetch_Users,
  //     payload: users.results
  //   }));
  const resp = axios.get('http://34.207.52.212:8080/users', { headers: { "Authorization": token }});
  return {
    type: Fetch_Users,
    payload: resp.data
    };
}

export const getToken = (token) => (dispatch) => {
  dispatch({
    type: Get_Token,
    payload: token,
  })
}
