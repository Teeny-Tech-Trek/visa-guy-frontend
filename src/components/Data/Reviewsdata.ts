/*
  ─────────────────────────────────────────────────────────
  VISA GUY — Google Reviews Mock Data
  - Random placeholder avatars/names/text for now
  - Replace later with real review data
  ─────────────────────────────────────────────────────────
*/

export interface Review {
  id: number;
  name: string;
  avatar: string;
  timeAgo: string;
  rating: number; // out of 5
  text: string;
  helpfulCount: number;
}

const AVATARS = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/women/21.jpg",
  "https://randomuser.me/api/portraits/men/77.jpg",
  "https://randomuser.me/api/portraits/women/33.jpg",
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Karan Singh",
    avatar: AVATARS[0],
    timeAgo: "3 weeks ago",
    rating: 5,
    text: "Got my Australia PR with the help of Visa Guy. Their team is highly professional and transparent.",
    helpfulCount: 12,
  },
  {
    id: 2,
    name: "Simran Kaur",
    avatar: AVATARS[1],
    timeAgo: "3 weeks ago",
    rating: 5,
    text: "I highly recommend Visa Guy to everyone. They made my Canada study visa process stress-free.",
    helpfulCount: 18,
  },
  {
    id: 3,
    name: "Rohit Mehta",
    avatar: AVATARS[2],
    timeAgo: "1 month ago",
    rating: 5,
    text: "Excellent guidance and support throughout my UK student visa process. Highly recommended!",
    helpfulCount: 9,
  },
  {
    id: 4,
    name: "Priya Sharma",
    avatar: AVATARS[3],
    timeAgo: "1 month ago",
    rating: 5,
    text: "Very professional and reliable team. They guided me for my USA tourist visa and the experience was excellent.",
    helpfulCount: 11,
  },
  {
    id: 5,
    name: "Vivek Patel",
    avatar: AVATARS[4],
    timeAgo: "1 month ago",
    rating: 5,
    text: "From profile evaluation to stamping, everything was smooth and well managed. Thank you Visa Guy!",
    helpfulCount: 7,
  },
  {
    id: 6,
    name: "Anjali Verma",
    avatar: AVATARS[5],
    timeAgo: "2 months ago",
    rating: 5,
    text: "Smooth and quick processing for my Germany work visa. The team kept me updated at every step.",
    helpfulCount: 14,
  },
  {
    id: 7,
    name: "Manpreet Singh",
    avatar: AVATARS[6],
    timeAgo: "2 months ago",
    rating: 5,
    text: "Honest advice and zero hidden charges. My New Zealand visa got approved without any hassle.",
    helpfulCount: 10,
  },
  {
    id: 8,
    name: "Neha Kapoor",
    avatar: AVATARS[7],
    timeAgo: "2 months ago",
    rating: 5,
    text: "Best consultancy in the region. Their documentation support made my Canada PR journey so much easier.",
    helpfulCount: 15,
  },
];