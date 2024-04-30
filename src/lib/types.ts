// src/lib/types.ts
export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
  GUEST = 'guest'  // Assuming 'guest' as non-authenticated users
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
}

export interface Session {
  user?: User;
}
