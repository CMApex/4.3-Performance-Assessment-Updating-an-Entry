import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/book-list', pathMatch: 'full' },
  { path: 'book-list', component: BookListComponent },
  { path: 'book-form', component: BookFormComponent },
  { path: 'book-form/:id', component: BookFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
