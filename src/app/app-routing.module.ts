import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllblogsComponent } from "./maincomponents/allblogs/allblogs.component";
import { BlogComponent } from "./maincomponents/blog/blog.component";


const routes: Routes = [
  {path: '', component: AllblogsComponent, data: {message: 'All Blogs'}},
  {path: 'blog', component: BlogComponent, data: {message: 'Blog'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
