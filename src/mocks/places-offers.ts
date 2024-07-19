import { Offer } from '../types/offer-type';

const placesOffers: Offer[] = [
  {
    'id': '6779022c-ac26-4554-ac2e-227dd6349161',
    'title': 'House in countryside',
    'type': 'house',
    'price': 495,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8
  },
  {
    'id': '8616b887-ac5f-41ae-a1d2-6ef5a5aa7e13',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 410,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 2.8
  },
  {
    'id': 'e01c8700-5694-4640-80e6-3ace9e158cf0',
    'title': 'House in countryside',
    'type': 'house',
    'price': 535,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 2.3
  },
  {
    'id': '9abaa506-5e9e-493f-9a35-23c537646919',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 438,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.5
  },
  {
    'id': '4890374a-9465-47a5-9f3d-bcdd5f861cc2',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 258,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.9
  },
  {
    'id': '7c941d2d-fc4c-4325-ae80-6fa0db8525d2',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 166,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': '1fd25b8d-e0fe-452d-a78c-24e2427ae41a',
    'title': 'Tile House',
    'type': 'room',
    'price': 161,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4
  },
  {
    'id': 'a64b6904-6879-455a-9ca8-2e9e0eec168a',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 109,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.3454990000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.9
  },
  {
    'id': '26f61f29-9a31-43b5-8a65-a1275fadd67a',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 126,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84761,
      'longitude': 2.356499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.9
  },
  {
    'id': '05e54abb-6df4-4be0-a40c-3192301f830f',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 259,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.862610000000004,
      'longitude': 2.369499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': '3c781387-a7de-4248-8ed9-f0d4b106be10',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 277,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83861,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.1
  },
  {
    'id': '7edecfb3-5245-490b-af5e-05437374dd63',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 289,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.861610000000006,
      'longitude': 2.340499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': '877a05e5-a5ba-49d7-b38d-cd64d431294c',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 255,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87861,
      'longitude': 2.357499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': 'a25d6b9b-451b-4b06-a7bf-7aad81b6cfe6',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 443,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.877610000000004,
      'longitude': 2.333499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': 'cd5397b0-5061-4607-ab6d-2734d6663943',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 346,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83961,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5
  },
  {
    'id': '8bade9a6-a5b6-4e82-8f2c-f82fcc33f042',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 988,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.865610000000004,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5
  },
  {
    'id': 'f3275d30-0863-481d-94ed-d31e7f165a4b',
    'title': 'House in countryside',
    'type': 'room',
    'price': 256,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.846610000000005,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.3
  },
  {
    'id': '941cf58c-e73f-47dc-b4df-3fa1fb2b11c6',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 635,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': 'bcf2f2a7-e3fb-4485-8777-e60c94365848',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 272,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.843610000000005,
      'longitude': 2.338499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3
  },
  {
    'id': '3fbc98e6-6c9e-4b0c-9c0a-ba8cd5a0eb37',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 916,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84461,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.6
  },
  {
    'id': '377a1bd7-e3a9-4e70-a8d2-2e4ff5752fec',
    'title': 'Perfectly located Castro',
    'type': 'room',
    'price': 263,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.950361,
      'longitude': 6.961974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': 'e20dc4b2-48ac-4705-b062-c68d883d8ab0',
    'title': 'House in countryside',
    'type': 'house',
    'price': 241,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.3
  },
  {
    'id': '1d24b889-e2c9-47a0-9877-33650a9aa481',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 341,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.934361,
      'longitude': 6.943974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.2
  },
  {
    'id': 'df0ba350-567c-4b31-9ad8-93e9c4e8645f',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 144,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.947361,
      'longitude': 6.9799739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': 'd12129f0-6936-4209-8c47-00f07f387a82',
    'title': 'House in countryside',
    'type': 'house',
    'price': 130,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.967974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.2
  },
  {
    'id': 'c488d99e-f474-4334-afc5-7f7f7973f315',
    'title': 'Canal View Prinsengracht',
    'type': 'room',
    'price': 227,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.941361,
      'longitude': 6.956974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.2
  },
  {
    'id': '6d7d21ec-d168-4fbb-b497-ca55dd01b052',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 473,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.916361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2
  },
  {
    'id': '747d4d86-ab53-4810-bed2-221aadca2670',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 207,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.949361,
      'longitude': 6.976974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': 'a668e268-8f58-483f-90b6-d3bfde3f7fe4',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 447,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.913361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1
  },
  {
    'id': '0f969afe-f532-45ab-bb73-d9ec026949f6',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 118,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.930361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.8
  },
  {
    'id': '18d23ea2-9460-41be-981b-1f6275a49e65',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 912,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.5
  },
  {
    'id': '77e7bfc6-eb4d-440e-a3a2-1c4afa6da1b7',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 128,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.918461,
      'longitude': 6.969974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1
  },
  {
    'id': '1375fada-d0ce-485d-acfb-ce19286edef0',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'house',
    'price': 259,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.957361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '3491973f-99ae-4054-9350-e9f5669402b2',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 215,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.951361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': 'c9c50516-804a-4aaf-9b20-eab076f7c622',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 104,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.959361,
      'longitude': 6.978974,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': 'dd3393df-63e9-4061-96f5-1928b3023cc9',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 213,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.960974,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 2.9
  }
];

export {placesOffers};
