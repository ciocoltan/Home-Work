import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsersResponseModel } from "../models/UsersResponse";
import { SentUserModel } from "../models/SentUserModel";

@Injectable({
  providedIn: "root"
})
export class ApihttpuserService {
  private url = "/users";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersResponseModel> {
    return this.http.get<UsersResponseModel>(this.url+"?page=500");
  }

  sendForm(form: SentUserModel) {
    return this.http.post<UsersResponseModel>(this.url, form);
  }

  deleteUser(id: number) {
    return this.http.delete<UsersResponseModel>(`/users/${id}`);
  }
  editForm(id: number, form: SentUserModel) {
    return this.http.put<UsersResponseModel>(`/users/${id}`, form);
  }
}
