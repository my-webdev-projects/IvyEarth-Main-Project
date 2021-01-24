const plants = [
  {
    _id: '1',
    name: 'Sunflower, annual',
    genusName: 'Helianthus annus',
    description:
      'A cheerful summertime bloomer, sunflowers celebrate the longest days of the growing season.',
    image: '/images/annual_sunflower.png',
    light: 'Sun',
    type: 'Annual',
    flowerColor: 'Red, Orange, Yellow',
    season: 'Summer Bloom, Fall Bloom',
    height: '1 to 3 feet, 3 to 8 feet, 8 to 320 feet',
    width: '1 to 3 feet wide',
    propagation: 'Seed',
    careMustKnows:
      "Sunflowers thrive in full sun and moist, well-drained soil. Start plants from seed indoors six to eight weeks before the last frost or sow them directly in the garden once soil has warmed in spring. In the garden, plant seeds about 1 inch deep and about 6 inches apart. Water as needed to keep the soil moist. Seedlings emerge in about two weeks. When seedlings are about 3 inches tall, thin them so there is one plant every 12 to 18 inches. Well-spaced seedlings are key to strong, upright sunflowers later in the season. Plants will develop weak and wobbly stems if they grow too closely together, or if they don't get enough light.",
    harvestTips:
      "A few varieties of sunflowers are grown for their edible seeds. 'Giant Grey Stripe' and 'Mammoth Russian' are two popular varieties. These sunflowers form a single large flower head atop a stem that may reach 10 feet or more. Allow the seed heads of these varieties to start to dry and turn yellow before cutting the head off the stalk. Store the head in a dry, well-ventilated place where the seeds can fully mature. Seeds are ready to store or eat when the disk at the back of the flower has turned dark brown.",
    otherVarieties: [
      {
        name: 'Autumn Beauty Sunflower',
        description:
          'This Helianthus variety bears large reddish-orange flowers on 5-foot-tall plants.',
        // image: '/images/sun-1.jpeg',
      },
    ],
    rating: 4,
    numReviews: 4,
  },
  {
    _id: '2',
    name: 'Potato',
    genusName: 'Solanum tuberosum',
    description:
      'Fresh spuds, harvested from your backyard and then baked until tender, are the ultimate comfort food.',
    image: '/images/potato.jpg',
    light: 'Sun',
    type: 'Vegetable',
    flowerColor: 'Purple',
    season: 'Summer Bloom',
    height: '1 to 3 feet',
    width: '1 to 3 feet wide',

    propagation: 'Division, Seed',
    careMustKnows:
      "Potatoes thrive alongside most other vegetables. However, because they're closely related to tomatoes, peppers, and eggplants, it's best not to plant any of these crops right next to each other as they attract the same pests.These plants don't mind a little cool weather, so you can get them in the ground a couple of weeks before your area's last expected frost date. Plant potatoes in a spot that sees full sun (at least 6 to 8 hours of direct sun) and has moist, well-drained soil that's rich in organic matter.If you don't want to dig holes, one classic way to grow them is to loosen the soil, place them on the prepared spot, then cover them with a few inches of soil. After the plants have grown about a foot tall, mound about 6 inches of soil or compost up around them, then top-dress with a little more every couple of weeks until the plants start to bloom.",
    harvestTips:
      'Begin harvesting as early as 6-8 weeks after planting when tubers are 1 to 2 inches in diameter, if you want your own gourmet baby potatoes. Just carefully dig next to stems with a small garden fork. For the main harvest, wait to dig the tubers until plant tops start to die back on their own. Place undamaged tubers in a dark humid location at 65°F to 70°F for two weeks to cure before storage. For long-term storage, keep cured tubers in the dark at 40°F to 50°F.',

    rating: 4.5,
    numReviews: 5,
  },
  {
    _id: '3',
    name: 'Potato',
    genusName: 'Solanum tuberosum',
    description:
      'Fresh spuds, harvested from your backyard and then baked until tender, are the ultimate comfort food.',
    image: '/images/potato.jpg',
    light: 'Sun',
    type: 'Vegetable',
    flowerColor: 'Purple',
    season: 'Summer Bloom',
    height: '1 to 3 feet',
    width: '1 to 3 feet wide',

    propagation: 'Division, Seed',
    careMustKnows:
      "Potatoes thrive alongside most other vegetables. However, because they're closely related to tomatoes, peppers, and eggplants, it's best not to plant any of these crops right next to each other as they attract the same pests.These plants don't mind a little cool weather, so you can get them in the ground a couple of weeks before your area's last expected frost date. Plant potatoes in a spot that sees full sun (at least 6 to 8 hours of direct sun) and has moist, well-drained soil that's rich in organic matter.If you don't want to dig holes, one classic way to grow them is to loosen the soil, place them on the prepared spot, then cover them with a few inches of soil. After the plants have grown about a foot tall, mound about 6 inches of soil or compost up around them, then top-dress with a little more every couple of weeks until the plants start to bloom.",
    harvestTips:
      'Begin harvesting as early as 6-8 weeks after planting when tubers are 1 to 2 inches in diameter, if you want your own gourmet baby potatoes. Just carefully dig next to stems with a small garden fork. For the main harvest, wait to dig the tubers until plant tops start to die back on their own. Place undamaged tubers in a dark humid location at 65°F to 70°F for two weeks to cure before storage. For long-term storage, keep cured tubers in the dark at 40°F to 50°F.',

    rating: 4.5,
    numReviews: 5,
  },
  {
    _id: '4',
    name: 'Potato',
    genusName: 'Solanum tuberosum',
    description:
      'Fresh spuds, harvested from your backyard and then baked until tender, are the ultimate comfort food.',
    image: '/images/potato.jpg',
    light: 'Sun',
    type: 'Vegetable',
    flowerColor: 'Purple',
    season: 'Summer Bloom',
    height: '1 to 3 feet',
    propagation: 'Division, Seed',
    careMustKnows:
      "Potatoes thrive alongside most other vegetables. However, because they're closely related to tomatoes, peppers, and eggplants, it's best not to plant any of these crops right next to each other as they attract the same pests.These plants don't mind a little cool weather, so you can get them in the ground a couple of weeks before your area's last expected frost date. Plant potatoes in a spot that sees full sun (at least 6 to 8 hours of direct sun) and has moist, well-drained soil that's rich in organic matter.If you don't want to dig holes, one classic way to grow them is to loosen the soil, place them on the prepared spot, then cover them with a few inches of soil. After the plants have grown about a foot tall, mound about 6 inches of soil or compost up around them, then top-dress with a little more every couple of weeks until the plants start to bloom.",
    harvestTips:
      'Begin harvesting as early as 6-8 weeks after planting when tubers are 1 to 2 inches in diameter, if you want your own gourmet baby potatoes. Just carefully dig next to stems with a small garden fork. For the main harvest, wait to dig the tubers until plant tops start to die back on their own. Place undamaged tubers in a dark humid location at 65°F to 70°F for two weeks to cure before storage. For long-term storage, keep cured tubers in the dark at 40°F to 50°F.',

    rating: 4.5,
    numReviews: 5,
  },
  {
    _id: '5',
    name: 'Potato',
    genusName: 'Solanum tuberosum',
    description:
      'Fresh spuds, harvested from your backyard and then baked until tender, are the ultimate comfort food.',
    image: '/images/potato.jpg',
    light: 'Sun',
    type: 'Vegetable',
    flowerColor: 'Purple',
    season: 'Summer Bloom',
    height: '1 to 3 feet',
    propagation: 'Division, Seed',
    careMustKnows:
      "Potatoes thrive alongside most other vegetables. However, because they're closely related to tomatoes, peppers, and eggplants, it's best not to plant any of these crops right next to each other as they attract the same pests.These plants don't mind a little cool weather, so you can get them in the ground a couple of weeks before your area's last expected frost date. Plant potatoes in a spot that sees full sun (at least 6 to 8 hours of direct sun) and has moist, well-drained soil that's rich in organic matter.If you don't want to dig holes, one classic way to grow them is to loosen the soil, place them on the prepared spot, then cover them with a few inches of soil. After the plants have grown about a foot tall, mound about 6 inches of soil or compost up around them, then top-dress with a little more every couple of weeks until the plants start to bloom.",
    harvestTips:
      'Begin harvesting as early as 6-8 weeks after planting when tubers are 1 to 2 inches in diameter, if you want your own gourmet baby potatoes. Just carefully dig next to stems with a small garden fork. For the main harvest, wait to dig the tubers until plant tops start to die back on their own. Place undamaged tubers in a dark humid location at 65°F to 70°F for two weeks to cure before storage. For long-term storage, keep cured tubers in the dark at 40°F to 50°F.',

    rating: 4.5,
    numReviews: 5,
  },
  {
    _id: '6',
    name: 'Potato',
    genusName: 'Solanum tuberosum',
    description:
      'Fresh spuds, harvested from your backyard and then baked until tender, are the ultimate comfort food.',
    image: '/images/potato.jpg',
    light: 'Sun',
    type: 'Vegetable',
    flowerColor: 'Purple',
    season: 'Summer Bloom',
    height: '1 to 3 feet',
    propagation: 'Division, Seed',
    careMustKnows:
      "Potatoes thrive alongside most other vegetables. However, because they're closely related to tomatoes, peppers, and eggplants, it's best not to plant any of these crops right next to each other as they attract the same pests.These plants don't mind a little cool weather, so you can get them in the ground a couple of weeks before your area's last expected frost date. Plant potatoes in a spot that sees full sun (at least 6 to 8 hours of direct sun) and has moist, well-drained soil that's rich in organic matter.If you don't want to dig holes, one classic way to grow them is to loosen the soil, place them on the prepared spot, then cover them with a few inches of soil. After the plants have grown about a foot tall, mound about 6 inches of soil or compost up around them, then top-dress with a little more every couple of weeks until the plants start to bloom.",
    harvestTips:
      'Begin harvesting as early as 6-8 weeks after planting when tubers are 1 to 2 inches in diameter, if you want your own gourmet baby potatoes. Just carefully dig next to stems with a small garden fork. For the main harvest, wait to dig the tubers until plant tops start to die back on their own. Place undamaged tubers in a dark humid location at 65°F to 70°F for two weeks to cure before storage. For long-term storage, keep cured tubers in the dark at 40°F to 50°F.',

    rating: 4.5,
    numReviews: 5,
  },
];

export default plants;
