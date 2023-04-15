import { Factory } from 'miragejs';

export default Factory.extend({
  name(i) {
    return `Car ${i + 1}`;
  },
});
