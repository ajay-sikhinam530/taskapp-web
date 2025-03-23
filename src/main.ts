import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // ✅ Import this
import { AppComponent } from './app/app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: TaskListComponent },
      { path: 'tasks', component: TaskListComponent },
      { path: 'add-task', component: TaskFormComponent } // ✅ Add route for form
    ]),
    provideHttpClient() // ✅ Add this to enable HTTP requests
  ]
}).catch(err => console.error(err));
