import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ContactModel } from '../interfaces/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private HttpClient:HttpClient) { }

  SubmitContactUs(contact : ContactModel){
    return this.HttpClient.post(environment.baseUrl+'/api/public/api/contact',contact);
  }
}
