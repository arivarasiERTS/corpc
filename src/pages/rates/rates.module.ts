import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatesPage } from './rates';
//import { SmileRateModule } from '../../components/smile-rate/smile-rate.module';

@NgModule({
  declarations: [
    RatesPage
  ],
  imports: [
	//SmileRateModule,
    IonicPageModule.forChild(RatesPage)
  ],
  exports: [
    RatesPage
  ]
})
export class RatesPageModule {}
