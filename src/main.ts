import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

import { TaskListComponent } from '../src/task-list/task-list.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: TaskListComponent }, // Default route
      { path: 'tasks', component: TaskListComponent }
    ])
  ]
}).catch(err => console.error(err));
