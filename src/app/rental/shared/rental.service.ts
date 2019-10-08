import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rental} from './rental.model';

@Injectable()
export class RentalService {
  private rentals: Rental[] = [{
    id: '1',
    title: 'Central Apartment',
    city: 'New York',
    street: 'Time Squares',
    category: 'apartment',
    image: 'http://via.placeholder.com/350x250',
    bedrooms: '9',
    description: 'Very nice apartment',
    dailyRate: '909',
    createdAt: '24/12/2017'
  },
    {
      id: '2',
      title: 'Central Apartment',
      city: 'San Francisco',
      street: 'Time Squares',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: '4',
      description: 'Very nice apartment',
      dailyRate: '92',
      createdAt: '24/12/2017'
    },
    {
      id: '3',
      title: 'Central Apartment',
      city: 'Bratislava',
      street: 'Time Squares',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: '8',
      description: 'Very nice apartment',
      dailyRate: '101',
      createdAt: '24/12/2017'
    },
    {
      id: '4',
      title: 'Central Apartment',
      city: 'Berlin',
      street: 'Time Squares',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: '3',
      description: 'Very nice apartment',
      dailyRate: '42',
      createdAt: '24/12/2017'
    }];

  public getRentalById(rentalId: string): Observable<Rental> {
    return new Observable<Rental>((observer) => {
      const foundRental = this.rentals.find((rental) => {
        return rental.id === rentalId;
      });
      observer.next(foundRental);
    });
  }

  public getRentals(): Observable<Rental[]> {
    return new Observable<Rental[]>((observer) => {
      observer.next(this.rentals);
    });
  }
}
