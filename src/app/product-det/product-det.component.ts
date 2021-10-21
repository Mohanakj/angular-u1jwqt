import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product, products } from '../products';
@Component({
  selector: 'app-product-det',
  templateUrl: './product-det.component.html',
  styleUrls: ['./product-det.component.css'],
})
export class ProductDetComponent implements OnInit {
  product: Product | undefined;
  // constructor (private route: Router)
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
  Image() {
    // alert('this');

    this.router.navigate(['/'+'product-image']);
  }
}
