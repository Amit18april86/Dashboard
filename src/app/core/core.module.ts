import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app/app.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { ToolbarComponent } from './containers/toolbar/toolbar.component';
import { CoreRoutingModule } from './core-routing.module';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

const MAT_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule
];

@NgModule({
  imports: [
    CommonModule,
    MAT_MODULES,
    CoreRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ToolbarComponent
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
