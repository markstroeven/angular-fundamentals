import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AwesomeBoxService} from './awesome-box/awesome-box.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AwesomeBoxService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
