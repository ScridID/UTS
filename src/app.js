document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
    items: [
      { id: 1, name: 'Meja', img: '1.jpg', price: 800000 },
      { id: 2, name: 'Kursi', img: '2.jpg', price: 700000 },
      { id: 3, name: 'Pintu', img: '3.jpg', price: 10000000 },
      { id: 4, name: 'Lemari', img: '4.jpg', price: 9000000 },
    ],

  }));

});
