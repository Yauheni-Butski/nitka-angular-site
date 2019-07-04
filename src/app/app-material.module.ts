import { NgModule } from '@angular/core';

import { MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: []
})
export class AppMaterialModule { }
