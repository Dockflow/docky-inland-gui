import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

const modules = [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatExpansionModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatSortModule,
    MatTreeModule,
    MatTabsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatChipsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
];

@NgModule({
    declarations: [],
    providers: [],
    imports: modules,
    exports: modules,
})
export class MaterialModule {
    //
}
