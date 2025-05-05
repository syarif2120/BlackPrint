document.addEventListener('alpine:init', () => {
  Alpine.data('Products', () => ({
    items: [
      { id: 1, name: "banner", img: "1.jpg", price: 100000 },
      { id: 2, name: "poster", img: "2.jpg", price: 100000 },
      { id: 3, name: "stiker", img: "3.jpg", price: 100000 },
      { id: 4, name: "wallpaper", img: "4.jpg", price: 100000 },
      { id: 5, name: "vinyl", img: "5.jpg", price: 100000 },
    ],
  }));
});