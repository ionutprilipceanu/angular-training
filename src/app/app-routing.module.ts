import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTestComponent } from './components/my-test/my-test.component';
import { SecondRouterComponent } from './components/second-router/second-router.component';

const routes: Routes = [
  { path: 'app-my-test', component: MyTestComponent },
  { path: 'app-second-router', component: SecondRouterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
