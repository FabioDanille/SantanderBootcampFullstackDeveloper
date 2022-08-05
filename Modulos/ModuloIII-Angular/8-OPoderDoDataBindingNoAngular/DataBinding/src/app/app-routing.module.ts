import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

  /* onde cadastra as rotas */
const routes: Routes = [
  {
    path: '', /* rota vazia será o componente abaixo */
    component: UsersListComponent
  }, 
  { path: 'form', component: UserFormComponent },
  { path: 'form/:id', component: UserFormComponent},

  { path: 'data-binding', component: DataBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
