
import { Injector, StaticProvider, HttpClient  } from '@farris/mobile-devkit';
import { SaleOrderProxy } from './model.proxy';
import { ModelRepository } from "./model.repository";

const ModelProviders: StaticProvider[] = [
        { provide: SaleOrderProxy, useClass: SaleOrderProxy, deps: [HttpClient] },
        { provide: ModelRepository, useClass: ModelRepository, deps: [Injector] }
]
export { ModelProviders };