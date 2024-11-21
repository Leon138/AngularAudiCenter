import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiModelsComponent } from './components/audi-models/audi-models.component';
import { AutoPartsComponent } from './components/auto-parts/auto-parts.component';
import { CartComponent } from './components/cart/cart.component';
import { TormoznojSupportComponent } from './components/details/brake-system/hydraulics-system/tormoznoj-support/tormoznoj-support.component';
import { PorshensComponent } from './components/details/motor-parts/motor-elements/porshens/porshens.component';
import { AirFiltersComponent } from './components/details/to-and-filters/filters/air-filters/air-filters.component';
import { FiltersSalonaComponent } from './components/details/to-and-filters/filters/filters-salona/filters-salona.component';
import { FiltrKorobkiComponent } from './components/details/to-and-filters/filters/filtr-korobki/filtr-korobki.component';
import { MaslFiltersComponent } from './components/details/to-and-filters/filters/masl-filters/masl-filters.component';
import { ToplFiltersComponent } from './components/details/to-and-filters/filters/topl-filters/topl-filters.component';
import { AccumulatorsComponent } from './components/details/to-and-filters/rashodniki/accumulators/accumulators.component';
import { KolodkiComponent } from './components/details/to-and-filters/rashodniki/kolodki/kolodki.component';
import { KomplectGrmComponent } from './components/details/to-and-filters/rashodniki/komplect-grm/komplect-grm.component';
import { RemenGrmComponent } from './components/details/to-and-filters/rashodniki/remen-grm/remen-grm.component';
import { SvechaComponent } from './components/details/to-and-filters/rashodniki/svecha/svecha.component';
import { TormozDiskComponent } from './components/details/to-and-filters/rashodniki/tormoz-disk/tormoz-disk.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RepairComponent } from './components/repair/repair.component';
import { TestDriveComponent } from './components/test-drive/test-drive.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'models', component: AudiModelsComponent },
  { path: 'repair', component: RepairComponent },
  { path: 'test-drive', component: TestDriveComponent },
  { path: 'auto-parts', component: AutoPartsComponent },
  { path: 'auto-parts/accumulators', component: AccumulatorsComponent },
  { path: 'auto-parts/komplect-grm', component: KomplectGrmComponent },
  { path: 'auto-parts/remen-grm', component: RemenGrmComponent },
  { path: 'auto-parts/svecha', component: SvechaComponent },
  { path: 'auto-parts/tormoznye-diski', component: TormozDiskComponent },
  { path: 'auto-parts/tormoznye-kolodki', component: KolodkiComponent },
  { path: 'auto-parts/air-filters', component: AirFiltersComponent },
  { path: 'auto-parts/masl-filters', component: MaslFiltersComponent },
  { path: 'auto-parts/topl-filters', component: ToplFiltersComponent },
  { path: 'auto-parts/filters-korobki', component: FiltrKorobkiComponent },
  { path: 'auto-parts/filters-salona', component: FiltersSalonaComponent },
  {
    path: 'auto-parts/tormoznoj-support',
    component: TormoznojSupportComponent,
  },
  { path: 'auto-parts/porshen', component: PorshensComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
