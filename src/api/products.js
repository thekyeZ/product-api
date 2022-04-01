const express = require('express');
const things = require('./data');

const router = express.Router();

Object.defineProperty(String.prototype, 'capitalize', {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

const categories = [
  'electronics',
  'food',
  'beauty',
  'toys',
  'chemical',
  'car-parts',
  'gadgets',
];
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis iaculis dolor sed malesuada. Sed ipsum urna, hendrerit in tincidunt vel, fringilla in nibh. Mauris eu magna convallis, cursus nisi et, semper nisl. Duis dignissim libero mauris, at feugiat diam molestie et. Nullam dignissim elementum augue, vitae facilisis libero rutrum in. Sed blandit libero eu dolor sagittis venenatis. Suspendisse nec dui orci. Ut vel sollicitudin ligula. Praesent eget lectus eget purus efficitur egestas lobortis varius nibh. Morbi eu ex sed mi pretium fermentum. Nulla et justo quam. Morbi bibendum mattis pretium. Donec sed eleifend sem.
In viverra, libero eget fringilla ultrices, dui odio vehicula magna, et molestie ligula risus quis lacus. Nam lacus lacus, eleifend vitae aliquet nec, ullamcorper et massa. Vestibulum commodo est eu leo volutpat pretium et et augue. Curabitur luctus purus id sem pulvinar, vitae maximus mi lacinia. Praesent tincidunt, mauris quis sagittis mollis, elit odio vulputate purus, nec fermentum magna velit nec mauris. Nullam blandit laoreet enim, sed posuere dui lobortis nec. Morbi eu interdum quam. Ut vestibulum, nunc eu egestas ultricies, enim metus sodales massa, a faucibus urna dui vitae nunc.`;

const objs = things.map((thing, i) => {
  return {
    id: i,
    name: thing.capitalize(),
    price: Number((Math.random() * (100 - 1) + 1).toFixed(2)),
    category: categories[Math.floor(Math.random() * categories.length)],
    img: 'https://picsum.photos/300/300',
    description: lorem.slice(0, Math.floor(Math.random() * (1228 - 600)) + 600),
  };
});

router.get('/', (req, res) => {
  res.json(objs);
});

module.exports = router;
