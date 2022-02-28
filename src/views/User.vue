<template>
    <div class="container">
        <UserProfileCard :initial-user="user"/>

        <div class="row">
            <div class="col-md-4">
                <UserFollowingsCard :initial-followings="followings"/>
                <br>
                <UserFollowersCard :initial-followers="followers"/>
            </div>
            <div class="col-md-8">
                <UserCommentsCard :initial-comments="comments"/>
                <br>
                <UserFavoritedRestaurantsCard :favoritedRestaurants="favoritedRestaurants"/>
            </div>
        </div>
    </div>
</template>

<script>
import UserProfileCard from '../components/UserProfileCard.vue'
import UserFollowingsCard from '../components/UserFollowingsCard.vue'
import UserFollowersCard from '../components/UserFollowersCard.vue'
import UserCommentsCard from '../components/UserCommentsCard.vue'
import UserFavoritedRestaurantsCard from '../components/UserFavoritedRestaurantsCard.vue'

const dummyData = {
  'profile': {
    'id': 1,
    'name': 'root',
    'email': 'root@example.com',
    'isAdmin': true,
    'image': 'https://i.imgur.com/58ImzMM.png',
    'createdAt': '2019-07-30T16:24:54.983Z',
    'updatedAt': '2019-08-01T10:33:51.095Z',
    'Comments': [
      {
        'id': 17,
        'text': 'Inventore illo voluptas eligendi debitis ut sit.',
        'UserId': 1,
        'RestaurantId': 17,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 17,
          'name': 'Alexandro Bahringer',
          'tel': '293-115-4784',
          'address': '75754 Ashlynn Field',
          'opening_hours': '08:00',
          'description': 'Et dolores non harum. Non autem dolorem deserunt. Est sit ut aut assumenda vel voluptas. Eligendi cumque unde autem sed velit eligendi. Est occaecati asperiores corrupti. Quidem perferendis id fuga.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=46.018008252855424',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.436Z',
          'updatedAt': '2019-07-30T16:24:55.436Z',
          'CategoryId': 1
        }
      },
      {
        'id': 20,
        'text': 'Mollitia sint itaque.',
        'UserId': 1,
        'RestaurantId': 20,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 20,
          'name': 'Kathlyn Miller',
          'tel': '008.083.2181 x62854',
          'address': '0511 Syble Meadows',
          'opening_hours': '08:00',
          'description': 'Dolor facere asperiores explicabo voluptates voluptates accusantium. Adipisci qui cupiditate et. Voluptatibus odit et consequatur qui quos nisi. Quis quisquam qui reprehenderit.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=68.5893410293084',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.436Z',
          'updatedAt': '2019-07-30T16:24:55.436Z',
          'CategoryId': 5
        }
      },
      {
        'id': 21,
        'text': 'Odit voluptatem et est quasi.',
        'UserId': 1,
        'RestaurantId': 21,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 21,
          'name': 'Clovis Mayert',
          'tel': '1-292-930-4113 x0577',
          'address': '3255 Streich Inlet',
          'opening_hours': '08:00',
          'description': 'Nihil occaecati consectetur explicabo sint nobis beatae numquam.\nOdit quo enim officiis est eaque et velit facilis.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=31.579240610126313',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.436Z',
          'updatedAt': '2019-07-30T16:24:55.436Z',
          'CategoryId': 3
        }
      },
      {
        'id': 23,
        'text': 'Provident ducimus sed debitis deserunt recusandae incidunt iusto.',
        'UserId': 1,
        'RestaurantId': 23,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 23,
          'name': 'Obie Veum',
          'tel': '852.152.3521 x47973',
          'address': '543 Waters Bypass',
          'opening_hours': '08:00',
          'description': 'Ea voluptate fugiat id est voluptatem sit. Aut debitis qui impedit distinctio. Porro doloremque voluptas esse non temporibus ipsum. Illo dolore vel voluptatum vero qui ullam sed rerum eius.\n \rNecessitatibus debitis maiores veniam et neque mollitia dignissimos assumenda quisquam. In ipsa quo quod quo et nesciunt dolore id. Qui culpa labore. Qui velit praesentium vitae et et perspiciatis et.\n \rLaborum odit eum neque rerum. Dolorem consectetur placeat corporis. Amet delectus minima ipsa veniam. Non qui maxime porro exercitationem hic.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=47.513014434319146',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.437Z',
          'updatedAt': '2019-07-30T16:24:55.437Z',
          'CategoryId': 1
        }
      },
      {
        'id': 27,
        'text': 'Tenetur numquam non.',
        'UserId': 1,
        'RestaurantId': 27,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 27,
          'name': 'Penelope Mayert DDS',
          'tel': '1-775-369-6229',
          'address': '52148 Susan Pike',
          'opening_hours': '08:00',
          'description': 'non nobis quo',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=77.93437663958767',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.439Z',
          'updatedAt': '2019-07-30T16:24:55.439Z',
          'CategoryId': 1
        }
      },
      {
        'id': 29,
        'text': 'Vel beatae rerum sint similique rerum.',
        'UserId': 1,
        'RestaurantId': 29,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 29,
          'name': 'Alysson Kshlerin',
          'tel': '1-058-555-3466 x134',
          'address': '384 Homenick Drives',
          'opening_hours': '08:00',
          'description': 'Perspiciatis aut facere accusamus harum ipsum. Commodi quia pariatur ut qui voluptatum officiis eum velit. Veniam quia in nihil placeat quisquam veniam eveniet doloremque.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=82.75935793619603',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 5
        }
      },
      {
        'id': 30,
        'text': 'Ut est velit fugiat soluta facilis aut qui nihil dolore.',
        'UserId': 1,
        'RestaurantId': 30,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 30,
          'name': 'Lyda Bruen',
          'tel': '1-295-307-9128 x25682',
          'address': '79554 Kassulke Radial',
          'opening_hours': '08:00',
          'description': 'Et quam iste nulla ut et distinctio sunt omnis recusandae.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=25.932072460400413',
          'viewCounts': 1,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-31T04:26:33.945Z',
          'CategoryId': 1
        }
      },
      {
        'id': 34,
        'text': 'Numquam repudiandae distinctio quis id ut ad id voluptatibus.',
        'UserId': 1,
        'RestaurantId': 34,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 34,
          'name': 'Mr. Stephan Hermiston',
          'tel': '(973) 940-7729',
          'address': '9097 Maggio Fall',
          'opening_hours': '08:00',
          'description': 'cum fugiat exercitationem',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=97.2910546090258',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 2
        }
      },
      {
        'id': 35,
        'text': 'Et aut dolor dolor consequatur molestiae enim.',
        'UserId': 1,
        'RestaurantId': 35,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 35,
          'name': 'Katlynn Bernier',
          'tel': '670-552-7484',
          'address': '58478 Jalyn Way',
          'opening_hours': '08:00',
          'description': 'eligendi',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=95.63772194306041',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 4
        }
      },
      {
        'id': 38,
        'text': 'Sed quod ut sed vel quo voluptatem voluptates.',
        'UserId': 1,
        'RestaurantId': 38,
        'createdAt': '2019-07-30T16:24:55.452Z',
        'updatedAt': '2019-07-30T16:24:55.452Z',
        'Restaurant': {
          'id': 38,
          'name': 'Russel Rodriguez',
          'tel': '990.966.8912 x46650',
          'address': '386 Cummerata Path',
          'opening_hours': '08:00',
          'description': 'Quia dolores autem et. Tempore aut est rerum praesentium fugit est in aliquam. Rem laborum unde.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.02259586265372',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.441Z',
          'updatedAt': '2019-07-30T16:24:55.441Z',
          'CategoryId': 4
        }
      },
      {
        'id': 44,
        'text': 'Omnis quae corporis aut.',
        'UserId': 1,
        'RestaurantId': 44,
        'createdAt': '2019-07-30T16:24:55.452Z',
        'updatedAt': '2019-07-30T16:24:55.452Z',
        'Restaurant': {
          'id': 44,
          'name': 'Sonny Funk',
          'tel': '093-689-0372',
          'address': '908 Kassulke Landing',
          'opening_hours': '08:00',
          'description': 'Asperiores sequi doloribus. Alias corporis praesentium quas amet. Ad et delectus amet ea reiciendis. Perspiciatis aliquid sapiente doloremque. Ut hic reiciendis velit voluptates atque.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=88.97383668164223',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.442Z',
          'updatedAt': '2019-07-30T16:24:55.442Z',
          'CategoryId': 2
        }
      },
      {
        'id': 72,
        'text': 'Voluptas dicta iste sed unde nesciunt sequi esse.',
        'UserId': 1,
        'RestaurantId': 22,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 22,
          'name': 'Mr. Lavonne Grimes',
          'tel': '841.933.1636',
          'address': '298 Albin Road',
          'opening_hours': '08:00',
          'description': 'Quia eum eum sapiente sint distinctio eveniet.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=64.93265026937894',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.437Z',
          'updatedAt': '2019-07-30T16:24:55.437Z',
          'CategoryId': 2
        }
      },
      {
        'id': 76,
        'text': 'Aut voluptatem quod consequatur sequi sed voluptates sit aliquam.',
        'UserId': 1,
        'RestaurantId': 26,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 26,
          'name': 'Zoe Connelly',
          'tel': '724-565-0111',
          'address': '8718 Nolan Roads',
          'opening_hours': '08:00',
          'description': 'Ipsum aspernatur quis est voluptates maiores quam autem est. Nesciunt quibusdam velit. Qui iste quibusdam molestiae et molestias et. Officia ipsam facere. Voluptatum cum itaque qui necessitatibus amet et itaque. Sed consequuntur at omnis quos cupiditate accusantium tempore fugiat ut.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=51.62937107379864',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.438Z',
          'updatedAt': '2019-07-30T16:24:55.438Z',
          'CategoryId': 1
        }
      },
      {
        'id': 82,
        'text': 'Sapiente incidunt vitae reiciendis dignissimos sit natus quod.',
        'UserId': 1,
        'RestaurantId': 32,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 32,
          'name': 'Eriberto Zboncak V',
          'tel': '(626) 794-3858 x2457',
          'address': '372 Reinger Shores',
          'opening_hours': '08:00',
          'description': 'Veritatis non ratione temporibus impedit et id esse.\nItaque aut laudantium tempore corrupti consequuntur.\nQuae dolor doloribus quae at exercitationem sed velit.\nA beatae quis est iure numquam facilis.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=48.817524543311094',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 3
        }
      },
      {
        'id': 84,
        'text': 'Cumque corrupti architecto.',
        'UserId': 1,
        'RestaurantId': 34,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 34,
          'name': 'Mr. Stephan Hermiston',
          'tel': '(973) 940-7729',
          'address': '9097 Maggio Fall',
          'opening_hours': '08:00',
          'description': 'cum fugiat exercitationem',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=97.2910546090258',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 2
        }
      },
      {
        'id': 90,
        'text': 'Et doloremque quia earum nulla ipsam est sed ipsam.',
        'UserId': 1,
        'RestaurantId': 40,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 40,
          'name': 'Robyn Schroeder',
          'tel': '406.132.4400',
          'address': '647 Yundt Mountains',
          'opening_hours': '08:00',
          'description': 'Incidunt rerum perspiciatis ut iste ipsum labore.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=15.902129223636363',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.441Z',
          'updatedAt': '2019-07-30T16:24:55.441Z',
          'CategoryId': 2
        }
      },
      {
        'id': 102,
        'text': 'Illum suscipit cupiditate earum alias quam.',
        'UserId': 1,
        'RestaurantId': 2,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 2,
          'name': 'Annie Dooley',
          'tel': '228-349-0567 x9394',
          'address': '25552 Brando Crossing',
          'opening_hours': '08:00',
          'description': 'cumque',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=96.7530669611723',
          'viewCounts': 1,
          'createdAt': '2019-07-30T16:24:55.433Z',
          'updatedAt': '2019-07-30T16:51:48.621Z',
          'CategoryId': 5
        }
      },
      {
        'id': 103,
        'text': 'Fuga tenetur incidunt fuga.',
        'UserId': 1,
        'RestaurantId': 3,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 3,
          'name': 'Obie Wintheiser',
          'tel': '098-527-0731',
          'address': '7516 Gretchen Place',
          'opening_hours': '08:00',
          'description': 'sed sed eligendi',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=88.07176343116274',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.433Z',
          'updatedAt': '2019-07-30T16:24:55.433Z',
          'CategoryId': 2
        }
      },
      {
        'id': 130,
        'text': 'Voluptas dolores soluta fugit aliquid vitae.',
        'UserId': 1,
        'RestaurantId': 30,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 30,
          'name': 'Lyda Bruen',
          'tel': '1-295-307-9128 x25682',
          'address': '79554 Kassulke Radial',
          'opening_hours': '08:00',
          'description': 'Et quam iste nulla ut et distinctio sunt omnis recusandae.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=25.932072460400413',
          'viewCounts': 1,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-31T04:26:33.945Z',
          'CategoryId': 1
        }
      },
      {
        'id': 132,
        'text': 'Optio natus dolor inventore et voluptatem consequatur necessitatibus.',
        'UserId': 1,
        'RestaurantId': 32,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 32,
          'name': 'Eriberto Zboncak V',
          'tel': '(626) 794-3858 x2457',
          'address': '372 Reinger Shores',
          'opening_hours': '08:00',
          'description': 'Veritatis non ratione temporibus impedit et id esse.\nItaque aut laudantium tempore corrupti consequuntur.\nQuae dolor doloribus quae at exercitationem sed velit.\nA beatae quis est iure numquam facilis.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=48.817524543311094',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 3
        }
      }
    ],
    'FavoritedRestaurants': [
      {
        'id': 1,
        'name': 'Laurence Reynolds',
        'tel': '1-657-067-3756 x9782',
        'address': '187 Kirlin Squares',
        'opening_hours': '08:00',
        'description': 'sit est mollitia',
        'image': 'https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887',
        'viewCounts': 1,
        'createdAt': '2019-07-30T16:24:55.432Z',
        'updatedAt': '2019-07-30T17:26:43.260Z',
        'CategoryId': 3,
        'Favorite': {
          'UserId': 1,
          'RestaurantId': 1,
          'createdAt': '2019-07-30T16:25:54.586Z',
          'updatedAt': '2019-07-30T16:25:54.586Z'
        }
      },
      {
        'id': 30,
        'name': 'Lyda Bruen',
        'tel': '1-295-307-9128 x25682',
        'address': '79554 Kassulke Radial',
        'opening_hours': '08:00',
        'description': 'Et quam iste nulla ut et distinctio sunt omnis recusandae.',
        'image': 'https://loremflickr.com/320/240/restaurant,food/?random=25.932072460400413',
        'viewCounts': 1,
        'createdAt': '2019-07-30T16:24:55.440Z',
        'updatedAt': '2019-07-31T04:26:33.945Z',
        'CategoryId': 1,
        'Favorite': {
          'UserId': 1,
          'RestaurantId': 30,
          'createdAt': '2019-08-01T10:26:30.330Z',
          'updatedAt': '2019-08-01T10:26:30.330Z'
        }
      },
      {
        'id': 27,
        'name': 'Penelope Mayert DDS',
        'tel': '1-775-369-6229',
        'address': '52148 Susan Pike',
        'opening_hours': '08:00',
        'description': 'non nobis quo',
        'image': 'https://loremflickr.com/320/240/restaurant,food/?random=77.93437663958767',
        'viewCounts': null,
        'createdAt': '2019-07-30T16:24:55.439Z',
        'updatedAt': '2019-07-30T16:24:55.439Z',
        'CategoryId': 1,
        'Favorite': {
          'UserId': 1,
          'RestaurantId': 27,
          'createdAt': '2019-08-01T10:26:31.504Z',
          'updatedAt': '2019-08-01T10:26:31.504Z'
        }
      },
      {
        'id': 23,
        'name': 'Obie Veum',
        'tel': '852.152.3521 x47973',
        'address': '543 Waters Bypass',
        'opening_hours': '08:00',
        'description': 'Ea voluptate fugiat id est voluptatem sit. Aut debitis qui impedit distinctio. Porro doloremque voluptas esse non temporibus ipsum. Illo dolore vel voluptatum vero qui ullam sed rerum eius.\n \rNecessitatibus debitis maiores veniam et neque mollitia dignissimos assumenda quisquam. In ipsa quo quod quo et nesciunt dolore id. Qui culpa labore. Qui velit praesentium vitae et et perspiciatis et.\n \rLaborum odit eum neque rerum. Dolorem consectetur placeat corporis. Amet delectus minima ipsa veniam. Non qui maxime porro exercitationem hic.',
        'image': 'https://loremflickr.com/320/240/restaurant,food/?random=47.513014434319146',
        'viewCounts': null,
        'createdAt': '2019-07-30T16:24:55.437Z',
        'updatedAt': '2019-07-30T16:24:55.437Z',
        'CategoryId': 1,
        'Favorite': {
          'UserId': 1,
          'RestaurantId': 23,
          'createdAt': '2019-08-01T10:26:35.299Z',
          'updatedAt': '2019-08-01T10:26:35.299Z'
        }
      }
    ],
    'Followers': [
      {
        'id': 2,
        'name': 'user1',
        'email': 'user1@example.com',
        'password': '$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y',
        'isAdmin': false,
        'image': 'https://i.imgur.com/Q14p2le.jpg',
        'createdAt': '2019-07-30T16:24:55.204Z',
        'updatedAt': '2019-08-01T10:34:15.105Z',
        'Followship': {
          'followerId': 2,
          'followingId': 1,
          'createdAt': '2019-08-01T10:27:45.616Z',
          'updatedAt': '2019-08-01T10:27:45.616Z'
        }
      }
    ],
    'Followings': [
      {
        'id': 2,
        'name': 'user1',
        'email': 'user1@example.com',
        'password': '$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y',
        'isAdmin': false,
        'image': 'https://i.imgur.com/Q14p2le.jpg',
        'createdAt': '2019-07-30T16:24:55.204Z',
        'updatedAt': '2019-08-01T10:34:15.105Z',
        'Followship': {
          'followerId': 1,
          'followingId': 2,
          'createdAt': '2019-08-01T10:26:54.947Z',
          'updatedAt': '2019-08-01T10:26:54.947Z'
        }
      },
      {
        'id': 3,
        'name': 'user2',
        'email': 'user2@example.com',
        'password': '$2a$10$tsvcnSFsJvdvs2NLm9rW.uYbah93Xl5cTYcQnSeK3sjEopj.NGzk2',
        'isAdmin': false,
        'image': 'https://i.imgur.com/OezkRwO.jpg',
        'createdAt': '2019-07-30T16:24:55.422Z',
        'updatedAt': '2019-08-01T10:34:36.023Z',
        'Followship': {
          'followerId': 1,
          'followingId': 3,
          'createdAt': '2019-08-01T10:26:55.618Z',
          'updatedAt': '2019-08-01T10:26:55.618Z'
        }
      }
    ]
  },
  'isFollowed': false
}

export default {
    data() {
        return {
            user: {
                id: -1,
                name: '',
                email: '',
                image: '',
                isAdmin: false,
                commentsLength: 0,
                favoritedRestaurantsLength: 0,
                followersLength: 0,
                followingsLength: 0,
                isFollowed: false
            },
            comments: [],
            favoritedRestaurants: [],
            followers: [],
            followings: []
        }
    },
    methods: {
        fetchUser() {
            const {
                profile: { id, name, email, isAdmin, image, Comments, FavoritedRestaurants, Followers, Followings },
                isFollowed
            } = dummyData

            this.user = {
                id,
                name,
                email,
                isAdmin,
                image,
                commentsLength: Comments.length,
                favoritedRestaurantsLength: FavoritedRestaurants.length,
                followersLength: Followers.length,
                followingsLength: Followings.length,
                isFollowed
            }
            this.comments = Comments
            this.favoritedRestaurants = FavoritedRestaurants
            this.followers = Followers
            this.followings = Followings
        }
    },
    created() {
        this.fetchUser()
    },
    components: {
        UserProfileCard,
        UserFollowingsCard,
        UserFollowersCard,
        UserCommentsCard,
        UserFavoritedRestaurantsCard
    }
}
</script>