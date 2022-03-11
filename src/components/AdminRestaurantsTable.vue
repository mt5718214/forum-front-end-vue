<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
          >
            Edit
          </router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Dr. Neil Hagenes",
      tel: "1-746-760-5470 x63407",
      address: "0603 Roel Bridge",
      opening_hours: "08:00",
      description:
        "Qui est consequatur animi animi facilis. Voluptas ut cumque ut architecto. Et quis rerum consequatur dolores illo.\n \rUt praesentium rerum et aut odit consectetur. Aliquid error aperiam. Quis est voluptatem dolorem. Officia voluptate cumque et accusamus iure quis. Omnis at excepturi ipsam ea fuga similique error officiis pariatur.\n \rQuas est non dolores minima sed ducimus. Quam expedita porro modi. Quibusdam eius esse numquam. Similique architecto magnam nam officiis pariatur earum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.41277222077052",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 2,
      name: "Ubaldo Murphy",
      tel: "1-693-627-1432 x872",
      address: "5436 Rippin Prairie",
      opening_hours: "08:00",
      description: "Nemo quia enim dolorum iste itaque voluptatem asperiores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=80.03358057152772",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 3,
      name: "Elwyn Wiza Sr.",
      tel: "597-083-5241",
      address: "671 McGlynn Pike",
      opening_hours: "08:00",
      description:
        "Dolorem ea voluptatum. Nobis facere quo et voluptatem voluptatibus voluptas dolor ut. Fugit et voluptatem magnam facere explicabo. Facere tenetur illum qui unde ipsa architecto voluptatum earum. Consequatur eius voluptas cumque eos nostrum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.52992838984736",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 4,
      name: "Caleigh Casper",
      tel: "1-428-333-1975 x52932",
      address: "2362 Erika Drive",
      opening_hours: "08:00",
      description: "qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.819458829127015",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 5,
      name: "Hal Koch",
      tel: "1-485-321-1458",
      address: "424 Braun Lodge",
      opening_hours: "08:00",
      description:
        "Veniam distinctio amet in et laborum quis fuga tempore accusamus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.250975938957282",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 6,
      name: "Isabell Kunde",
      tel: "(491) 824-6659 x20617",
      address: "17836 Elsie Landing",
      opening_hours: "08:00",
      description:
        "Veritatis eius magnam dolorum quasi distinctio ut voluptatum provident blanditiis. Ipsam cupiditate facilis aspernatur expedita facere quisquam. Ipsa dolorum odio natus dolor quas officiis velit reiciendis. Qui id et laboriosam cumque nisi in ut ipsum eius. Dolor debitis harum quia omnis omnis nulla. Quasi reprehenderit ipsa sit consectetur eum cum unde aliquid qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=25.514358102572544",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 7,
      name: "Ahmad Jacobson",
      tel: "(411) 634-5522 x52105",
      address: "74023 Juwan Pine",
      opening_hours: "08:00",
      description: "Nesciunt earum molestias ipsam id tenetur fugit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.1355009659926",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 8,
      name: "Haylie Metz",
      tel: "253.660.3022",
      address: "683 Madelynn Mews",
      opening_hours: "08:00",
      description: "praesentium",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.33090830477704",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 9,
      name: "Macie Cole",
      tel: "560.594.6012 x35637",
      address: "893 Muriel Flats",
      opening_hours: "08:00",
      description: "Nihil ipsam ut qui aliquid minus est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.03632261066124",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 10,
      name: "Francesca O'Kon V",
      tel: "942-981-9381 x92459",
      address: "5983 Daisy Curve",
      opening_hours: "08:00",
      description: "Magnam est sint officiis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.31779776298623",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 11,
      name: "Roosevelt Mraz",
      tel: "1-341-423-9569",
      address: "567 Cremin Shore",
      opening_hours: "08:00",
      description:
        "Explicabo voluptas dicta voluptatem et. Ad voluptate facilis sunt est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.574674819864484",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 12,
      name: "Macey Harris",
      tel: "345-563-4569 x3941",
      address: "5725 Chasity Flats",
      opening_hours: "08:00",
      description:
        "Incidunt quae repellendus molestiae dolore. Quae quod molestiae numquam. Ea ut sint amet modi id. Veniam doloremque sapiente nesciunt. Repellat illo sapiente facere aut et in quia necessitatibus numquam. Voluptatem nisi et sint officia quo aliquam nisi.\n \rAccusantium sed consequatur ipsa dignissimos vel vitae fugit. Optio qui exercitationem aut. Impedit unde odit eum illo iure non maxime non. Iste cupiditate qui omnis sint assumenda.\n \rUt doloremque nisi totam. Qui optio amet incidunt et. Beatae ipsum voluptas atque sequi totam et doloremque cum suscipit. Dolor est est debitis porro inventore.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.8532774600074",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 13,
      name: "Frederick Legros",
      tel: "142.497.5487 x652",
      address: "08108 Turner Union",
      opening_hours: "08:00",
      description:
        "Mollitia adipisci repellat. Doloribus molestias maiores. Mollitia reprehenderit illo voluptatem qui iure. Necessitatibus dolorum mollitia eos. Aut quam accusantium a voluptates. Voluptatem exercitationem aut ut qui quia a.\n \rDolorem aliquid soluta ipsam ut in. Itaque ut nobis modi error id. Tenetur reprehenderit veritatis adipisci error quam nesciunt provident sed.\n \rDoloremque praesentium debitis. Ad laborum ullam ea voluptate tenetur possimus. Ea doloremque molestias in et et et perferendis ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.89723308229144",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 14,
      name: "Corine Reinger",
      tel: "1-731-578-9710",
      address: "05335 Stehr Harbors",
      opening_hours: "08:00",
      description: "placeat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.113473470742903",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 15,
      name: "Salvatore Streich",
      tel: "941.511.1899 x798",
      address: "52192 Monserrate Underpass",
      opening_hours: "08:00",
      description: "officiis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.892109337262326",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 16,
      name: "Cletus Rippin",
      tel: "347-274-3765 x8397",
      address: "868 Nader Rest",
      opening_hours: "08:00",
      description:
        "Laudantium quia itaque repellat aliquam tempora. Et ut nam itaque aut cumque magnam sed excepturi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.13131047841034",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 17,
      name: "Dr. Rene Wiza",
      tel: "1-145-572-8237 x7729",
      address: "38189 Dianna View",
      opening_hours: "08:00",
      description:
        "Quod culpa vitae architecto dolore quam consequatur nobis enim quam. Doloremque odit velit et dolor quidem. Iusto temporibus facere sint magni dolor. Voluptatem id esse et dolores non aut sunt ullam sapiente. Eveniet doloremque tenetur aliquam qui repellendus quos adipisci iure quaerat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.64190302944321",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 18,
      name: "Pierce Lind",
      tel: "030.853.8717",
      address: "45863 Mante Springs",
      opening_hours: "08:00",
      description:
        "Quia saepe dolore alias quaerat sint beatae.\nInventore qui sint esse facere nisi quo sit quos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=73.02492580739958",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 19,
      name: "Gayle Smith III",
      tel: "(869) 500-3628 x70059",
      address: "34447 Ilene Ridge",
      opening_hours: "08:00",
      description: "sit qui eos",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.531649067715996",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 20,
      name: "Clemens Gerhold",
      tel: "726.560.6059 x3228",
      address: "35475 Stroman Union",
      opening_hours: "08:00",
      description: "reprehenderit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.016586358169",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 21,
      name: "Sadie Dibbert",
      tel: "930.854.7233 x446",
      address: "57431 Jasen Burg",
      opening_hours: "08:00",
      description: "Vero et et molestiae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.0101817752541",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 22,
      name: "Toni Bechtelar Sr.",
      tel: "680-207-7374 x546",
      address: "707 Erna Islands",
      opening_hours: "08:00",
      description:
        "Omnis ut tenetur eum accusantium neque quam et.\nDolorem sit quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.872674226234565",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 23,
      name: "Edison Raynor V",
      tel: "419.163.6510 x28094",
      address: "372 Thea Park",
      opening_hours: "08:00",
      description:
        "Dolores repudiandae aut vitae dignissimos. Ratione ea nobis. Voluptatem reiciendis similique eaque sint aut aut provident quam voluptatum. Quis eveniet sunt ea ratione necessitatibus dolorem nihil recusandae porro. Soluta dolorem eos dolorem ut quaerat animi rerum accusamus. Eos consequatur dolorem non nobis aperiam facilis facere dolores velit.\n \rEnim optio aut voluptates consequuntur quia delectus. Qui distinctio cumque dolores in animi sed consectetur. Non molestias et voluptates sint qui iste omnis eius quis.\n \rSint rem dolor iure. Adipisci numquam esse quibusdam itaque quia. Occaecati consequatur voluptatem pariatur impedit minus. Modi possimus et sit enim et fugiat reprehenderit dolorem repellendus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.57751032974135",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 24,
      name: "Orlo Champlin",
      tel: "1-725-714-0896",
      address: "71063 Mohr Mission",
      opening_hours: "08:00",
      description:
        "Cumque delectus omnis et pariatur ullam ad nostrum. Quia aliquid enim quam. Repellat repellat perspiciatis sapiente aut earum.\n \rAb sint aut velit quae ratione culpa reiciendis. Molestias qui placeat. Vero ad laboriosam quidem voluptatum accusamus qui. Non dolorem et modi praesentium voluptatem ut.\n \rSapiente ut sapiente illo. Eaque est quidem ut laborum quis ut eum. A velit consequatur quo.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.389447869479085",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 25,
      name: "Rafaela Von",
      tel: "(522) 030-6003 x8086",
      address: "192 Elsie Plain",
      opening_hours: "08:00",
      description: "rem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.28090152627479",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 26,
      name: "Elisa McKenzie",
      tel: "757-547-6991",
      address: "030 Tristian View",
      opening_hours: "08:00",
      description:
        "Qui doloribus illum et. In facere deserunt fugiat quae rerum. Error maiores velit iste harum at. Impedit quasi et eaque. Amet autem facere quia. Quo itaque vero architecto qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.58558056314731",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 27,
      name: "Mallie Romaguera",
      tel: "023.322.3987",
      address: "4107 Franecki Mountain",
      opening_hours: "08:00",
      description: "Rerum rerum quas id necessitatibus rem placeat voluptas.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.261678889717745",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 28,
      name: "Flavie Yost",
      tel: "558.269.5565 x130",
      address: "36728 Deron Street",
      opening_hours: "08:00",
      description: "nam atque consequatur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.62690849747929",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 29,
      name: "Jacquelyn Collins V",
      tel: "135-454-1390",
      address: "3976 Price Run",
      opening_hours: "08:00",
      description:
        "Et cumque enim consequatur saepe veniam ut voluptatum. Consequatur placeat tempore omnis. Repudiandae dolores libero dolor blanditiis eos consequatur ipsum aut perferendis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.78122266404857",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 30,
      name: "Darius Becker",
      tel: "1-829-502-2950 x2242",
      address: "603 Romaguera Trafficway",
      opening_hours: "08:00",
      description:
        "Dicta culpa sunt possimus ullam consequatur. Quia doloribus qui tempora illum veniam doloribus repellat veritatis. Quae dolores totam eos eligendi ut modi quae voluptatem. Dolore nemo quae et debitis enim labore hic hic eveniet.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.778124069901057",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 31,
      name: "Chase O'Kon DVM",
      tel: "445-468-5980",
      address: "825 Runte Plaza",
      opening_hours: "08:00",
      description: "Nihil consequuntur officiis odit qui et maiores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.201872326060354",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 32,
      name: "Jarret Marvin",
      tel: "493.526.4165 x7150",
      address: "56850 Bechtelar Lock",
      opening_hours: "08:00",
      description:
        "Cumque dolorem possimus est sunt et quis voluptatibus omnis quia. Ut animi suscipit consequatur excepturi quis nemo neque corporis quibusdam. Omnis quod fuga exercitationem repellendus autem quia vitae magni consectetur. Consectetur quibusdam a et et quaerat officiis perferendis aliquid. Dolores est ea voluptate saepe temporibus recusandae quae error eum. Nulla et nihil aut.\n \rAt quam iusto. Totam ipsa id. Veritatis et dolores quod dolorem explicabo ab officia tempore. Voluptate blanditiis sed quia. Numquam perspiciatis vel sunt voluptate est eum est.\n \rPorro officiis id maiores. Impedit et eaque quis quos ullam nobis et. Ut voluptas dolor dolor qui nihil itaque omnis. Dolores commodi voluptas facilis incidunt vel officiis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.00646131921818",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 33,
      name: "Oliver Greenfelder",
      tel: "481.270.4974",
      address: "4778 Enrico Union",
      opening_hours: "08:00",
      description:
        "Dolorem deleniti ut in modi veritatis ut saepe cumque. Eos consequatur soluta totam molestiae sit. Nesciunt aspernatur non. Voluptas iusto in. Sit delectus odio est et et quidem aut unde qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.22348025322748",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 34,
      name: "Kirk Gleason",
      tel: "194.025.3114 x655",
      address: "6700 Vita Manors",
      opening_hours: "08:00",
      description:
        "Maiores ut ea ea ut quis fuga. Unde quaerat et quas. Sint minus magni aut est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.55593274639074",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 35,
      name: "Gladys Nicolas",
      tel: "131.082.2878 x2803",
      address: "85658 Schultz Pine",
      opening_hours: "08:00",
      description: "Rerum blanditiis deserunt maxime id facere voluptatum non.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.541405859648512",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 36,
      name: "Ms. Izaiah Padberg",
      tel: "253.592.3834 x6915",
      address: "048 Kihn Harbors",
      opening_hours: "08:00",
      description:
        "Quis officia quo dignissimos architecto quas delectus ad harum. Laboriosam consequatur natus aut ut voluptas quae. Explicabo ut et eum consequatur quibusdam dolores quos minus. Reprehenderit aut placeat dicta. Voluptatem ullam officiis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.38150465763286",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 37,
      name: "Lelia Swift",
      tel: "(729) 997-8941 x89844",
      address: "377 Herbert Trace",
      opening_hours: "08:00",
      description:
        "Ea aut minima praesentium eligendi consequatur dolor perferendis et est.\nSit et autem veniam aut rerum rerum eos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.76333504550976",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 38,
      name: "Alaina Weissnat MD",
      tel: "232.188.5713 x637",
      address: "895 Barrows Roads",
      opening_hours: "08:00",
      description: "tenetur sit quas",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.413966318032738",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 39,
      name: "Fleta Baumbach Sr.",
      tel: "(019) 139-1701",
      address: "8940 Denesik Spur",
      opening_hours: "08:00",
      description:
        "Veritatis odio cumque ea quo ab doloribus quia eum exercitationem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.47010565475593",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 40,
      name: "Meaghan Heathcote",
      tel: "(471) 698-6739 x65840",
      address: "73666 Feeney Plains",
      opening_hours: "08:00",
      description:
        "Ipsa ut optio nesciunt quia laudantium beatae sit. Voluptatem recusandae laudantium aspernatur. Veritatis sunt adipisci velit voluptatum eaque pariatur voluptas enim blanditiis. Nemo nihil et blanditiis qui et dolorum. Non facere temporibus eveniet porro eaque ut. Blanditiis sed dolor inventore.\n \rDolores consectetur incidunt tenetur illum suscipit eveniet sit ducimus voluptatum. Repudiandae consequatur aut facere sed minus. Sint reiciendis enim et facilis et voluptas voluptas.\n \rMinima omnis deleniti alias dignissimos voluptatibus consequatur sed. Non aut qui blanditiis. Numquam aut occaecati dolore.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.72706291899442",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 41,
      name: "Susana Hodkiewicz DVM",
      tel: "1-176-067-5324 x72613",
      address: "50232 Streich Flat",
      opening_hours: "08:00",
      description:
        "Sapiente sit doloribus.\nNumquam quia aut.\nEum aut quisquam similique neque in modi asperiores magnam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.777051043745395",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 42,
      name: "Felton Ruecker",
      tel: "822.032.2155",
      address: "4218 Tyshawn Courts",
      opening_hours: "08:00",
      description:
        "Incidunt sit fugiat voluptatem et eum accusamus. Ratione doloribus facere suscipit assumenda rerum deleniti libero atque dignissimos. Eaque amet autem. Consequatur quae in qui voluptas qui est similique.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.9828455834887349",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 43,
      name: "Willa Bechtelar",
      tel: "(929) 439-6552 x317",
      address: "864 Lockman Square",
      opening_hours: "08:00",
      description:
        "Totam consequatur aperiam debitis ut mollitia. Aliquam facere quis aut adipisci soluta assumenda consectetur. Ipsam nemo repudiandae autem suscipit. Quod eaque corporis veniam facere reprehenderit quam veniam qui quas. Corrupti qui dolor et. Quisquam aliquid ducimus enim maxime nostrum sequi exercitationem molestiae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.00101190001694",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 44,
      name: "Tavares Tromp",
      tel: "656-142-0744 x180",
      address: "97453 Nyah Forest",
      opening_hours: "08:00",
      description:
        "Ut cupiditate et molestias consectetur ex quia. Excepturi dolores eos asperiores ut voluptatibus. Possimus enim at dicta dolore eos aut reiciendis eos qui.\n \rUt eos suscipit qui. Quis sit voluptates sunt nemo. Minus at aut et. Facilis qui nesciunt quaerat quas quia. Optio quia itaque dolorem voluptates. Error rerum est.\n \rNatus est voluptatem expedita minus soluta. Iure qui nesciunt vel et est sint explicabo eos enim. Voluptate fuga delectus assumenda eveniet expedita autem ut voluptatibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.19990018366016",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 45,
      name: "Winfield Legros",
      tel: "680.834.5942 x57522",
      address: "4895 Gregoria Isle",
      opening_hours: "08:00",
      description: "Nulla quod occaecati illum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.93885464267062",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 46,
      name: "Elyse Kilback",
      tel: "628.193.1056 x496",
      address: "10494 Pamela Lights",
      opening_hours: "08:00",
      description:
        "Id assumenda eos consequuntur debitis rerum non. Quo sint quia aut. Eos ducimus reiciendis provident. Quidem nisi expedita sequi. Minima mollitia et non id corporis repellat nulla nihil fuga.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.87711037459462",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 47,
      name: "Christina Weissnat",
      tel: "243-694-2150 x53137",
      address: "60095 Domenico Passage",
      opening_hours: "08:00",
      description: "eum et voluptas",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.483062264803735",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 48,
      name: "Ezequiel Turner",
      tel: "(766) 587-5850",
      address: "4335 Spencer Plain",
      opening_hours: "08:00",
      description:
        "Eius sunt occaecati et maiores ut et labore. Eaque sequi sed exercitationem. Dolorum corrupti earum in quos sit alias magnam. Repudiandae esse ab enim quia deleniti. Ea error velit molestiae. Animi doloremque beatae ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.090422085423612",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 49,
      name: "Miss Jennyfer Corwin",
      tel: "251-173-9554 x8748",
      address: "5960 Kohler Oval",
      opening_hours: "08:00",
      description:
        "Et quia necessitatibus ut. Vel eos reprehenderit sed dolorum natus placeat alias distinctio aut. Adipisci dolorum at esse consectetur possimus repudiandae et. Quas aperiam sunt facere quam. Neque dolor voluptates.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.43672869114104",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
    {
      id: 50,
      name: "Vickie MacGyver",
      tel: "1-092-311-1331 x91852",
      address: "7948 Josie Mission",
      opening_hours: "08:00",
      description:
        "Eum laborum beatae debitis id. Omnis voluptas recusandae iure. Eligendi perspiciatis libero. Illo dolor doloremque labore.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.39023321425391",
      viewCounts: 0,
      createdAt: "2022-03-10T15:12:05.000Z",
      updatedAt: "2022-03-10T15:12:05.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-03-10T15:12:05.000Z",
        updatedAt: "2022-03-10T15:12:05.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>