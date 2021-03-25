import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from '../logged/home/home.component';
import { PartesComponent } from './partes/partes.component';
import { NuevoComponent } from './partes/nuevo/nuevo.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ListaComponent } from './partes/lista/lista.component';



const routes: Routes = [
    
    {   path: 'home', 
        component: HomeComponent, 
        canActivate:[AuthGuard],
        data:{role:"Operario,Encargado"}
    },
    {   path: 'partes', 
        component: PartesComponent,  
        canActivate:[AuthGuard],
        data:{role:"Operario,Encargado"},
        children:[
                    {path:'nuevo', component:NuevoComponent,  canActivate:[AuthGuard],data:{role:"Operario,Encargado"}},
                    {path:'lista', component:ListaComponent,  canActivate:[AuthGuard],data:{role:"Encargado"}},    

                ],
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