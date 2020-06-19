import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  msgApiUrl = environment.baseUrl + '/messages';
  constructor(private http: HttpClient) {}
  getAllMessage(roomId) {
    // https://ajax-course.herokuapp.com/messages/1
    return this.http.get(this.msgApiUrl + '/' + roomId);
  }
}
