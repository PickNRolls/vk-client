import { json } from 'api';
import decode from 'jwt-decode';
import User from 'typing/User';

interface LoginReqBody {
  username: string;
  password: string;
}

interface LoginResBody {
  jwtToken: string;
}

const LOCAL_STORAGE_KEY = 'jwt_token';

class AuthService {
  login(username: string, password: string): void {
    json<LoginReqBody, LoginResBody>({
      method: 'POST',
      endpoint: '/login',
      body: {
        username,
        password,
      }
    })
    .then(body => {
      this.setToken(body.jwtToken);
    })
    .catch(error => {
      console.error(error);
    });
  }

  logout(): void {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token): boolean {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
      else {
        return false;
      }
    }
    catch (err) {
      return false;
    }
  }

  setToken(token: string): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, token)
  }

  getToken(): string {
    return localStorage.getItem(LOCAL_STORAGE_KEY)
  }

  getUser(): User {
    return decode(this.getToken());
  }
}

export default new AuthService();
