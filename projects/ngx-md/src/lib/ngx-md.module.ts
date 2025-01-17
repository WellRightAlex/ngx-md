// import { NgModule } from '@angular/core';
// import { NgxMdComponent } from './ngx-md.component';



// @NgModule({
//   declarations: [
//     NgxMdComponent
//   ],
//   imports: [
//   ],
//   exports: [
//     NgxMdComponent
//   ]
// })
// export class NgxMdModule { }



import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxMdService } from './ngx-md.service';
import { NgxMdConfig } from './ngx-md.config';
import { NgxMdComponent } from './ngx-md.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxMdComponent],
  providers: [NgxMdService],
  exports: [NgxMdComponent],
})
export class NgxMdModule {
  public static forRoot(): ModuleWithProviders<NgxMdModule> {
    return {
      ngModule: NgxMdModule,
      providers: [NgxMdConfig],
    };
  }
}
