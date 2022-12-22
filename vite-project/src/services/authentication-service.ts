//Basic authentication
export default class AuthenticationService {

  static isAuthenticated: boolean = false;
  
  static login(username: string, password: string): Promise<boolean> {
    const isAuthenticated = (username === 'Christiano' && 
      password === '1234567' || username === 'Jeanne' && password === '1234567');
    
    return new Promise(resolve => {
      setTimeout(() => {
        this.isAuthenticated = isAuthenticated;
        resolve(isAuthenticated);
      }, 1000);
    });
  }
}
