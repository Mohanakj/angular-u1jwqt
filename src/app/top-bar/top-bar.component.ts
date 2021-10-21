import { BuiltinTypeName } from '@angular/compiler/src/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  buss() {
    alert('Cart is available');
  }
  list() {
    alert('Please see the wishlist.. for the details');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
