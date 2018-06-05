import request from 'superagent';
import {
  EMPLOYEE_API_URL,
  EMPLOYEE_ADD_API_URL,
  EMPLOYEE_DELETE_API_URL,
  BASE_URL
} from '../constants/apiConstants';

export default class ApiUsers {
  // get a list of users
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        request
          .get(BASE_URL + EMPLOYEE_API_URL)
          .end((err, res) => {
            if (err) {
              /*
               in case there is any error, dispatch an action containing the error
               */
              console.log('err======', err);
              //TODO
            }
            console.log('res=======', res.text);
            const data = JSON.parse(res.text);
            /*
             Once data is received, dispatch an action telling the application
             that data was received successfully, along with the parsed data
             */
            resolve(data.employees);
          })
      }, 1000);
    });
  }

  // add/edit a user
  static addEdit(user) {
    return new Promise(resolve => {
      setTimeout(() => {

      request
        .post(BASE_URL + EMPLOYEE_ADD_API_URL)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Accept', 'application/json')
        .send({
          id: user.id ? user.id : '222c',
          name: user.name,
          title: user.title
        })
        .then(function(res) {
          resolve();
        })
        .catch(function(err) {
          // err.message, err.response
          console.log('Error adding employee', err);
        });
      }, 1000);
    });
  }

  // delete a user
  static delete(user_id) {
    return new Promise(resolve => {
      setTimeout(() => {
        request
          .del(BASE_URL + EMPLOYEE_DELETE_API_URL + '/' + user_id)
          .set('Accept', 'application/json')
          .then(function(res) {
            resolve();
          })
          .catch(function(err) {
            // err.message, err.response
            console.log('Error adding employee', err);
          });
      }, 1000);
    });
  }
}
