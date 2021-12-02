import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonFilterPipe } from './season-filter.pipe';

@NgModule({
  declarations: [SeasonFilterPipe],
  imports: [CommonModule],
  exports: [SeasonFilterPipe],
})
export class PipesModule {}
