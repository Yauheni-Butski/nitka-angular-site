import { Component } from '@angular/core';
import { PriceItem } from '../../../models/priceItem';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
  priceItems: PriceItem[] = [
    {
      price: 100,
      currencySymbol: '$',
      name: 'Свадьба',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      packages: [
        {
          price: 100,
          currencySymbol: '$',
          name: 'До 4 часов',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          price: 200,
          currencySymbol: '$',
          name: 'До 8 часов',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    },
    {
      price: 50,
      currencySymbol: '$',
      name: 'День рождения',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      packages: [
        {
          price: 50,
          currencySymbol: '$',
          name: 'До 2 часов',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          price: 85,
          currencySymbol: '$',
          name: 'До 4 часов',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    },
    {
      price: 150,
      currencySymbol: '$',
      name: 'Love story',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      packages: [
        {
          price: 150,
          currencySymbol: '$',
          name: '1 час на улице',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          price: 200,
          currencySymbol: '$',
          name: '1 час в студии',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    },
    {
      price: 50,
      currencySymbol: '$',
      name: 'Съёмка новорождённых',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      packages: [
        {
          price: 50,
          currencySymbol: '$',
          name: '1 час на улице',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          price: 80,
          currencySymbol: '$',
          name: '1 час в студии',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    },
    {
      price: 100,
      currencySymbol: '$',
      name: 'Рекламная съёмка',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      packages: [
        {
          price: 100,
          currencySymbol: '$',
          name: 'До 2 часов',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          price: 200,
          currencySymbol: '$',
          name: 'До 4 часов',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    }
  ];
}
