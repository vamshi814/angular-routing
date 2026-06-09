import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PopularComponent } from './home/popular/popular.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuardService } from './Services/authguard.service';
import { CanActivateFn } from './auth.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    // {path: '', redirectTo: Home, }
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'courses', component: CoursesComponent},
    //{path: 'courses/course/:id', component: CourseDetailComponent},
    // protects all children as old method 
    {path: 'courses', canActivateChild: [AuthGuardService], children:
      [
        {path: 'course/:id', component: CourseDetailComponent},
        {path: 'popular', component: PopularComponent},
        {path: 'checkout', component: CheckoutComponent, canActivate: [CanActivateFn] }
      ]
    },
    {path: 'login', component: LoginComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
