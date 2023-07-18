import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../core/authen/token.service";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  searchField = {
    page: 1,
    size: 10,
    textSearch: ''
  };
  totalRecords = 0;
  dataTable: any[] = [];

  constructor(private tokenService: TokenService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers(this.searchField).subscribe((res) => {
      this.dataTable = res;
    })
  }

  pageChanged(event: any) {
    this.searchField.page = event; // Lấy index của trang mới
    // Thực hiện việc cập nhật dữ liệu cho bảng với trang mới tại đây
    this.getUsers();
  }

  logout(): void {
    this.tokenService.removeToken();
    this.router.navigate(['admin/sign-in'])
  }

}
