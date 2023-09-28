import { NgModule } from '@angular/core';
import { TodosComponent } from './components/todo/todo.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TodoService } from './services/todos.service';
import { MainComponent } from './components/main/main.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  }
]

@NgModule({
  declarations: [TodosComponent, HeaderComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  providers: [TodoService]
})
export class TodosModule { }
