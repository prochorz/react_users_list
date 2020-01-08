export const MAIN_API_URL = 'https://yalantis-react-school.herokuapp.com/api';

export const api = {
  users: {
      fetch(): Promise<any> {
          return fetch(`${MAIN_API_URL}/task0/users`, {
              method: 'GET',
          });
      }
  }
};