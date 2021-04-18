export interface Business {
  id: number;
  name: string;
  description: string;
  img_url: string;
}

export const BUSINESSES: Business[] = [
  {
    id: 1,
    name: 'test 1',
    description: "it's a cool company yo",
    img_url: '../../assets/test_logo_1.jpeg',
  },
  {
    id: 2,
    name: 'test 2',
    description: "this is the second copmany",
    img_url: '../../assets/rectangle_logo.png',
  },
  {
    id: 3,
    name: 'test 3',
    description: "hello world 333",
    img_url: '../../assets/test_logo_1.jpeg',
  },
  {
    id: 4,
    name: 'test 4',
    description: "use the fourth",
    img_url: '../../assets/test_logo_2.jpeg',
  },
];