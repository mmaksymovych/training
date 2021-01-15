function Event() {
  this.subscribers = [];
}

Event.prototype = {
  subscribe: function (id, fn) {
    this.subscribers.push([id, fn]);
  },
  unsubscribe: function (id) {
    this.subscribers = this.subscribers.filter(([_id]) => _id !== id);
  },
  startSale: function (event) {
    this.subscribers.forEach(([_id, subscriber]) => subscriber(event));
  },
};

function Dealer(id, name) {
  this.id = id;
  this.name = name;
}
Dealer.prototype = {
  startSale: function (event) {
    console.log(`${this.name} start ticket sale for event ${event}!!!`);
  },
};

const ticketUA = new Dealer(1, 'Ticket UA');
const karabas = new Dealer(2, 'Karabas');

const ev = new Event();
ev.subscribe(ticketUA.id, ticketUA.startSale.bind(ticketUA));
ev.subscribe(karabas.id, karabas.startSale.bind(karabas));

ev.startSale('IT Arena');

ev.unsubscribe(karabas.id);

ev.startSale('Lviv JS');
