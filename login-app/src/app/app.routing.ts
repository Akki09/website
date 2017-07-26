import { Routes,RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component'

const arr:Routes = [
    
    // { path:'', redirectTo:'login', pathMatch:'full' },
    { path:'first', component:FirstPageComponent }, 
    { path:'login', component:LoginComponent },
    { path:'registration', component:RegistrationComponent },
    { path:'aboutUs', component:AboutUsComponent }
];

export const routing = RouterModule.forRoot(arr);

