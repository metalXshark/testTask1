import { Injectable } from '@angular/core';
import { User } from './user.model';  // Импортируем интерфейс User

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return [
      { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', active: true },
      { id: 2, name: 'Петр Петров', email: 'petr@example.com', active: false },
      { id: 3, name: 'Анна Сидорова', email: 'anna@example.com', active: true }
    ];
  }
}
