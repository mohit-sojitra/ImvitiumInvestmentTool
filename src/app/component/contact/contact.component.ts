import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactModel } from '../../interfaces/contact.model';
import { ContactService } from '../../services/contact.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(
    private ContactService: ContactService,
    private NotificationService: NotificationService,
    private route:Router
  ) {}

  ngOnInit(): void {}
  onSubmit(ContactForm) {
    var contact: ContactModel = {
      name: ContactForm.value.name,
      email: ContactForm.value.email,
      message: ContactForm.value.message,
    };
    this.ContactService.SubmitContactUs(contact).subscribe(
      (res) => {
        this.NotificationService.showSuccess(
          'You respoce is recordered!! our team will contact you soon.',
          contact.name
        );
        this.route.navigate(['/']);
      },
      (error) => {
        this.NotificationService.showError(contact.name, error);
      }
    );
  }
}
