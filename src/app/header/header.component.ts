import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { AlertsService } from 'angular-alert-module';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService,
                private alert: AlertsService) {}

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response: Response) => {
                    // console.log(response);
                }
            );
        this.alert.setMessage('Data has been saved!', 'success');
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
        this.alert.setMessage('Data has been fetched!', 'success');
    }
}
