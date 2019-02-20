import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { RestaurantsService } from '../restaurants/restaurants.service'
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant //atributo

  constructor(private restaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() { //metodo
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  } 

}
