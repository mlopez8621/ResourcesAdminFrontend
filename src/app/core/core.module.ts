
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FasesService } from './services/fases.service';
import { RecursosServicio } from './services/recursos.service';
import { CrearService } from './services/crear.service';
@NgModule({
    imports: [
        CommonModule
    ]
})

export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                FasesService,
                RecursosServicio,
                CrearService
            ]
        };
    }
}
