import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from '../logged/home/home.component';
import { PartesComponent } from './partes/partes.component';
import { NuevoComponent } from './partes/nuevo/nuevo.component';
import { AuthGuard } from '../shared/guards/auth.guard';



const routes: Routes = [
    
    { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
    { path: 'partes', component: PartesComponent,  canActivate:[AuthGuard],
        children:[
                    {path:'nuevo', component:NuevoComponent,  canActivate:[AuthGuard]}    
                ]
    }
    

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoggedRoutingModule {}