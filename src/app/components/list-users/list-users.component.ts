import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styles: [
  ]
})
export class ListUsersComponent implements OnInit {
  flagShowForm:boolean = false;
  userForm: FormGroup;
  listUsers:any;
  newUser:any = [];
  count:number = 0;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _userService: UsersService

  ) { 
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      phone: [''],
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this._userService.getUsers().then( (res:any) =>{
      console.log(res.response['results']);
      this.listUsers = res.response['results']
      console.log(this.listUsers);

      if(localStorage.getItem('users')){
        let hola:any = localStorage.getItem('users');
        let usersLocal = JSON.parse(hola);
        for (let index = 0; index <= usersLocal.length-1; index++) {
          this.listUsers.push(usersLocal[index])
        }        
      }
      console.log(this.listUsers);


    }).catch(err=>{

      console.log(err);
    });
  }
  newItem(){
    this.flagShowForm = true
  }
  addUser(){
    
    let user = {
      name: this.userForm.get('name')?.value,
      age: this.userForm.get('age')?.value,
      sex: this.userForm.get('sex')?.value,
      phone: this.userForm.get('phone')?.value
    };
    this.newUser[this.count] = user;   

    localStorage.setItem('users', JSON.stringify(this.newUser));
    this.toastr.success('User register success!', 'OK!');
    this.count++;
    this.listUsers.push(user);
    this.userForm.reset();

    
    console.log(this.listUsers);
  }
  cancelAdd(){
    this.flagShowForm = false;
    this.userForm.reset();
  }
  randon(){
    return  Math.floor(Math.random() * 100);
  }
}
