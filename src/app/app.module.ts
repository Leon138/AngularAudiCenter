import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AudiModelsComponent } from './components/audi-models/audi-models.component';
import { TestDriveComponent } from './components/test-drive/test-drive.component';
import { RepairComponent } from './components/repair/repair.component';
import { HeaderComponent } from './components/header/header.component';
import { AutoPartsComponent } from './components/auto-parts/auto-parts.component';
import { AutoPartsItemComponent } from './components/auto-parts-item/auto-parts-item.component';
import { AccumulatorsComponent } from './components/details/to-and-filters/rashodniki/accumulators/accumulators.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { KomplectGrmComponent } from './components/details/to-and-filters/rashodniki/komplect-grm/komplect-grm.component';
import { RemenGrmComponent } from './components/details/to-and-filters/rashodniki/remen-grm/remen-grm.component';
import { SvechaComponent } from './components/details/to-and-filters/rashodniki/svecha/svecha.component';
import { TormozDiskComponent } from './components/details/to-and-filters/rashodniki/tormoz-disk/tormoz-disk.component';
import { KolodkiComponent } from './components/details/to-and-filters/rashodniki/kolodki/kolodki.component';
import { AirFiltersComponent } from './components/details/to-and-filters/filters/air-filters/air-filters.component';
import { MaslFiltersComponent } from './components/details/to-and-filters/filters/masl-filters/masl-filters.component';
import { ToplFiltersComponent } from './components/details/to-and-filters/filters/topl-filters/topl-filters.component';
import { FiltrKorobkiComponent } from './components/details/to-and-filters/filters/filtr-korobki/filtr-korobki.component';
import { FiltersSalonaComponent } from './components/details/to-and-filters/filters/filters-salona/filters-salona.component';
import { TormoznojSupportComponent } from './components/details/brake-system/hydraulics-system/tormoznoj-support/tormoznoj-support.component';
import { PorshensComponent } from './components/details/motor-parts/motor-elements/porshens/porshens.component';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AudiModelsComponent,
    TestDriveComponent,
    RepairComponent,
    HeaderComponent,
    AutoPartsComponent,
    AutoPartsItemComponent,
    AccumulatorsComponent,
    CartComponent,
    FooterComponent,
    KomplectGrmComponent,
    RemenGrmComponent,
    SvechaComponent,
    TormozDiskComponent,
    KolodkiComponent,
    AirFiltersComponent,
    MaslFiltersComponent,
    ToplFiltersComponent,
    FiltrKorobkiComponent,
    FiltersSalonaComponent,
    TormoznojSupportComponent,
    PorshensComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE', // 'de-DE' for Germany, 'fr-FR' for France ...
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
