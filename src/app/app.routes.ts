import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:"body",
        loadComponent:()=>import("./components/body/body.component").then(c=>c.BodyComponent)
    },
    {
        path:"ngiffor",
        loadComponent:()=>import("./components/ng-if-for16/ng-if-for16.component").then(c=>c.NgIfFor16Component)
    },
    {
        path:"ngswitch",
        loadComponent:()=>import("./components/switch16/switch16.component").then(c=>c.Switch16Component)
    },
    {
        path:"ngiffor17",
        loadComponent:()=>import("./components/ng-if-for17/ng-if-for17.component").then(c=>c.NgIfFor17Component)
    },
    {
        path:"ngswitch17",
        loadComponent:()=>import("./components/switch17/switch17.component").then(c=>c.Switch17Component)
    },
    {
        path:"ngstyle",
        loadComponent:()=>import("./components/ngstyle/ngstyle.component").then(c=>c.NgstyleComponent)
    },
    {
        path:"ngclass",
        loadComponent:()=>import("./components/ngclass/ngclass.component").then(c=>c.NgclassComponent)
    },
    {
        path:"databinding",
        loadComponent:()=>import("./components/databinding/databinding.component").then(c=>c.DatabindingComponent)
    },
    {
        path:"pipes",
        loadComponent:()=>import("./components/pipes/pipes.component").then(c=>c.PipesComponent)
    },
    {
        path:"ejemplo1",
        loadComponent:()=>import("./components/ejemplo1/ejemplo1.component").then(c=>c.Ejemplo1Component)
    },
    {
        path:"formulario",
        loadComponent:()=>import("./components/formulario-reactivo/formulario-reactivo.component").then(c=>c.FormularioReactivoComponent)
    },
    {
        path:"padre-hijo",
        loadComponent:()=>import("./components/padre/padre.component").then(c=>c.PadreComponent)
    },
    {
        path:"servicios",
        loadComponent:()=>import("./components/servicios-users/servicios-users.component").then(c=>c.ServiciosUsersComponent)
    },
    {
        path:"crud",
        loadComponent:()=>import("./components/crud-cliente/crud/crud.component").then(c=>c.CrudComponent)
    },
    {
        path:"formcrud",
        loadComponent:()=>import("./components/crud-cliente/formulario/formulario.component").then(c=>c.FormularioComponent)
    },
    {
        path:"formcrud/:id",
        loadComponent:()=>import("./components/crud-cliente/formulario/formulario.component").then(c=>c.FormularioComponent)
    },
    {//localhost por defecto
        path:"",
        redirectTo: "/body",
        pathMatch: "full"
    },
    {
        path:"**",
        loadComponent:()=>import("./components/pagina404/pagina404.component").then(c=>c.Pagina404Component)
    },
    

];
