import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersApiUrl = environment.baseUrl + '/users';
  usersList = [];
  constructor(private http: HttpClient) {
    this.refreshUserList();
    setInterval(() => this.refreshUserList(), 1 * 1000);
  }
  //get the list of array and store it in userlist
  getAllUsers() {
    //const datUser = this.http.get(this.usersApiUrl);// dont store information
    //return datUser;
    return this.usersList;
  }
  //
  refreshUserList() {
    this.http.get(this.usersApiUrl).subscribe((res: any) => {
      this.usersList = res.data;
    });
  }
  getUser(providedId) {
    //object in array typescript
    return this.usersList.find((user) => user.id === providedId);
  }
  register(login, pass, pic) {
    const dataToSend = {
      username: login,
      password: pass,
      image: pic,
    };
    return this.http.post(this.usersApiUrl, dataToSend);
  }
  connect(login, pass) {
    const dataToSend = {
      username: login,
      password: pass,
    };
    return this.http.post(this.usersApiUrl, dataToSend);
  }
}
