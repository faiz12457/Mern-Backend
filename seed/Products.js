import { Product } from "../models/productSchema.js";

const products = [
  {
    _id: {
      $oid: "680b64a3f70ee7b877517ebc",
    },
    name: "Solid Gold Petite Micropave",
    category: {
      $oid: "680b64a2f70ee7b877517eb7",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1678025061535-91fe679f8105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29sZHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 168,
    discountPercentage: 21,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    productBrand: {
      $oid: "680b64a2f70ee7b877517eba",
    },
    sizes: ["ONE SIZE"],
    inStock: true,
    stockQuantity: 15,
    colorsAvailable: ["gold"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T10:32:03.029Z",
    },
    updatedAt: {
      $date: "2025-04-25T10:32:03.029Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b66e4f70ee7b877517ed0",
    },
    name: "Mens Casual Slim Fit",
    category: {
      $oid: "680b6276f70ee7b877517ea1",
    },
    images: [
      "https://media.istockphoto.com/id/1302815072/photo/blank-black-tshirt-on-young-man-template-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=fcMjXvThamUSrM_9KT7cCFOwzaLSpejcZwyR4FNZq3A=",
    ],
    price: 15.99,
    discountPercentage: 20,
    description:
      "The color could be slightly different between on the screen and in practice.",
    productBrand: {
      $oid: "680b66e3f70ee7b877517ece",
    },
    sizes: ["S", "M", "L"],
    inStock: true,
    stockQuantity: 45,
    colorsAvailable: ["blue", "black"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T10:41:40.070Z",
    },
    updatedAt: {
      $date: "2025-04-25T10:41:40.070Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78688b000b0e614553a2",
    },
    name: "Classic White T-Shirt",
    category: {
      $oid: "680b78678b000b0e6145539d",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1682096353438-03b20899f011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xhc3NpYyUyMFdoaXRlJTIwVCUyMFNoaXJ0fGVufDB8fDB8fHww",
    ],
    price: 64.2,
    discountPercentage: 26,
    description:
      "A high-quality classic white t-shirt for everyday use in the fitness category.",
    productBrand: {
      $oid: "680b78688b000b0e614553a0",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 140,
    colorsAvailable: ["brown", "gray"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:24.345Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:24.345Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78688b000b0e614553aa",
    },
    name: "Running Shoes",
    category: {
      $oid: "680b78688b000b0e614553a5",
    },
    images: [
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UnVubmluZyUyMFNob2VzfGVufDB8fDB8fHww",
    ],
    price: 46,
    discountPercentage: 19,
    description:
      "A high-quality running shoes for everyday use in the footwear category.",
    productBrand: {
      $oid: "680b78688b000b0e614553a8",
    },
    sizes: ["6", "10", "8"],
    inStock: true,
    stockQuantity: 123,
    colorsAvailable: ["green", "orange", "black", "blue"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:24.969Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:24.969Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786b8b000b0e614553c8",
    },
    name: "Yoga Mat",
    category: {
      $oid: "680b78678b000b0e6145539d",
    },
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WW9nYSUyME1hdHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 104.41,
    discountPercentage: 22,
    description:
      "A high-quality yoga mat for everyday use in the fitness category.",
    productBrand: {
      $oid: "680b786b8b000b0e614553c6",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 84,
    colorsAvailable: ["brown", "yellow", "gray", "red"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:27.316Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:27.316Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786e8b000b0e614553f0",
    },
    name: "Water Bottle",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2F0ZXIlMjBCb3R0bGV8ZW58MHx8MHx8fDA%3D",
    ],
    price: 109.04,
    discountPercentage: 9,
    description:
      "A high-quality water bottle for everyday use in the accessories category.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 181,
    colorsAvailable: ["gray", "pink"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:30.370Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:30.370Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78708b000b0e6145540e",
    },
    name: "Fitness Tracker",
    category: {
      $oid: "680b78708b000b0e6145540b",
    },
    images: [
      "https://images.unsplash.com/photo-1665860455423-166cab57c383?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Rml0bmVzcyUyMFRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
    ],
    price: 145.78,
    discountPercentage: 27,
    description:
      "A high-quality fitness tracker for everyday use in the home category.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 111,
    colorsAvailable: ["pink", "blue"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:32.903Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:32.903Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78718b000b0e61455412",
    },
    name: "Slim Fit Jeans",
    category: {
      $oid: "680b78688b000b0e614553a5",
    },
    images: [
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2xpbSUyMEZpdCUyMEplYW5zfGVufDB8fDB8fHww",
    ],
    price: 72.24,
    discountPercentage: 23,
    description:
      "A high-quality slim fit jeans for everyday use in the footwear category.",
    productBrand: {
      $oid: "680b786a8b000b0e614553ba",
    },
    sizes: ["7", "10", "11"],
    inStock: true,
    stockQuantity: 130,
    colorsAvailable: ["pink", "blue", "red"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:33.245Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:33.245Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85ca3d86a6b808bc5044",
    },
    name: "Wireless Mouse",
    category: {
      $oid: "680b786c8b000b0e614553db",
    },
    images: [
      "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxXaXJlbGVzcyUyME1vdXNlfGVufDB8fHx8MTc0NTU4NDgyM3ww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=CXznHE1pKxE",
    ],
    price: 141.18,
    discountPercentage: 22,
    description: "A high-quality wireless mouse for everyday use.",
    productBrand: {
      $oid: "680b78688b000b0e614553a8",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 200,
    colorsAvailable: ["white", "blue"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:30.231Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:30.231Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85cb3d86a6b808bc5050",
    },
    name: "Laptop Stand",
    category: {
      $oid: "680b786a8b000b0e614553b7",
    },
    images: [
      "https://images.unsplash.com/flagged/photo-1576697011479-349e2a52bdf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxMYXB0b3AlMjBTdGFuZHxlbnwwfHx8fDE3NDU1ODQ4MjR8MA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=AiOzVFqlyZI",
    ],
    price: 100.8,
    discountPercentage: 8,
    description: "A high-quality laptop stand for everyday use.",
    productBrand: {
      $oid: "680b786d8b000b0e614553de",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 101,
    colorsAvailable: ["blue", "black"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:31.473Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:31.473Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85cd3d86a6b808bc5064",
    },
    name: "Desk Fan",
    category: {
      $oid: "680b786c8b000b0e614553db",
    },
    images: [
      "https://images.unsplash.com/photo-1565151443833-29bf2ba5dd8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxEZXNrJTIwRmFufGVufDB8fHx8MTc0NTU4NDgyNnww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=7p8cFwM0Y1s",
    ],
    price: 68.48,
    discountPercentage: 12,
    description: "A high-quality desk fan for everyday use.",
    productBrand: {
      $oid: "680b786d8b000b0e614553de",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 29,
    colorsAvailable: ["blue", "black"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:33.453Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:33.453Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85ce3d86a6b808bc5070",
    },
    name: "Phone Tripod",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1618228123700-a1c948bb2bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxQaG9uZSUyMFRyaXBvZHxlbnwwfHx8fDE3NDU1ODQ4Mjd8MA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=AJRZMx9XV7M",
    ],
    price: 66.92,
    discountPercentage: 12,
    description: "A high-quality phone tripod for everyday use.",
    productBrand: {
      $oid: "680b78688b000b0e614553a8",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 137,
    colorsAvailable: ["brown", "pink", "gray", "white"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:34.645Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:34.645Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85cf3d86a6b808bc507c",
    },
    name: "Fitness Band",
    category: {
      $oid: "680b786c8b000b0e614553db",
    },
    images: [
      "https://images.unsplash.com/photo-1617625802912-cde586faf331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxGaXRuZXNzJTIwQmFuZHxlbnwwfHx8fDE3NDU1ODQ4Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=8OQt1zTnJeE",
    ],
    price: 85.8,
    discountPercentage: 30,
    description: "A high-quality fitness band for everyday use.",
    productBrand: {
      $oid: "680b786b8b000b0e614553c6",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 47,
    colorsAvailable: ["green", "gray"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:35.832Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:35.832Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d43d86a6b808bc50b0",
    },
    name: "Sleep Mask",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/flagged/photo-1553802921-acdf7e60aa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxTbGVlcCUyME1hc2t8ZW58MHx8fHwxNzQ1NTg0ODMzfDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=xzHQOT0i4lY",
    ],
    price: 30.95,
    discountPercentage: 17,
    description: "A high-quality sleep mask for everyday use.",
    productBrand: {
      $oid: "680b78688b000b0e614553a8",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 44,
    colorsAvailable: ["orange", "gray"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:40.873Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:40.873Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d53d86a6b808bc50b4",
    },
    name: "Bike Light",
    category: {
      $oid: "680b78718b000b0e61455415",
    },
    images: [
      "https://images.unsplash.com/photo-1579118690145-7753994c2d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxCaWtlJTIwTGlnaHR8ZW58MHx8fHwxNzQ1NTg0ODM0fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=pwrLNxelrGU",
    ],
    price: 82.25,
    discountPercentage: 6,
    description: "A high-quality bike light for everyday use.",
    productBrand: {
      $oid: "680b786b8b000b0e614553c6",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 88,
    colorsAvailable: ["brown", "pink", "black", "yellow"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:41.264Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:41.264Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d83d86a6b808bc50cc",
    },
    name: "Makeup Mirror",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1602164075766-4e174147d2a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxNYWtldXAlMjBNaXJyb3J8ZW58MHx8fHwxNzQ1NTg0ODM2fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=mdeMauLYWoM",
    ],
    price: 108.18,
    discountPercentage: 23,
    description: "A high-quality makeup mirror for everyday use.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 188,
    colorsAvailable: ["orange", "white", "green"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:44.408Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:44.408Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d93d86a6b808bc50dc",
    },
    name: "Camping Mug",
    category: {
      $oid: "680b786a8b000b0e614553b7",
    },
    images: [
      "https://images.unsplash.com/photo-1605270160718-6acbc5a2a3d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxDYW1waW5nJTIwTXVnfGVufDB8fHx8MTc0NTU4NDgzOHww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=86hk1eVMaYA",
    ],
    price: 147.49,
    discountPercentage: 9,
    description: "A high-quality camping mug for everyday use.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d6",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 70,
    colorsAvailable: ["white", "brown", "pink", "black"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:45.969Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:45.969Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85db3d86a6b808bc50f0",
    },
    name: "Garlic Press",
    category: {
      $oid: "680b786c8b000b0e614553db",
    },
    images: [
      "https://images.unsplash.com/photo-1591299177061-2151e53fcaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxHYXJsaWMlMjBQcmVzc3xlbnwwfHx8fDE3NDU1ODQ4Mzl8MA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=FBbGyco88GU",
    ],
    price: 87.59,
    discountPercentage: 16,
    description: "A high-quality garlic press for everyday use.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d6",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 146,
    colorsAvailable: ["brown", "yellow", "white"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:47.901Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:47.901Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85dd3d86a6b808bc5100",
    },
    name: "Notebook Stand",
    category: {
      $oid: "680b78688b000b0e614553a5",
    },
    images: [
      "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxOb3RlYm9vayUyMFN0YW5kfGVufDB8fHx8MTc0NTU4NDg0MXww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=UCETKvFMBC4",
    ],
    price: 133.02,
    discountPercentage: 29,
    description: "A high-quality notebook stand for everyday use.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 54,
    colorsAvailable: ["brown", "black", "blue"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:49.461Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:49.461Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b6341f70ee7b877517eac",
    },
    name: "Mens Casual Premium Slim Fit T-Shirts",
    category: {
      $oid: "680b6276f70ee7b877517ea1",
    },
    images: [
      "https://images.unsplash.com/photo-1589794094880-be5a4daf3e11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fE1lbnMlMjBDYXN1YWwlMjBQcmVtaXVtJTIwU2xpbSUyMEZpdCUyMFQlMjBTaGlydHN8ZW58MHx8MHx8fDA%3D",
    ],
    price: 22.3,
    discountPercentage: 16,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket.",
    productBrand: {
      $oid: "680b6341f70ee7b877517eaa",
    },
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 50,
    colorsAvailable: ["white", "black", "gray"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T10:26:09.213Z",
    },
    updatedAt: {
      $date: "2025-04-25T10:26:09.213Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b6417f70ee7b877517eb4",
    },
    name: "John Hardy Women's Chain Bracelet",
    category: {
      $oid: "680b6417f70ee7b877517eaf",
    },
    images: [
      "https://images.unsplash.com/photo-1736323284848-3bf344e43a5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Sm9obiUyMEhhcmR5JTIwV29tZW4ncyUyMExlZ2VuZHMlMjBOYWdhJTIwR29sZCUyMCUyNiUyMFNpbHZlciUyMERyYWdvbiUyMFN0YXRpb24lMjBDaGFpbiUyMEJyYWNlbGV0fGVufDB8fDB8fHww",
    ],
    price: 695,
    discountPercentage: 23,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
    productBrand: {
      $oid: "680b6417f70ee7b877517eb2",
    },
    sizes: ["ONE SIZE"],
    inStock: true,
    stockQuantity: 69,
    colorsAvailable: ["gold", "silver"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T10:29:43.788Z",
    },
    updatedAt: {
      $date: "2025-04-25T10:29:43.788Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b6535f70ee7b877517ec4",
    },
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    category: {
      $oid: "680b6534f70ee7b877517ebf",
    },
    images: [
      "https://media.istockphoto.com/id/1141276030/photo/power-bank-for-charging-mobile-devices.webp?a=1&b=1&s=612x612&w=0&k=20&c=H-pvt0Ya4MtkMZGM4HaRFXEiK-zSRA5RBMrDgnGmV1M=",
    ],
    price: 64,
    discountPercentage: 30,
    description: "USB 3.0 and USB 2.0 compatibility for fast data transfers.",
    productBrand: {
      $oid: "680b6534f70ee7b877517ec2",
    },
    sizes: ["2 TB"],
    inStock: true,
    stockQuantity: 33,
    colorsAvailable: ["black"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T10:34:29.202Z",
    },
    updatedAt: {
      $date: "2025-04-25T10:34:29.202Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b67d2f70ee7b877517edc",
    },
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    category: {
      $oid: "680b64a2f70ee7b877517eb7",
    },
    images: [
      "https://images.unsplash.com/photo-1655452941121-da05c57cc95b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFBpZXJjZWQlMjBPd2wlMjBSb3NlJTIwR29sZCUyMFBsYXRlZCUyMFN0YWlubGVzcyUyMFN0ZWVsJTIwRG91YmxlfGVufDB8fDB8fHww",
    ],
    price: 10.99,
    discountPercentage: 0,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
    productBrand: {
      $oid: "680b67d2f70ee7b877517eda",
    },
    sizes: ["ONE SIZE"],
    inStock: true,
    stockQuantity: 99,
    colorsAvailable: ["rose gold"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T10:45:38.909Z",
    },
    updatedAt: {
      $date: "2025-04-25T10:45:38.909Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786a8b000b0e614553bc",
    },
    name: "Smartwatch",
    category: {
      $oid: "680b786a8b000b0e614553b7",
    },
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 18.86,
    discountPercentage: 8,
    description:
      "A high-quality smartwatch for everyday use in the clothing category.",
    productBrand: {
      $oid: "680b786a8b000b0e614553ba",
    },
    sizes: ["XS", "M", "L"],
    inStock: true,
    stockQuantity: 185,
    colorsAvailable: ["white", "yellow"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:26.365Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:26.365Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786a8b000b0e614553c2",
    },
    name: "Bluetooth Headphones",
    category: {
      $oid: "680b786a8b000b0e614553bf",
    },
    images: [
      "https://images.unsplash.com/photo-1628329567705-f8f7150c3cff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qmx1ZXRvb3RoJTIwSGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 142.56,
    discountPercentage: 26,
    description:
      "A high-quality bluetooth headphones for everyday use in the electronics category.",
    productBrand: {
      $oid: "680b78688b000b0e614553a8",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 147,
    colorsAvailable: ["gray", "blue", "pink", "white"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:26.846Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:26.846Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786d8b000b0e614553ea",
    },
    name: "Electric Toothbrush",
    category: {
      $oid: "680b786c8b000b0e614553db",
    },
    images: [
      "https://images.unsplash.com/photo-1556281419-ba93f523b592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWxlY3RyaWMlMjBUb290aGJydXNofGVufDB8fDB8fHww",
    ],
    price: 11.53,
    discountPercentage: 29,
    description:
      "A high-quality electric toothbrush for everyday use in the travel category.",
    productBrand: {
      $oid: "680b786d8b000b0e614553e8",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 156,
    colorsAvailable: ["green", "brown", "yellow", "white"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:29.931Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:29.931Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786e8b000b0e614553f4",
    },
    name: "Winter Gloves",
    category: {
      $oid: "680b78678b000b0e6145539d",
    },
    images: [
      "https://images.unsplash.com/photo-1698521620533-4ccf55a057b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFdpbnRlciUyMEdsb3Zlc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 86.29,
    discountPercentage: 22,
    description:
      "A high-quality winter gloves for everyday use in the fitness category.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 200,
    colorsAvailable: ["red", "yellow", "white"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:30.725Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:30.725Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786f8b000b0e61455400",
    },
    name: "Hair Dryer",
    category: {
      $oid: "680b786a8b000b0e614553b7",
    },
    images: [
      "https://images.unsplash.com/photo-1712481846916-8f73ffc2067a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEhhaXIlMjBEcnllcnxlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 106.64,
    discountPercentage: 23,
    description:
      "A high-quality hair dryer for everyday use in the clothing category.",
    productBrand: {
      $oid: "680b78688b000b0e614553a8",
    },
    sizes: ["L", "M", "XS"],
    inStock: true,
    stockQuantity: 41,
    colorsAvailable: ["blue", "red", "brown", "gray"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:31.760Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:31.760Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78738b000b0e61455424",
    },
    name: "Cotton Hoodie",
    category: {
      $oid: "680b78718b000b0e61455415",
    },
    images: [
      "https://images.unsplash.com/photo-1708739237236-8bb32a163c68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENvdHRvbiUyMEhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 84.01,
    discountPercentage: 7,
    description:
      "A high-quality cotton hoodie for everyday use in the kitchen category.",
    productBrand: {
      $oid: "680b786a8b000b0e614553ba",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 177,
    colorsAvailable: ["black", "green", "yellow", "orange"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:35.375Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:35.375Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85ca3d86a6b808bc5048",
    },
    name: "Noise Cancelling Earbuds",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1590658165737-15a047b7c0b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxOb2lzZSUyMENhbmNlbGxpbmclMjBFYXJidWRzfGVufDB8fHx8MTc0NTU4NDgyM3ww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=ArcRAMb_YZI",
    ],
    price: 15.22,
    discountPercentage: 14,
    description: "A high-quality noise cancelling earbuds for everyday use.",
    productBrand: {
      $oid: "680b78688b000b0e614553a0",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 70,
    colorsAvailable: ["orange", "pink", "blue", "brown"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:30.614Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:30.614Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85cb3d86a6b808bc504c",
    },
    name: "Digital Watch",
    category: {
      $oid: "680b786a8b000b0e614553bf",
    },
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxEaWdpdGFsJTIwV2F0Y2h8ZW58MHx8fHwxNzQ1NTg0ODI0fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=KiAYZZjpjkQ",
    ],
    price: 122,
    discountPercentage: 15,
    description: "A high-quality digital watch for everyday use.",
    productBrand: {
      $oid: "680b786b8b000b0e614553c6",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 165,
    colorsAvailable: ["yellow", "gray", "white"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:31.076Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:31.076Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85cb3d86a6b808bc5054",
    },
    name: "Travel Bag",
    category: {
      $oid: "680b78678b000b0e6145539d",
    },
    images: [
      "https://images.unsplash.com/photo-1448582649076-3981753123b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxUcmF2ZWwlMjBCYWd8ZW58MHx8fHwxNzQ1NTg0ODI1fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=9XiN0r2NWSM",
    ],
    price: 149.24,
    discountPercentage: 21,
    description: "A high-quality travel bag for everyday use.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d0",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 130,
    colorsAvailable: ["gray", "brown", "green", "red"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:31.883Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:31.883Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85cc3d86a6b808bc5058",
    },
    name: "LED Strip Light",
    category: {
      $oid: "680b78678b000b0e6145539d",
    },
    images: [
      "https://images.unsplash.com/photo-1500067318459-77a2667d9c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxMRUQlMjBTdHJpcCUyMExpZ2h0fGVufDB8fHx8MTc0NTU4NDgyNXww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=jnR7FpNCWCA",
    ],
    price: 109.21,
    discountPercentage: 28,
    description: "A high-quality led strip light for everyday use.",
    productBrand: {
      $oid: "680b78688b000b0e614553a0",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 56,
    colorsAvailable: ["yellow", "gray", "green", "white"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:32.277Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:32.277Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85cc3d86a6b808bc505c",
    },
    name: "Waterproof Jacket",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1681812508855-f7b04fefcd83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxXYXRlcnByb29mJTIwSmFja2V0fGVufDB8fHx8MTc0NTU4NDgyNXww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=odSjeN2wPtM",
    ],
    price: 49,
    discountPercentage: 11,
    description: "A high-quality waterproof jacket for everyday use.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d6",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 41,
    colorsAvailable: ["gray", "blue", "orange", "black"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:32.672Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:32.672Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85ce3d86a6b808bc506c",
    },
    name: "Foldable Stool",
    category: {
      $oid: "680b78718b000b0e61455415",
    },
    images: [
      "https://images.unsplash.com/photo-1527986654082-0b5b3fef2632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxGb2xkYWJsZSUyMFN0b29sfGVufDB8fHx8MTc0NTU4NDgyN3ww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=Ow_GfqblrG8",
    ],
    price: 143.27,
    discountPercentage: 19,
    description: "A high-quality foldable stool for everyday use.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d0",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 114,
    colorsAvailable: ["black", "white", "green", "blue"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:34.249Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:34.249Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85cf3d86a6b808bc5074",
    },
    name: "Beanie Hat",
    category: {
      $oid: "680b78708b000b0e6145540b",
    },
    images: [
      "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxCZWFuaWUlMjBIYXR8ZW58MHx8fHwxNzQ1NTg0ODI4fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=2BK0JEwQSpQ",
    ],
    price: 67.59,
    discountPercentage: 6,
    description: "A high-quality beanie hat for everyday use.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d0",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 20,
    colorsAvailable: ["green", "pink", "blue", "red"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:35.052Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:35.052Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d23d86a6b808bc5094",
    },
    name: "Bluetooth Tracker",
    category: {
      $oid: "680b78718b000b0e61455415",
    },
    images: [
      "https://images.unsplash.com/photo-1607027340690-37e80b0f1b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxCbHVldG9vdGglMjBUcmFja2VyfGVufDB8fHx8MTc0NTU4NDgzMXww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=jDfgqieEVJQ",
    ],
    price: 96.63,
    discountPercentage: 15,
    description: "A high-quality bluetooth tracker for everyday use.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d6",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 162,
    colorsAvailable: ["yellow", "red"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:38.159Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:38.159Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d33d86a6b808bc50a4",
    },
    name: "Key Organizer",
    category: {
      $oid: "680b786a8b000b0e614553bf",
    },
    images: [
      "https://images.unsplash.com/photo-1676276549694-a2e34840037a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxLZXklMjBPcmdhbml6ZXJ8ZW58MHx8fHwxNzQ1NTg0ODMyfDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=kAIjUvcxEmA",
    ],
    price: 41.04,
    discountPercentage: 13,
    description: "A high-quality key organizer for everyday use.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 121,
    colorsAvailable: ["pink", "white", "blue", "brown"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:39.705Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:39.705Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d43d86a6b808bc50a8",
    },
    name: "Charging Cable",
    category: {
      $oid: "680b78718b000b0e61455415",
    },
    images: [
      "https://images.unsplash.com/photo-1603539444875-76e7684265f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxDaGFyZ2luZyUyMENhYmxlfGVufDB8fHx8MTc0NTU4NDgzM3ww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=115YGe1M28I",
    ],
    price: 115.73,
    discountPercentage: 18,
    description: "A high-quality charging cable for everyday use.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 167,
    colorsAvailable: ["green", "orange", "pink"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:40.091Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:40.091Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d43d86a6b808bc50ac",
    },
    name: "Face Roller",
    category: {
      $oid: "680b78688b000b0e614553a5",
    },
    images: [
      "https://images.unsplash.com/photo-1600428853876-fb5a850b444f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxGYWNlJTIwUm9sbGVyfGVufDB8fHx8MTc0NTU4NDgzM3ww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=hYpHkpQG5ms",
    ],
    price: 55.86,
    discountPercentage: 6,
    description: "A high-quality face roller for everyday use.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 157,
    colorsAvailable: ["red", "yellow", "green", "pink"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:40.485Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:40.485Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d73d86a6b808bc50c0",
    },
    name: "Power Bank",
    category: {
      $oid: "680b78708b000b0e6145540b",
    },
    images: [
      "https://images.unsplash.com/photo-1594843665794-446ce915d840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxQb3dlciUyMEJhbmt8ZW58MHx8fHwxNzQ1NTg0ODM1fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=QsVafcI4ouo",
    ],
    price: 130.6,
    discountPercentage: 7,
    description: "A high-quality power bank for everyday use.",
    productBrand: {
      $oid: "680b786a8b000b0e614553ba",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 96,
    colorsAvailable: ["brown", "white", "gray"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:43.214Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:43.214Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d73d86a6b808bc50c4",
    },
    name: "Shoe Deodorizer",
    category: {
      $oid: "680b78708b000b0e6145540b",
    },
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxTaG9lJTIwRGVvZG9yaXplcnxlbnwwfHx8fDE3NDU1ODQ4MzV8MA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=164_6wVEHfI",
    ],
    price: 118.31,
    discountPercentage: 21,
    description: "A high-quality shoe deodorizer for everyday use.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 34,
    colorsAvailable: ["gray", "blue", "red"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:43.603Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:43.603Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d83d86a6b808bc50d0",
    },
    name: "Desk Mat",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/flagged/photo-1576697010744-a40aedd2dcca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxEZXNrJTIwTWF0fGVufDB8fHx8MTc0NTU4NDgzNnww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=k_lC6Cl6ZwI",
    ],
    price: 113.92,
    discountPercentage: 8,
    description: "A high-quality desk mat for everyday use.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d0",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 176,
    colorsAvailable: ["red", "orange"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:44.799Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:44.799Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d93d86a6b808bc50d4",
    },
    name: "Wrist Support",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1562494855-e008650bb2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxXcmlzdCUyMFN1cHBvcnR8ZW58MHx8fHwxNzQ1NTg0ODM3fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=Os2WMpNWpfM",
    ],
    price: 77.39,
    discountPercentage: 10,
    description: "A high-quality wrist support for everyday use.",
    productBrand: {
      $oid: "680b78688b000b0e614553a8",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 85,
    colorsAvailable: ["yellow", "gray"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:45.188Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:45.188Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85da3d86a6b808bc50e0",
    },
    name: "Cooking Timer",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1514986888952-8cd320577b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxDb29raW5nJTIwVGltZXJ8ZW58MHx8fHwxNzQ1NTg0ODM4fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=yWG-ndhxvqY",
    ],
    price: 20.25,
    discountPercentage: 14,
    description: "A high-quality cooking timer for everyday use.",
    productBrand: {
      $oid: "680b786d8b000b0e614553e8",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 139,
    colorsAvailable: ["blue", "yellow"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:46.357Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:46.357Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85db3d86a6b808bc50e8",
    },
    name: "Air Purifier",
    category: {
      $oid: "680b786c8b000b0e614553db",
    },
    images: [
      "https://images.unsplash.com/photo-1586801199339-3de994fcf442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxBaXIlMjBQdXJpZmllcnxlbnwwfHx8fDE3NDU1ODQ4Mzl8MA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=cDv28DLQDCc",
    ],
    price: 16.31,
    discountPercentage: 23,
    description: "A high-quality air purifier for everyday use.",
    productBrand: {
      $oid: "680b786d8b000b0e614553e8",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 188,
    colorsAvailable: ["black", "red", "pink"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:47.142Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:47.142Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85db3d86a6b808bc50ec",
    },
    name: "Cutting Board",
    category: {
      $oid: "680b786c8b000b0e614553db",
    },
    images: [
      "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxDdXR0aW5nJTIwQm9hcmR8ZW58MHx8fHwxNzQ1NTg0ODM5fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=f-TWhXOrLiU",
    ],
    price: 72.96,
    discountPercentage: 15,
    description: "A high-quality cutting board for everyday use.",
    productBrand: {
      $oid: "680b786d8b000b0e614553de",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 18,
    colorsAvailable: ["blue", "gray", "black", "red"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:47.535Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:47.535Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85dc3d86a6b808bc50f8",
    },
    name: "Laundry Basket",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxMYXVuZHJ5JTIwQmFza2V0fGVufDB8fHx8MTc0NTU4NDg0MHww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=5TfCI4nj6B4",
    ],
    price: 44.36,
    discountPercentage: 11,
    description: "A high-quality laundry basket for everyday use.",
    productBrand: {
      $oid: "680b786b8b000b0e614553c6",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 161,
    colorsAvailable: ["gray", "red"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:48.660Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:48.660Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85dd3d86a6b808bc50fc",
    },
    name: "Drawer Organizer",
    category: {
      $oid: "680b78718b000b0e61455415",
    },
    images: [
      "https://images.unsplash.com/photo-1463717738788-85fcacb6ac3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxEcmF3ZXIlMjBPcmdhbml6ZXJ8ZW58MHx8fHwxNzQ1NTg0ODQxfDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=h6xNSDlgciU",
    ],
    price: 60.74,
    discountPercentage: 10,
    description: "A high-quality drawer organizer for everyday use.",
    productBrand: {
      $oid: "680b786d8b000b0e614553de",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 155,
    colorsAvailable: ["orange", "white", "yellow"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:49.054Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:49.054Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b6630f70ee7b877517eca",
    },
    name: "Mens Cotton Jacket",
    category: {
      $oid: "680b6276f70ee7b877517ea1",
    },
    images: [
      "https://images.unsplash.com/photo-1608236159447-2d27116777f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxNZW5zJTIwQ290dG9uJTIwSmFja2V0fGVufDB8fDB8fHww",
    ],
    price: 55.99,
    discountPercentage: 5,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
    productBrand: {
      $oid: "680b6630f70ee7b877517ec8",
    },
    sizes: ["M", "L", "XL"],
    inStock: true,
    stockQuantity: 101,
    colorsAvailable: ["olive", "brown"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T10:38:40.930Z",
    },
    updatedAt: {
      $date: "2025-04-25T10:38:40.930Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b6763f70ee7b877517ed6",
    },
    name: "White Gold Plated Princess",
    category: {
      $oid: "680b64a2f70ee7b877517eb7",
    },
    images: [
      "https://images.unsplash.com/photo-1679019936444-0a48fe7c85a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29saWQlMjBHb2xkJTIwUGV0aXRlJTIwTWljcm9wYXZlfGVufDB8fDB8fHww",
    ],
    price: 9.99,
    discountPercentage: 9,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
    productBrand: {
      $oid: "680b6762f70ee7b877517ed4",
    },
    sizes: ["6", "7", "8"],
    inStock: true,
    stockQuantity: 78,
    colorsAvailable: ["white gold"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T10:43:47.048Z",
    },
    updatedAt: {
      $date: "2025-04-25T10:43:47.048Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78698b000b0e614553ae",
    },
    name: "Leather Backpack",
    category: {
      $oid: "680b78678b000b0e6145539d",
    },
    images: [
      "https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVhdGhlciUyMEJhY2twYWNrfGVufDB8fDB8fHww",
    ],
    price: 98.8,
    discountPercentage: 15,
    description:
      "A high-quality leather backpack for everyday use in the fitness category.",
    productBrand: {
      $oid: "680b78688b000b0e614553a0",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 91,
    colorsAvailable: ["green", "black", "brown"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:25.360Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:25.360Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78698b000b0e614553b4",
    },
    name: "Denim Jacket",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGVuaW0lMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D",
    ],
    price: 63.77,
    discountPercentage: 21,
    description:
      "A high-quality denim jacket for everyday use in the accessories category.",
    productBrand: {
      $oid: "680b78688b000b0e614553a8",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 36,
    colorsAvailable: ["brown", "green", "orange"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:25.815Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:25.815Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786b8b000b0e614553cc",
    },
    name: "Gaming Mouse",
    category: {
      $oid: "680b78688b000b0e614553a5",
    },
    images: [
      "https://images.unsplash.com/photo-1676315487574-0d456abe4e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEdhbWluZyUyME1vdXNlfGVufDB8fDB8fHww",
    ],
    price: 121.94,
    discountPercentage: 30,
    description:
      "A high-quality gaming mouse for everyday use in the footwear category.",
    productBrand: {
      $oid: "680b786b8b000b0e614553c6",
    },
    sizes: ["7", "8", "6"],
    inStock: true,
    stockQuantity: 57,
    colorsAvailable: ["yellow", "black", "green"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:27.672Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:27.672Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786d8b000b0e614553e0",
    },
    name: "Wireless Charger",
    category: {
      $oid: "680b786c8b000b0e614553db",
    },
    images: [
      "https://images.unsplash.com/photo-1591290619618-904f6dd935e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBDaGFyZ2VyfGVufDB8fDB8fHww",
    ],
    price: 24.14,
    discountPercentage: 21,
    description:
      "A high-quality wireless charger for everyday use in the travel category.",
    productBrand: {
      $oid: "680b786d8b000b0e614553de",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 34,
    colorsAvailable: ["black", "gray", "pink", "blue"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:29.125Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:29.125Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786d8b000b0e614553e4",
    },
    name: "Coffee Maker",
    category: {
      $oid: "680b786a8b000b0e614553b7",
    },
    images: [
      "https://images.unsplash.com/photo-1565452344518-47faca79dc69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29mZmVlJTIwTWFrZXJ8ZW58MHx8MHx8fDA%3D",
    ],
    price: 63.36,
    discountPercentage: 5,
    description:
      "A high-quality coffee maker for everyday use in the clothing category.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d6",
    },
    sizes: ["XL", "M", "L"],
    inStock: true,
    stockQuantity: 189,
    colorsAvailable: ["red", "orange"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:29.481Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:29.481Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786f8b000b0e614553f8",
    },
    name: "Backlit Keyboard",
    category: {
      $oid: "680b786a8b000b0e614553bf",
    },
    images: [
      "https://images.unsplash.com/photo-1562819606-b7a0ebd7e7c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJhY2tsaXQlMjBLZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 113.1,
    discountPercentage: 14,
    description:
      "A high-quality backlit keyboard for everyday use in the electronics category.",
    productBrand: {
      $oid: "680b78688b000b0e614553a0",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 199,
    colorsAvailable: ["orange", "gray", "white"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:31.072Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:31.072Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786f8b000b0e614553fc",
    },
    name: "Portable Speaker",
    category: {
      $oid: "680b786c8b000b0e614553db",
    },
    images: [
      "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBvcnRhYmxlJTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 36.92,
    discountPercentage: 25,
    description:
      "A high-quality portable speaker for everyday use in the travel category.",
    productBrand: {
      $oid: "680b786d8b000b0e614553de",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 187,
    colorsAvailable: ["white", "red", "pink", "brown"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:31.418Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:31.418Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78708b000b0e61455408",
    },
    name: "Desk Organizer",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1639916991657-e74ba7546b28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RGVzayUyME9yZ2FuaXplcnxlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 82.33,
    discountPercentage: 26,
    description:
      "A high-quality desk organizer for everyday use in the accessories category.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d6",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 15,
    colorsAvailable: ["red", "orange", "blue"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:32.451Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:32.451Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78718b000b0e61455418",
    },
    name: "Hiking Boots",
    category: {
      $oid: "680b78718b000b0e61455415",
    },
    images: [
      "https://images.unsplash.com/photo-1575987116913-e96e7d490b8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGlraW5nJTIwQm9vdHN8ZW58MHx8MHx8fDA%3D",
    ],
    price: 36.55,
    discountPercentage: 24,
    description:
      "A high-quality hiking boots for everyday use in the kitchen category.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d0",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 69,
    colorsAvailable: ["brown", "white", "blue"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:33.709Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:33.709Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78728b000b0e6145541c",
    },
    name: "Phone Case",
    category: {
      $oid: "680b786a8b000b0e614553bf",
    },
    images: [
      "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGhvbmUlMjBDYXNlfGVufDB8fDB8fHww",
    ],
    price: 124.44,
    discountPercentage: 6,
    description:
      "A high-quality phone case for everyday use in the electronics category.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 107,
    colorsAvailable: ["white", "gray", "black"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:34.051Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:34.051Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78748b000b0e6145542c",
    },
    name: "Instant Camera",
    category: {
      $oid: "680b78708b000b0e6145540b",
    },
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW5zdGFudCUyMENhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 26.75,
    discountPercentage: 25,
    description:
      "A high-quality instant camera for everyday use in the home category.",
    productBrand: {
      $oid: "680b786d8b000b0e614553e8",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 39,
    colorsAvailable: ["orange", "green", "gray"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:36.148Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:36.148Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78748b000b0e61455430",
    },
    name: "Travel Pillow",
    category: {
      $oid: "680b78678b000b0e6145539d",
    },
    images: [
      "https://images.unsplash.com/photo-1706819399603-428b06afe3fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHJhdmVsJTIwUGlsbG93fGVufDB8fDB8fHww",
    ],
    price: 21.7,
    discountPercentage: 15,
    description:
      "A high-quality travel pillow for everyday use in the fitness category.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 25,
    colorsAvailable: ["red", "yellow"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:36.491Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:36.491Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85cd3d86a6b808bc5068",
    },
    name: "Touchscreen Gloves",
    category: {
      $oid: "680b78708b000b0e6145540b",
    },
    images: [
      "https://images.unsplash.com/photo-1503453776591-b4548af666a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxUb3VjaHNjcmVlbiUyMEdsb3Zlc3xlbnwwfHx8fDE3NDU1ODQ4Mjd8MA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=OwX4DzrAOq8",
    ],
    price: 114.87,
    discountPercentage: 21,
    description: "A high-quality touchscreen gloves for everyday use.",
    productBrand: {
      $oid: "680b78688b000b0e614553a8",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 136,
    colorsAvailable: ["white", "orange", "red", "brown"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:33.852Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:33.852Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85cf3d86a6b808bc5078",
    },
    name: "Eco Tote Bag",
    category: {
      $oid: "680b786a8b000b0e614553b7",
    },
    images: [
      "https://images.unsplash.com/photo-1572810677431-9a662da8d284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxFY28lMjBUb3RlJTIwQmFnfGVufDB8fHx8MTc0NTU4NDgyOHww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=ZkfWNqu3m04",
    ],
    price: 48.88,
    discountPercentage: 27,
    description: "A high-quality eco tote bag for everyday use.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d0",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 147,
    colorsAvailable: ["black", "pink", "blue", "yellow"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:35.448Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:35.448Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d03d86a6b808bc5080",
    },
    name: "Smart Plug",
    category: {
      $oid: "680b78688b000b0e614553a5",
    },
    images: [
      "https://images.unsplash.com/photo-1622534138722-895a7deb9f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxTbWFydCUyMFBsdWd8ZW58MHx8fHwxNzQ1NTg0ODI5fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=phQnS6PwPBI",
    ],
    price: 13.06,
    discountPercentage: 11,
    description: "A high-quality smart plug for everyday use.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 42,
    colorsAvailable: ["yellow", "red"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:36.222Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:36.222Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d03d86a6b808bc5084",
    },
    name: "Mini Projector",
    category: {
      $oid: "680b786c8b000b0e614553db",
    },
    images: [
      "https://images.unsplash.com/photo-1520433259178-0a6b180165fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxNaW5pJTIwUHJvamVjdG9yfGVufDB8fHx8MTc0NTU4NDgyOXww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=B9mlRbtYA38",
    ],
    price: 84.33,
    discountPercentage: 27,
    description: "A high-quality mini projector for everyday use.",
    productBrand: {
      $oid: "680b786b8b000b0e614553c6",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 137,
    colorsAvailable: ["red", "white"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:36.611Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:36.611Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d13d86a6b808bc5090",
    },
    name: "Shower Speaker",
    category: {
      $oid: "680b78708b000b0e6145540b",
    },
    images: [
      "https://images.unsplash.com/photo-1471880504582-cf7e63045303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxTaG93ZXIlMjBTcGVha2VyfGVufDB8fHx8MTc0NTU4NDgzMXww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=wD5LMt3ElT4",
    ],
    price: 130.46,
    discountPercentage: 23,
    description: "A high-quality shower speaker for everyday use.",
    productBrand: {
      $oid: "680b786b8b000b0e614553c6",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 132,
    colorsAvailable: ["blue", "yellow"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:37.768Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:37.768Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d23d86a6b808bc5098",
    },
    name: "Luggage Scale",
    category: {
      $oid: "680b786a8b000b0e614553b7",
    },
    images: [
      "https://images.unsplash.com/photo-1516382461343-35e1ba016e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxMdWdnYWdlJTIwU2NhbGV8ZW58MHx8fHwxNzQ1NTg0ODMxfDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=U3FPDpXQjCY",
    ],
    price: 37.54,
    discountPercentage: 18,
    description: "A high-quality luggage scale for everyday use.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 59,
    colorsAvailable: ["gray", "orange"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:38.546Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:38.546Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d83d86a6b808bc50c8",
    },
    name: "Smart Bulb",
    category: {
      $oid: "680b786c8b000b0e614553db",
    },
    images: [
      "https://images.unsplash.com/photo-1661254454741-94b4f0e6ebbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxTbWFydCUyMEJ1bGJ8ZW58MHx8fHwxNzQ1NTg0ODM2fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=i3YbkHyJRLc",
    ],
    price: 45.81,
    discountPercentage: 8,
    description: "A high-quality smart bulb for everyday use.",
    productBrand: {
      $oid: "680b78688b000b0e614553a8",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 13,
    colorsAvailable: ["orange", "gray", "green", "pink"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:44.004Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:44.004Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85dd3d86a6b808bc5104",
    },
    name: "Phone Mount",
    category: {
      $oid: "680b78678b000b0e6145539d",
    },
    images: [
      "https://images.unsplash.com/photo-1698314440014-3badb1e9c938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxQaG9uZSUyME1vdW50fGVufDB8fHx8MTc0NTU4NDg0Mnww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=ZieeEAogV9Y",
    ],
    price: 29.73,
    discountPercentage: 22,
    description: "A high-quality phone mount for everyday use.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d0",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 88,
    colorsAvailable: ["yellow", "brown", "white"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:49.857Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:49.857Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6817d07bcb3e95f08b93c669",
    },
    name: "Samsung s20",
    category: {
      $oid: "6817bf240c100879d941f726",
    },
    images: [
      "http://res.cloudinary.com/dbofkusnh/image/upload/v1746391162/jbvtrz5bp8ydipc8fwwl.avif",
    ],
    price: 999,
    discountPercentage: 5,
    description:
      'The Samsung Galaxy S20 features a 6.2" Dynamic AMOLED 120Hz display, a 64MP triple camera, and powerful performance with 8GB RAM and 128GB storage. With 5G support and a sleek design, it’s built for speed, style, and stunning photography.',
    productBrand: {
      $oid: "6817cd1fcb3e95f08b93c663",
    },
    sizes: ["STANDARD"],
    inStock: true,
    stockQuantity: 50,
    colorsAvailable: ["black"],
    isDeleted: false,
    createdAt: {
      $date: "2025-05-04T20:39:23.654Z",
    },
    updatedAt: {
      $date: "2025-05-04T20:39:23.654Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786c8b000b0e614553d2",
    },
    name: "LED Desk Lamp",
    category: {
      $oid: "680b786a8b000b0e614553b7",
    },
    images: [
      "https://images.unsplash.com/photo-1571406487954-dc11b0c0767d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TEVEJTIwRGVzayUyMExhbXB8ZW58MHx8MHx8fDA%3D",
    ],
    price: 56.63,
    discountPercentage: 17,
    description:
      "A high-quality led desk lamp for everyday use in the clothing category.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d0",
    },
    sizes: ["L", "S", "XS"],
    inStock: true,
    stockQuantity: 59,
    colorsAvailable: ["pink", "orange", "green"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:28.139Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:28.139Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b786c8b000b0e614553d8",
    },
    name: "Sunglasses",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 138.23,
    discountPercentage: 24,
    description:
      "A high-quality sunglasses for everyday use in the accessories category.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d6",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 30,
    colorsAvailable: ["blue", "green", "orange"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:28.577Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:28.577Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78708b000b0e61455404",
    },
    name: "Notebook",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1685134731588-783ca7471b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Tm90ZWJvb2t8ZW58MHx8MHx8fDA%3D",
    ],
    price: 105.04,
    discountPercentage: 10,
    description:
      "A high-quality notebook for everyday use in the accessories category.",
    productBrand: {
      $oid: "680b786d8b000b0e614553de",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 38,
    colorsAvailable: ["red", "black", "pink"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:32.106Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:32.106Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78728b000b0e61455420",
    },
    name: "Casual Sneakers",
    category: {
      $oid: "680b78688b000b0e614553a5",
    },
    images: [
      "https://images.unsplash.com/photo-1542272606-405060e9517f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FzdWFsJTIwU25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    ],
    price: 129.28,
    discountPercentage: 25,
    description:
      "A high-quality casual sneakers for everyday use in the footwear category.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d0",
    },
    sizes: ["11", "8", "9"],
    inStock: true,
    stockQuantity: 76,
    colorsAvailable: ["red", "gray", "yellow", "brown"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:34.415Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:34.415Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78738b000b0e61455428",
    },
    name: "Silicone Spatula Set",
    category: {
      $oid: "680b78688b000b0e614553a5",
    },
    images: [
      "https://images.unsplash.com/photo-1668854192519-eb77482c0309?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNpbGljb25lJTIwU3BhdHVsYSUyMFNldHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 18.32,
    discountPercentage: 27,
    description:
      "A high-quality silicone spatula set for everyday use in the footwear category.",
    productBrand: {
      $oid: "680b786d8b000b0e614553e8",
    },
    sizes: ["10", "11", "7"],
    inStock: true,
    stockQuantity: 35,
    colorsAvailable: ["red", "black"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:35.803Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:35.803Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b78748b000b0e61455434",
    },
    name: "Sports Cap",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1736359639922-bbf6774020f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNwb3J0cyUyMENhcHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    price: 25.1,
    discountPercentage: 7,
    description:
      "A high-quality sports cap for everyday use in the accessories category.",
    productBrand: {
      $oid: "680b78688b000b0e614553a8",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 15,
    colorsAvailable: ["red", "blue", "yellow"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T11:56:36.841Z",
    },
    updatedAt: {
      $date: "2025-04-25T11:56:36.841Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85cd3d86a6b808bc5060",
    },
    name: "Minimal Wallet",
    category: {
      $oid: "680b786c8b000b0e614553db",
    },
    images: [
      "https://images.unsplash.com/photo-1703355685886-8ef78d28ae9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxNaW5pbWFsJTIwV2FsbGV0fGVufDB8fHx8MTc0NTU4NDgyNnww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=TCN85_rXOHI",
    ],
    price: 81.79,
    discountPercentage: 19,
    description: "A high-quality minimal wallet for everyday use.",
    productBrand: {
      $oid: "680b786d8b000b0e614553de",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 101,
    colorsAvailable: ["blue", "black", "brown", "pink"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:33.065Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:33.065Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d03d86a6b808bc5088",
    },
    name: "Thermal Bottle",
    category: {
      $oid: "680b786a8b000b0e614553bf",
    },
    images: [
      "https://images.unsplash.com/photo-1669697743047-de61a182711c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxUaGVybWFsJTIwQm90dGxlfGVufDB8fHx8MTc0NTU4NDgzMHww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=llxJGju49Ig",
    ],
    price: 124.49,
    discountPercentage: 20,
    description: "A high-quality thermal bottle for everyday use.",
    productBrand: {
      $oid: "680b78688b000b0e614553a0",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 169,
    colorsAvailable: ["black", "orange", "brown", "white"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:36.998Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:36.998Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d13d86a6b808bc508c",
    },
    name: "Hiking Hat",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1568645367936-afb92b45e3bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxIaWtpbmclMjBIYXR8ZW58MHx8fHwxNzQ1NTg0ODMwfDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=lIgSK2WyNpQ",
    ],
    price: 20.36,
    discountPercentage: 6,
    description: "A high-quality hiking hat for everyday use.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 147,
    colorsAvailable: ["red", "green", "yellow", "blue"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:37.375Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:37.375Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d23d86a6b808bc509c",
    },
    name: "Neck Massager",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1615997408304-2ece403afe7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxOZWNrJTIwTWFzc2FnZXJ8ZW58MHx8fHwxNzQ1NTg0ODMyfDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=l71GsxoyhUA",
    ],
    price: 64.44,
    discountPercentage: 20,
    description: "A high-quality neck massager for everyday use.",
    productBrand: {
      $oid: "680b786a8b000b0e614553ba",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 169,
    colorsAvailable: ["gray", "yellow"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:38.927Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:38.927Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d33d86a6b808bc50a0",
    },
    name: "Portable Blender",
    category: {
      $oid: "680b78698b000b0e614553b1",
    },
    images: [
      "https://images.unsplash.com/photo-1634314672332-cc317dbd5772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxQb3J0YWJsZSUyMEJsZW5kZXJ8ZW58MHx8fHwxNzQ1NTg0ODMyfDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=8UudGshBTK4",
    ],
    price: 92.73,
    discountPercentage: 28,
    description: "A high-quality portable blender for everyday use.",
    productBrand: {
      $oid: "680b786b8b000b0e614553c6",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 80,
    colorsAvailable: ["green", "blue", "yellow"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:39.315Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:39.315Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d53d86a6b808bc50b8",
    },
    name: "Resistance Bands",
    category: {
      $oid: "680b78688b000b0e614553a5",
    },
    images: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxSZXNpc3RhbmNlJTIwQmFuZHN8ZW58MHx8fHwxNzQ1NTg0ODM0fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=IZOAOjvwhaM",
    ],
    price: 119.25,
    discountPercentage: 6,
    description: "A high-quality resistance bands for everyday use.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d6",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 14,
    colorsAvailable: ["brown", "orange", "yellow", "pink"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:41.685Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:41.685Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d63d86a6b808bc50bc",
    },
    name: "Sweat Towel",
    category: {
      $oid: "680b78718b000b0e61455415",
    },
    images: [
      "https://images.unsplash.com/photo-1556228720-950d08a2a516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxTd2VhdCUyMFRvd2VsfGVufDB8fHx8MTc0NTU4NDgzNXww&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=vodLfNVba40",
    ],
    price: 57.71,
    discountPercentage: 30,
    description: "A high-quality sweat towel for everyday use.",
    productBrand: {
      $oid: "680b786c8b000b0e614553d0",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 158,
    colorsAvailable: ["white", "red", "yellow", "orange"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:42.740Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:42.740Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85d93d86a6b808bc50d8",
    },
    name: "Sun Hat",
    category: {
      $oid: "680b78678b000b0e6145539d",
    },
    images: [
      "https://images.unsplash.com/photo-1622498159371-15d14f8acdaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxTdW4lMjBIYXR8ZW58MHx8fHwxNzQ1NTg0ODM3fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=vBmXXZrM7tA",
    ],
    price: 135.36,
    discountPercentage: 27,
    description: "A high-quality sun hat for everyday use.",
    productBrand: {
      $oid: "680b786e8b000b0e614553ee",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 85,
    colorsAvailable: ["white", "green", "black"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:45.583Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:45.583Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85da3d86a6b808bc50e4",
    },
    name: "Spice Rack",
    category: {
      $oid: "680b78678b000b0e6145539d",
    },
    images: [
      "https://images.unsplash.com/photo-1580116270858-8a0d62b15426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxTcGljZSUyMFJhY2t8ZW58MHx8fHwxNzQ1NTg0ODM4fDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=1I9bMlIAIBM",
    ],
    price: 32.76,
    discountPercentage: 10,
    description: "A high-quality spice rack for everyday use.",
    productBrand: {
      $oid: "680b786b8b000b0e614553c6",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 167,
    colorsAvailable: ["gray", "orange"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:46.749Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:46.749Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85dc3d86a6b808bc50f4",
    },
    name: "Vacuum Bottle",
    category: {
      $oid: "680b78718b000b0e61455415",
    },
    images: [
      "https://images.unsplash.com/photo-1549049950-48d5887197a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxWYWN1dW0lMjBCb3R0bGV8ZW58MHx8fHwxNzQ1NTg0ODQwfDA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=dnstpPqCBbw",
    ],
    price: 111.14,
    discountPercentage: 16,
    description: "A high-quality vacuum bottle for everyday use.",
    productBrand: {
      $oid: "680b786d8b000b0e614553e8",
    },
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    stockQuantity: 25,
    colorsAvailable: ["gray", "black", "blue"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:48.269Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:48.269Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "680b85de3d86a6b808bc5108",
    },
    name: "Cable Organizer",
    category: {
      $oid: "680b786a8b000b0e614553bf",
    },
    images: [
      "https://images.unsplash.com/photo-1495381573661-f483d042d2ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI5MDV8MHwxfHNlYXJjaHwxfHxDYWJsZSUyME9yZ2FuaXplcnxlbnwwfHx8fDE3NDU1ODQ4NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=Qwg4Bwg4gPk",
    ],
    price: 13.82,
    discountPercentage: 11,
    description: "A high-quality cable organizer for everyday use.",
    productBrand: {
      $oid: "680b786d8b000b0e614553de",
    },
    sizes: ["Standard"],
    inStock: true,
    stockQuantity: 25,
    colorsAvailable: ["red", "brown", "green", "black"],
    isDeleted: false,
    createdAt: {
      $date: "2025-04-25T12:53:50.262Z",
    },
    updatedAt: {
      $date: "2025-04-25T12:53:50.262Z",
    },
    __v: 0,
  },
];


const normalizedProducts = products.map((product) => ({
  ...product,
  _id: typeof product._id === "object" ? product._id.$oid : product._id,
  category: typeof product.category === "object" ? product.category.$oid : product.category,
  productBrand:
    typeof product.productBrand === "object"
      ? product.productBrand.$oid
      : product.productBrand,
  createdAt:
    product.createdAt?.$date || product.createdAt?.date || product.createdAt,
  updatedAt:
    product.updatedAt?.$date || product.updatedAt?.date || product.updatedAt,
}));





export const seedProducts=async()=>{
      try { 
         await Product.insertMany(normalizedProducts);
         console.log('Products Seed Successfully')
      } catch (error) {
           console.log(error);
      }
}