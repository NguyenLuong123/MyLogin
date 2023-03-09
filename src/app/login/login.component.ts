import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string;
  password: string;
  isSucess: boolean;
  constructor(){
    
  }
  ngOnInit(): void {
  }

  Login(){
    if (this.username == "Luong" && this.password == "123"){
      this.isSucess = true;
    } else {
      this.username = "";
      this.password = "";
      alert("Đăng nhập không thành công");
      
    }
  }

}

