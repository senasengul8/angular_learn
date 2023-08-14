import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../Models/user.model';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
 
  user: User = new User(); // Initialize an empty user object

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Send an HTTP POST request to your API
    this.http.post('your-api-url-here/Test/SaveUser', this.user).subscribe(
      (response) => {
        console.log('User saved successfully!', response);
        // Reset the form or perform any other actions on success
        this.user = new User(); // Clear the user object for a new entry
      },
      (error) => {
        console.error('Error saving user:', error);
        // Handle error appropriately
      }
    );
  }
}
