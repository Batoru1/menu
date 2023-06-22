//get only unique categories - HARDEST ONE
//iterate over categories return buttons
//make sure to select buttons when they are available

//items
const menu = [
  {
    id: 1,
    title: 'bacon magic buns',
    category: 'lunch',
    price: 9.99,
    img: './images/item-1.jpg',
    desc: `Bacon ipsum dolor amet short loin chicken pork belly corned beef pork chop. Corned beef tri-tip picanha, strip steak frankfurter shoulder kielbasa biltong sausage prosciutto meatball turducken.`,
  },
  {
    id: 2,
    title: 'superb pasta',
    category: 'lunch',
    price: 7.99,
    img: './images/item-2.jpg',
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eaque ab voluptatem architecto tenetur exercitationem nostrum similique possimus`,
  },
  {
    id: 3,
    title: 'nut briani',
    category: 'lunch',
    price: 12.99,
    img: './images/item-3.jpg',
    desc: `Turpis egestas sed tempus urna et. Enim nunc faucibus a pellentesque sit amet. Morbi enim nunc faucibus a pellentesque.`,
  },
  {
    id: 4,
    title: 'eggvakado toast',
    category: 'breakfast',
    price: 6.99,
    img: './images/item-4.jpg',
    desc: `Viverra accumsan in nisl nisi scelerisque. Quis auctor elit sed vulputate mi sit. Semper risus in hendrerit gravida rutrum quisque.`,
  },
  {
    id: 5,
    title: 'blueberry-chocko pancakes',
    category: 'breakfast',
    price: 9.5,
    img: './images/item-5.jpg',
    desc: `Shortbread gummi bears powder sweet roll oat cake cookie brownie jelly beans. Donut sweet cupcake sweet roll tootsie roll gummies powder cake cupcake. Cotton candy dragée jelly beans pastry marzipan halvah pie`,
  },
  {
    id: 6,
    title: 'breakfast',
    category: 'rising ceaser',
    price: 7.69,
    img: './images/item-6.jpg',
    desc: `Consectetur libero id faucibus nisl tincidunt eget nullam. Molestie at elementum eu facilisis sed odio morbi. Convallis posuere morbi leo`,
  },
  {
    id: 7,
    title: 'the rawest',
    category: 'dinner',
    price: 17.99,
    img: './images/item-7.jpg',
    desc: `Alcatra salami pork loin, shoulder shankle drumstick buffalo brisket corned beef meatloaf landjaeger. Salami fatback pastrami, cow corned beef chicken chislic shoulder pork bacon bresaola pork loin.`,
  },
  {
    id: 8,
    title: 'well-donner',
    category: 'dinner',
    price: 16.99,
    img: './images/item-8.jpg',
    desc: `enison shank pig turkey, chuck pancetta corned beef porchetta pork capicola. Short ribs pancetta beef alcatra, turkey tri-tip chuck strip steak.`,
  },
  {
    id: 9,
    title: 'strawberry bliss',
    category: 'shakes',
    price: 4.99,
    img: './images/item-9.jpg',
    desc: `Pie chocolate cake toffee candy canes sesame snaps sweet sweet. Tootsie roll dragée sweet roll jelly beans liquorice jelly-o soufflé. Jelly sesame snaps chocolate cake tootsie roll jelly-o `,
  },
  {
    id: 10,
    title: 'strawberry punch-shake',
    category: 'shakes',
    price: 3.99,
    img: './images/item-1.jpg',
    desc: `Macaroon macaroon croissant caramels wafer pastry dessert soufflé. Wafer oat cake sugar plum bear claw cookie topping.`,
  },
];
//load itms

//filter items
