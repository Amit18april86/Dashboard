import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule} from '@angular/material';
import {Routes} from '@angular/router';
import {AuthRoutingModule} from './auth-routing.module';
import {StoreFeatureModule, StoreModule} from '@ngrx/store';
import {reducers} from './reducers/index';
import {ReactiveFormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {LoginService} from "./services/login.service";
import {LoginEffectService} from "./effects/login-effect.service";

const MAT_MODULES = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
];
const COMPONENTS = [LoginPageComponent, LoginFormComponent];
@NgModule({
  imports: [
    CommonModule,
    MAT_MODULES,
    ReactiveFormsModule,
    AuthRoutingModule,
    EffectsModule.forFeature([LoginEffectService]),
    StoreModule.forFeature('auth', reducers),
  ],
  declarations: [
    COMPONENTS
  ],
  exports: [
    LoginPageComponent
  ]
})
export class AuthModule {
 public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [LoginService]
    };
  }
}
