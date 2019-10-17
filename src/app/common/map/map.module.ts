
import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import { AgmCoreModule } from '@agm/core';
import {MapService} from './map.service';
import {CamelizePipe} from 'ngx-pipes';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyCeMkEmMYVk6G836lCGDxOMa6s3mmPhGoM '
    }),
    CommonModule
  ],
  exports: [
    MapComponent
  ],
  providers: [
    MapService,
    CamelizePipe
  ]
})
export class MapModule {
}
