// opened on domain.com/

import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "item00",
    title: `Meetup Title 1`,
    image: `https://i.picsum.photos/id/453/600/300.jpg?hmac=y-N_pHLQQ5XR1Kja9ZEYkN1xA0tNQFcrhlGZCyOR5CE`,
    address: `18 Woodstock Avenue, Newton-Le-Willows`,
    pinCode: `WA12 8PR`,
    description: `This is the face of Jamal Falkner, a true defender among humans. He stands short among others, despite his strong frame.`,
  },
  {
    id: "item01",
    title: `Meetup Title 2`,
    image: `https://i.picsum.photos/id/810/600/300.jpg?hmac=SGArzr7LmabUp-RXGXnqAwdqzLYcBmrajqz06wIMrUk`,
    address: `Mayfield, Main Street, Cleator`,
    pinCode: `CA23 3DP`,
    description: `There's something puzzling about him, perhaps it's his persistence or perhaps it's simply his unfortunate past. But nonetheless, people tend to worship him, while wishing they were more like him.`,
  },
  {
    id: "item02",
    title: `Meetup Title 3`,
    image: `https://i.picsum.photos/id/512/600/300.jpg?hmac=EIFIGisqTgapXYQbHyCSEfb3CdVBmatAGoXGSxI68wo`,
    address: `5 Broom Close, Calcot`,
    pinCode: `RG31 4ZS`,
    description: `This is the face of Gnurl Boneslayer, a true warrior among orcs. He stands graciously among others, despite his sturdy frame.`,
  },
  {
    id: "item03",
    title: `Meetup Title 4`,
    image: `https://i.picsum.photos/id/674/600/300.jpg?hmac=EF6ck0699W0NqSHE0e8yteeqbdrVX_SaerSaWYvSdgo`,
    address: `7 Holly Drive, Wick`,
    pinCode: `BN17 6LB`,
    description: `This is the face of Byron Hanshaw, a true challenger among humans. He stands graciously among others, despite his bulky frame.`,
  },
  {
    id: "item04",
    title: `Meetup Title 5`,
    image: `https://i.picsum.photos/id/443/600/300.jpg?hmac=P6HMZyhHetmKm68_wJHlOJfmFiaNqLE41LOhyExfvmI`,
    address: `3 Tanyard Flats, High Street, Rolvenden`,
    pinCode: `TN17 4LR`,
    description: `This is the face of Jamal Geary, a true warrior among giants. He stands easily among others, despite his brawny frame.`,
  },
];

function HomePage() {
  return (
    <Layout>
      <h1>HomePage</h1>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}

export default HomePage;
