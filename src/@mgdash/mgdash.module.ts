import {
    ModuleWithProviders,
    NgModule,
    Optional,
    SkipSelf,
} from "@angular/core";

import { MGDASH_CONFIG } from "@mgdash/services/config.service";

@NgModule()
export class MgdashModule {
    constructor(@Optional() @SkipSelf() parentModule: MgdashModule) {
        if (parentModule) {
            throw new Error(
                "MgdashModule is already loaded. Import it in the AppModule only!"
            );
        }
    }

    static forRoot(config): ModuleWithProviders<MgdashModule> {
        return {
            ngModule: MgdashModule,
            providers: [
                {
                    provide: MGDASH_CONFIG,
                    useValue: config,
                },
            ],
        };
    }
}
