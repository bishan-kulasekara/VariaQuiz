// src/lib/UserModel.ts

export enum UserRole {
    ADMIN = 'admin',
    TEACHER = 'teacher',
    STUDENT = 'student',
  }
  
export class User {
    token : string = "";
    id:  string = "";
    name:  string = "";
    email:  string = "";
    password:  string = ""; // This will store the hashed password
    role: UserRole=UserRole.STUDENT;

    constructor();
	  // constructor(name: string, email: string, password: string) 
    constructor(name: string, email: string, password: string) {

      this.name = name ?? "";
		  this.email = email ?? "";
		  this.password = password ?? "";
	  }
}
  