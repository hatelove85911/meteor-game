import './productListItem.html'
import './basket.html'

Template.basket.helpers({
  products: function () {
    return [{
      image: '/images/banana.jpg'
    }, {
      image: '/images/apple.jpg'
    }, {
      image: '/images/peer.jpg'
    }]
  }
})
