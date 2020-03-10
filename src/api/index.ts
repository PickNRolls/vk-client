import json from './json';
import AuthService from './AuthService';

declare global {
  interface Window {
    AuthService: typeof AuthService;
  }
}
window.AuthService = AuthService;

export { json, AuthService };
