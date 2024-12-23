import React from "react";
import ReactDOM from "react-dom/client";

const restaurantLists = [
  {
    info: {
      id: "377801",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/617516ba-4562-485c-bb8d-9bacee7f44cc_377801.jpg",
      locality: "Rupatola",
      areaName: "Raghunathpali",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "2.7K+",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 8,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "8.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/pizza-hut-rupatola-raghunathpali-rest377801",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "732671",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/53b19058-6e5c-4944-8a67-aaec593bc38c_732671.jpg",
      locality: "Aambagan Chowk",
      areaName: "Deepak talkies",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      parentId: "2456",
      avgRatingString: "4.4",
      totalRatingsString: "642",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹1199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/dominos-pizza-aambagan-chowk-deepak-talkies-rest732671",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "636124",
      name: "GetAWay-Ice Creams & Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/5/c980571e-46dc-42ff-951e-1cd0b9d655db_636124.jpg",
      locality: "Bisra Road",
      areaName: "Civil Township",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts", "Healthy Food", "Sweets"],
      avgRating: 4.5,
      veg: true,
      parentId: "354819",
      avgRatingString: "4.5",
      totalRatingsString: "218",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/getaway-ice-creams-and-desserts-bisra-road-civil-township-rest636124",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "696328",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/2200d046-7fa4-4545-84a2-39065a9acd80_696328.JPG",
      locality: "Chhend Colony",
      areaName: "Gopabandhu Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.5,
      parentId: "547",
      avgRatingString: "4.5",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹2999",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/kfc-chhend-colony-gopabandhu-nagar-rest696328",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "755471",
      name: "Keventers - Milkshakes & Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/6/b46c3547-5f17-4331-a09c-1e2ae6a8543b_755471.JPG",
      locality: "Near Aambagan Chowk",
      areaName: "Formerly Deepak Talkies",
      costForTwo: "₹200 for two",
      cuisines: ["Beverages", "Ice Cream", "Desserts", "Healthy Food"],
      avgRating: 4.6,
      veg: true,
      parentId: "268997",
      avgRatingString: "4.6",
      totalRatingsString: "189",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/keventers-milkshakes-and-desserts-near-aambagan-chowk-formerly-deepak-talkies-rest755471",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "697769",
      name: "Cupcake Bliss Cake & Desserts",
      cloudinaryImageId: "6739bfad31dfb0a64fadf3c641ceae86",
      locality: "Sundargarh",
      areaName: "Chhend colony",
      costForTwo: "₹350 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages", "Cakes"],
      avgRating: 4.7,
      parentId: "66732",
      avgRatingString: "4.7",
      totalRatingsString: "86",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/cupcake-bliss-cake-and-desserts-sundargarh-chhend-colony-rest697769",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "261827",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Madhusudhan Marg",
      areaName: "Rourkela",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.8,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.8",
      totalRatingsString: "258",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 6.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/baskin-robbins-ice-cream-desserts-madhusudhan-marg-rourkela-rest261827",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "171657",
      name: "Yummy Tummy",
      cloudinaryImageId: "nalikt28fyzzgfnrwiza",
      locality: "Rcms Market",
      areaName: "civil Township",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani", "Chinese", "Tandoor", "North Indian"],
      avgRating: 4.3,
      parentId: "228789",
      avgRatingString: "4.3",
      totalRatingsString: "25K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 7.6,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "7.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/yummy-tummy-rcms-market-civil-township-rest171657",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "780977",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "3c21f18067043ede16390a71e4e3c9c2",
      locality: "Civil Township",
      areaName: "Panposh Rd",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "4961",
      avgRatingString: "4.3",
      totalRatingsString: "657",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 8,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "8.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/la-pinoz-pizza-civil-township-panposh-rd-rest780977",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "636200",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "Bisra Road",
      areaName: "Civil Township",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.4,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.4",
      totalRatingsString: "375",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 6.7,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "6.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/the-belgian-waffle-co-bisra-road-civil-township-rest636200",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "183185",
      name: "Bhartia Chaat Bhandar",
      cloudinaryImageId: "fbbf68y5ccobhfrfvdae",
      locality: "Golghar",
      areaName: "Ambagan",
      costForTwo: "₹150 for two",
      cuisines: ["Snacks", "Fast Food"],
      avgRating: 4.1,
      veg: true,
      parentId: "44500",
      avgRatingString: "4.1",
      totalRatingsString: "3.9K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/bhartia-chaat-bhandar-golghar-ambagan-rest183185",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "697765",
      name: "WarmOven Cake & Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/992e30aa-a27f-47b1-826c-f7c776dc18ef_697765.JPG",
      locality: "Sundargarh",
      areaName: "Chhend colony",
      costForTwo: "₹350 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages", "Cakes"],
      avgRating: 4.7,
      parentId: "9696",
      avgRatingString: "4.7",
      totalRatingsString: "327",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/warmoven-cake-and-desserts-sundargarh-chhend-colony-rest697765",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "634700",
      name: "Goila Butter Chicken",
      cloudinaryImageId: "5e19832da032dd69547565e27104706f",
      locality: "Bisra Road",
      areaName: "Railway Colony",
      costForTwo: "₹600 for two",
      cuisines: ["North Indian", "Biryani", "Kebabs", "Desserts"],
      avgRating: 4.3,
      parentId: "322587",
      avgRatingString: "4.3",
      totalRatingsString: "774",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹189",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/goila-butter-chicken-bisra-road-railway-colony-rest634700",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "491595",
      name: "Grameen Kulfi",
      cloudinaryImageId: "svjmxaxszusdlf07lgh5",
      locality: "Chacha Garage Gali",
      areaName: "Udit Nagar",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.8",
      totalRatingsString: "374",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/grameen-kulfi-chacha-garage-gali-udit-nagar-rest491595",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "639336",
      name: "PVR Cafe",
      cloudinaryImageId: "5f1c0c7b36787d89b63e9743838d4f5c",
      locality: "Forum Galleria Mall",
      areaName: "Civil Township",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "Fast Food", "Beverages"],
      avgRating: 4,
      parentId: "11664",
      avgRatingString: "4.0",
      totalRatingsString: "196",
      sla: {
        deliveryTime: 57,
        lastMileTravel: 8,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "8.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/pvr-cafe-forum-galleria-mall-civil-township-rest639336",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "694692",
      name: "Chicago Pizza",
      cloudinaryImageId: "21a1a5a44221a21e28a29f53d898e53e",
      locality: "Bank Colony",
      areaName: "CHENND",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.6,
      parentId: "60277",
      avgRatingString: "4.6",
      totalRatingsString: "70",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/chicago-pizza-bank-colony-chennd-rest694692",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "697786",
      name: "The Dessert Zone",
      cloudinaryImageId: "29e12a7a86fb8189b8d3dd7aaeb382fd",
      locality: "Sundargarh",
      areaName: "Chhend colony",
      costForTwo: "₹350 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages", "Cakes"],
      avgRating: 4.4,
      parentId: "10414",
      avgRatingString: "4.4",
      totalRatingsString: "60",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/the-dessert-zone-sundargarh-chhend-colony-rest697786",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "601611",
      name: "Biggies Burger",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/92ae02cf-4271-4397-855f-04746084c4eb_601611.jpg",
      locality: "Galleria Mall",
      areaName: "Raghunathpali",
      costForTwo: "₹300 for two",
      cuisines: ["Burgers", "Fast Food"],
      avgRating: 4.6,
      parentId: "45723",
      avgRatingString: "4.6",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 8,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "8.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/biggies-burger-galleria-mall-raghunathpali-rest601611",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "861572",
      name: "Pastas By Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/dd155764-ae88-41ff-9659-b4ce45659d49_861572.jpg",
      locality: "Rupatola",
      areaName: "Raghunathpali",
      costForTwo: "₹400 for two",
      cuisines: ["Pastas"],
      avgRating: 3.8,
      parentId: "306806",
      avgRatingString: "3.8",
      totalRatingsString: "33",
      sla: {
        deliveryTime: 59,
        lastMileTravel: 8,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "8.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/pastas-by-pizza-hut-rupatola-raghunathpali-rest861572",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "650122",
      name: "Chai Break",
      cloudinaryImageId: "bd4c2bb5f32c0cb24b1e7afd7ccd2b52",
      locality: "Forum Galleria Mall",
      areaName: "Raghunathpali",
      costForTwo: "₹400 for two",
      cuisines: [
        "Pizza",
        "North Indian",
        "Italian",
        "Beverages",
        "Tea",
        "Cafe",
      ],
      avgRating: 4.3,
      parentId: "234",
      avgRatingString: "4.3",
      totalRatingsString: "591",
      sla: {
        deliveryTime: 61,
        lastMileTravel: 8,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "8.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-14 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-02dc67c0-eb3a-444f-93ea-6a0e8dd7597e",
    },
    cta: {
      link: "https://www.swiggy.com/city/rourkela/chai-break-forum-galleria-mall-raghunathpali-rest650122",
      type: "WEBLINK",
    },
  },
];

const Head = () => (
  <div className="header">
    <img
      className="logo"
      src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
    ></img>
    <ul className="ul">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Cart</li>
    </ul>
  </div>
);

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurantCard" key="restaurantCard">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurant.cloudinaryImageId
        }
      />
      {console.log(
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurant?.cloudinaryImageId
      )}
      <h3>{restaurant?.name}</h3>
      <h4>{restaurant?.cuisines.join(", ")}</h4>
      <h3>{"Avg. ratings: " + restaurant?.avgRatingString ?? "--"}</h3>
    </div>
  );
};

const Body = () => (
  <div className="restaurantList" key="body">
    {restaurantLists.map((res) => (
      <RestaurantCard restaurant={res.info} />
    ))}
  </div>
);

const Footer = () => <h1>React Dev</h1>;

const Spg = () => (
  <>
    <Head />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Spg />);
