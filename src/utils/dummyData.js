export const dummyData = [
  {
    id: 1,
    name: "Palm Harbor",
    price: 2095,
    address: "3115 I Ave #APT 2A, Brooklyn, New York",
    image:
      "https://images.pexels.com/photos/5071177/pexels-photo-5071177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    state: "New York",
    beds: 3,
    bathroom: 2,
    area: "5x7",
    tag: "Popular",
    type: "Residential",
  },
  {
    id: 2,
    name: "Cherry End",
    price: 3250,
    state: "New York",
    address: "62 Big Tree St, Livonia, New York",
    image:
      "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg",
    beds: 3,
    bathroom: 3,
    area: "6x7",
    tag: "New",
    type: "Commercial",
  },
  {
    id: 3,
    name: "Street View",
    price: 2549,
    state: "New York",
    address: "34 Wolf Pond Rd, Wurtsboro, New York",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    beds: 2,
    bathroom: 2,
    area: "5x7",
    tag: "Popular",
    type: "Residential",
  },
  {
    id: 4,
    name: "The Willows",
    price: 4000,
    state: "New York",
    address: "1549 Scott Center Rd, Sherman, New York",
    image:
      "https://images.pexels.com/photos/9952001/pexels-photo-9952001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    beds: 4,
    bathroom: 4,
    area: "8x8",
    tag: "Hot",
    type: "Residential",
  },
  {
    id: 5,
    name: "Red Lodge",
    price: 2759,
    state: "New York",
    address: "312 S Shore Rd, Caroga Lake, New York",
    image:
      "https://images.pexels.com/photos/8583869/pexels-photo-8583869.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    beds: 3,
    bathroom: 2,
    area: "6x5",
    tag: "New",
    type: "Residential",
  },
  {
    id: 6,
    name: "Cherrylands",
    price: 4400,
    state: "New York",
    address: "58 S Main St, Batavia, New York",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27HFtDzJvS9StEfk1ida0BRbLK6VIcHzbCg&usqp=CAU",
    beds: 3,
    bathroom: 3,
    area: "6x7",
    tag: "New",
    type: "Commercial",
  },
  {
    id: 7,
    name: "The Apples",
    price: 3375,
    state: "California",
    address: "1071 41st Ave #6300, Santa Cruz, California",
    image:
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    beds: 3,
    bathroom: 3,
    area: "6x7",
    tag: "Hot",
    type: "Residential",
  },
  {
    id: 8,
    name: "Weston End",
    price: 2450,
    state: "California",
    address: "478 Eagle Lake Rd, Susanville, California",
    image:
      "https://media.gettyimages.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=gi&k=20&c=ANSbtbaJgd_AQYLH0f7gp2eLgzXdal6UZrw3Lxqgeok=",
    beds: 3,
    bathroom: 3,
    area: "6x7",
    tag: "Popular",
    type: "Residential",
  },
  {
    id: 9,
    name: "Primrose View",
    price: 3375,
    state: "California",
    address: "4562 Larwin Ave, Cypress, California",
    image:
      "https://ajantacommercial.com/wp-content/uploads/2019/06/aboutreal2-min.jpg",
    beds: 3,
    bathroom: 3,
    area: "6x7",
    tag: "New",
    type: "Commercial",
  },
  {
    id: 10,
    name: "Lakeways",
    price: 4000,
    state: "California",
    address: "4118 Constellation Rd, Lompoc, California",
    image:
      "https://housedesignsindia.com/image/catalog/exterior/commercial-img-2.jpg",
    beds: 3,
    bathroom: 3,
    area: "6x7",
    tag: "Hot",
    type: "Commercial",
  },
  {
    id: 11,
    name: "Elvina's Lodge",
    price: 2750,
    state: "California",
    address: "4564 N Isle Royale St, Moorpark, California",
    image:
      "https://media.gettyimages.com/id/1221023970/photo/small-red-brick-house-with-green-grass.jpg?s=612x612&w=gi&k=20&c=a8TH_52RXRULOric_zzltY0HWAOGrMJw328LafFgj1M=",
    beds: 3,
    bathroom: 3,
    area: "6x7",
    tag: "New",
    type: "Residential",
  },
  {
    id: 12,
    name: "The Old Bakery",
    price: 3375,
    state: "California",
    address: "317 Fairchild Dr, Travis Afb, California",
    image:
      "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg",
    beds: 3,
    bathroom: 3,
    area: "6x7",
    tag: "Popular",
    type: "Commercial",
  },
];

const getFilteredData = (filters) => {
  const { state, price, type } = filters;
  const [bottomPrice, topPrice] = price.replaceAll("$", "").split("-");

  const res = dummyData
    .filter((item) => item.state === state)
    .filter((item) => {
      return item.price <= topPrice && item.price >= bottomPrice;
    })
    .filter((item) => item.type === type);
  return res;
};

export default getFilteredData;
