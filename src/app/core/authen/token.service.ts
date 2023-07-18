import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly tokenKey = 'access_token';

  constructor() {
  }

  // Hàm kiểm tra người dùng đã đăng nhập hay chưa
  isLoggedIn(): boolean {
    // Kiểm tra xem token có tồn tại trong local storage hay không
    return !!this.getToken(); // Trả về true nếu token tồn tại, false nếu không tồn tại
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(tokenValue: string): void {
    localStorage.setItem(this.tokenKey, tokenValue);
  }

  // Xóa token khỏi local storage
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  static isLoggedIn() {
    return false;
  }
}
