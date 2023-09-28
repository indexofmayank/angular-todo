import { Component } from "@angular/core";
import { Observable, combineLatest, map } from "rxjs";
import { TodoInterface } from "../../types/todo.interface";
import { TodoService } from "../../services/todos.service";
import { FilterEnum } from "../../types/filter.enum";

@Component({
    selector: 'app-todos-main',
    templateUrl: './main.component.html'
})
export class MainComponent {
    visibleTodos$: Observable<TodoInterface[]>;

    constructor(private todoService: TodoService) {
        this.visibleTodos$ = combineLatest(
            this.todoService.todos$,
            this.todoService.filter$
        ).pipe(map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
            if (filter === FilterEnum.active) {
                return todos.filter((todo) => !todo.isCompleted);
            } else if (filter === FilterEnum.completed) {
                return todos.filter((todo) => todo.isCompleted)
            }
            return todos;
        }));
    }

}