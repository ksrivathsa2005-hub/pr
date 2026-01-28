import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface UserInfo {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  users: UserInfo[] = [
    {
        name: "Praneeth",
        email: "praneeth@gmail.com",
        message:"hi how are you"
    },
    {
        name: "John",
        email: "john@gmail.com",
        message: "hello john"
    },
    {
        name: "Sarah",
        email: "sarah@gmail.com",
        message: "whats up?"
    },
    {
        name: "Mike",
        email: "mike@gmail.com",
        message:"yooo mike"
    }
  ];

  newUser: UserInfo = {
    name: "",
    email: "",
    message: ""
  };

  addContact() {
    if (this.newUser.name && this.newUser.email && this.newUser.message) {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        message: this.newUser.message
      });
      this.newUser = {
        name: "",
        email: "",
        message: ""
      };
    }
  }
}