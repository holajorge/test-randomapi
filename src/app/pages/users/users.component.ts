import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  flagShowForm:boolean = false;
  userForm: FormGroup;
  listUsers:any;
  newUser:any = [];
  count:number = 0;
  columns = [{ prop: 'name', name:'Name'  }, { prop: 'age',name: 'Age' }, { prop: 'sex', name: 'Sex' }, { prop: 'phone', name: 'Phone' }];
  entries:number=10
  sexsLabel = [
    { id: 1, name: 'Famele' },
    { id: 2, name: 'Male' },
];
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
    this._userService.getUsers().subscribe( 
      (res:any) =>{

        this.listUsers = res

        if(localStorage.getItem('users')){
          let users:any = localStorage.getItem('users');
          let usersLocal = JSON.parse(users);
          if(this.listUsers){
            for (let index = 0; index <= usersLocal.length-1; index++) {
            console.log(usersLocal);              
                this.listUsers.push(usersLocal[index]);            
            }        
          }else{
            this.listUsers = usersLocal;
          }          
        }      
      }, 
      (err=>{
        console.log(err);
      })
    )
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
    
    this.newUser = this.listUsers;
    this.newUser.push(user);
    this.listUsers = this.newUser;

    console.log(this.newUser);
    console.log(this.listUsers);
    
    localStorage.setItem('users', JSON.stringify(this.newUser));
    this.toastr.success('User register success!', 'OK!');

    this.userForm.reset();
    this.flagShowForm = false;
    
  }
  cancelAdd(){
    this.flagShowForm = false;
    this.userForm.reset();
  }
  randon(){
    return  Math.floor(Math.random() * 100);
  }

}
