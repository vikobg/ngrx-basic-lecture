import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromUser from './state/user.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './state/user.effects';
import { UserListComponent } from './components/user-list/user-list.component';



@NgModule({
  declarations: [UserListComponent],
  exports: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule { }
