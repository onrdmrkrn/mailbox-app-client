import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AppComponent} from "./app.component";
import {PublisherComponent} from "./publisher/publisher.component";
import {ConsumerComponent} from "./consumer/consumer.component";
import {DetailComponent} from "./detail/detail.component";
import {DialogBodyComponent} from "./dialog-body/dialog-body.component";
import {NewmessageComponent} from "./newmessage/newmessage.component";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'mainpage',
    component: AppComponent
  },
  {
    path: 'publisher',
    component: PublisherComponent
  }
  , {
    path: 'consumer',
    component: ConsumerComponent
  },
  {
    path: 'detail/:messageId',
    component: DetailComponent
  },
  {
    path: 'dialogbody',
    component: DialogBodyComponent
  },
  {
    path: 'newmessage',
    component: NewmessageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
