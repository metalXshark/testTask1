import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { CommonModule } from '@angular/common'; // Импортируем CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule] // Добавляем CommonModule в imports
})
export class AppComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  selectedUser: User | null = null;
  searchTerm = '';
  filterStatus = 'all';
  noResults = false; // Переменная для проверки наличия пользователей

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.filteredUsers = this.users;
  }

  // Обработчик изменения поиска
  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
    this.filterUsers();
  }

  // Обработчик изменения фильтра по статусу
  onFilterChange(event: any) {
    this.filterStatus = event.target.value;
    this.filterUsers();
  }

  // Открытие подробностей пользователя
  onUserClick(user: User) {
    this.selectedUser = user;
  }

  // Закрытие подробностей пользователя
  onCloseDetails() {
    this.selectedUser = null;
  }

  // Фильтрация пользователей по имени и статусу
  filterUsers() {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = (this.filterStatus === 'all') ||
        (this.filterStatus === 'active' && user.active) ||
        (this.filterStatus === 'inactive' && !user.active);
      return matchesSearch && matchesStatus;
    });

    // Проверяем, есть ли результаты
    this.noResults = this.filteredUsers.length === 0;
  }
}
