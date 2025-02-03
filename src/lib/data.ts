const AirCondition = "/air-condition.svg";
const Bar = "/bar.svg";
const Breakfast = "/breakfast.svg";
const CheckIn = "/check-in.svg";
const CityCenter = "/city-center.svg";
const FitnessRoom = "/fitness-room.svg";
const Kitchen = "/kitchen.svg";
const Laundry = "/laundry.svg";
const Lift = "/lift.svg";
const Reception = "/reception.svg";
const Restaurant = "/restaurant.svg";
const Wifi = "/wifi.svg";

// favourite images
const FaveOne = "/images/fave-1.webp";
const FaveTwo = "/images/fave-2.webp";
const FaveThree = "/images/fave-3.webp";
const FaveFour = "/images/fave-4.webp";
const FaveFive = "/images/fave-5.webp";

// join data

const JoinOne = "/images/join-1.png";
const JoinTwo = "/images/join-2.png";
const JoinThree = "/images/join-3.png";
const JoinFour = "/images/join-4.png";

// banner
const Cup = "/cup.svg";
const Flexible = "/flexible.svg";
const Service = "/service.svg";
const Rest = "/rest.svg";

export const wildeApartments = [
  {
    title: "Wilde Aparthotels, London, Liverpool Street",
    rating: 4.5,
    reviews: {
      numberOfReviews: 39,
      link: "#",
    },
    outline: [
      "5 min walk to Liverpool Street Station",
      "Studio & 1 bedroom apartments",
      "Spitalfields & Shoreditch 10 min walk",
    ],
    media: [
      {
        source: "",
      },
      {
        source: "",
      },
      {
        source: "",
      },
    ],
    amenities: [
      {
        text: "Breakfast",
        source: Breakfast,
      },
      {
        text: "Bar",
        source: Bar,
      },
      {
        text: "Restaurant",
        source: Restaurant,
      },
      {
        text: "Fully Equipped Kitchen",
        source: Kitchen,
      },
      {
        text: "Laundry Room",
        source: Laundry,
      },
      {
        text: "Air conditioning",
        source: AirCondition,
      },
    ],
    numberOfMedia: 9,
  },
  {
    title: "Wilde Aparthotels, London, Paddington",
    rating: 4.9,
    reviews: {
      numberOfReviews: 2929,
      link: "#",
    },
    outline: [
      "Close to Paddington station",
      "Studio & 1 bedroom apartments",
      "Next to business & transport hubs",
    ],
    media: [
      {
        source: "",
      },
      {
        source: "",
      },
      {
        source: "",
      },
    ],
    amenities: [
      {
        text: "Breakfast",
        source: Breakfast,
      },
      {
        text: "Bar",
        source: Bar,
      },
      {
        text: "Fitness Room",
        source: FitnessRoom,
      },
      {
        text: "Fully Equipped Kitchen",
        source: Kitchen,
      },
      {
        text: "Online check-in",
        source: CheckIn,
      },
      {
        text: "24 hour reception",
        source: Reception,
      },
    ],
    numberOfMedia: 7,
  },
  {
    title: "Wilde Aparthotels, London, Aldgate Tower Bridge",
    rating: 4.8,
    reviews: {
      numberOfReviews: 1328,
      link: "#",
    },
    outline: [
      "6 min walk to Aldgate East station",
      "Studios & 1 bedroom apartments",
      "Located in hip East London",
    ],
    media: [
      {
        source: "",
      },
      {
        source: "",
      },
      {
        source: "",
      },
    ],
    amenities: [
      {
        text: "Breakfast",
        source: Breakfast,
      },
      {
        text: "Bar",
        source: Bar,
      },
      {
        text: "Fully Equipped Kitchen",
        source: Kitchen,
      },
      {
        text: "Online check-in",
        source: CheckIn,
      },
      {
        text: "24 hour reception",
        source: Reception,
      },
      {
        text: "Laundry Room",
        source: Laundry,
      },
    ],
    numberOfMedia: 9,
  },
  {
    title: "Wilde Aparthotels, London, Covent Garden",
    rating: 4.9,
    reviews: {
      numberOfReviews: 4463,
      link: "#",
    },
    outline: [
      "5 min walk to multiple Tube stations",
      "Beautifully designed studios",
      "Theatres & bars on your doorstep",
    ],
    media: [
      {
        source: "",
      },
      {
        source: "",
      },
      {
        source: "",
      },
    ],
    amenities: [
      {
        text: "City Centre Location",
        source: CityCenter,
      },
      {
        text: "24 hour reception",
        source: Reception,
      },
      {
        text: "Highspeed WiFi",
        source: Wifi,
      },
      {
        text: "Fully Equipped Kitchen",
        source: Kitchen,
      },
      {
        text: "Online check-in",
        source: CheckIn,
      },
      {
        text: "Lift to all floors",
        source: Lift,
      },
    ],
  },
];

export const favorites = [
  {
    img: FaveOne,
    text: "Discovering London’s Liverpool Street",
  },
  {
    img: FaveTwo,
    text: `Family Friendly Liverpool Street
`,
  },
  {
    img: FaveThree,
    text: `Taste of London: A Deep Dive into the City’s Multicultural Cuisine 

`,
  },
  {
    img: FaveFour,
    text: "Wilde London: The Alternative London Guide",
  },
  {
    img: FaveFive,
    text: "Wilde London: Top Things To Do",
  },
];

export const JoinUsData = [
  {
    smallTitle: "Membership benefits",
    largeTitle: "10% off Every Stay",
    image: JoinOne,
    description: "Save on your next stay, and all after that.",
    buttonText: "Sign up and save",
    start: true,
  },
  {
    smallTitle: "Changed your mind?",
    largeTitle: "Free Cancellation",
    image: JoinTwo,
    description: "Until 3pm the day before you arrive.",
    buttonText: "Start your booking now",
    start: false,
  },
  {
    smallTitle: "Early saver",
    largeTitle: "Up to 30% off 3+ Nights ",
    image: JoinThree,
    description:
      "Book 30+ days in advance to save up to 30% off your stays. T&Cs apply.",
    buttonText: "Book your next trip",
    start: false,
  },
  {
    smallTitle: "Get comfy ",
    largeTitle: "Stay Longer for Less",
    image: JoinFour,
    description: "Save up to 30% when you stay with us long term.",
    buttonText: "Explore",
    start: false,
  },
];

export const bannerData = [
  {
    img: Cup,
    title: "How wonderful",
    description: "We delight our members with 10% off all stays",
  },
  {
    img: Flexible,
    title: "Forever flexible",
    description: "Enjoy flexible booking and free cancellation options",
  },
  {
    img: Service,
    title: "At your service",
    description: "Our reception team are on hand to make your wish a reality",
  },
  {
    img: Rest,
    title: "Stay longer",
    description: "Relish 20% off stays over 7 nights",
  },
];
