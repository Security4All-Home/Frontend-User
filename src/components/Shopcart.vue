<template>
  <div class="box">
    <button class="delete" aria-label="close" @click="$emit('close')"></button>
    <span v-if="!hasSensor()">No products :/</span>
    <div v-for="(sensor, index) in getSensorsInCart" :key="index" class="box-item">
      <img :src="sensor.image" alt class="item-thumb" />
      <h3 class="item-name">{{ sensor.name }}</h3>
      <span class="item-amount">Amount: 1</span>
      <span class="item-price">€{{ sensor.price }}, 00</span>
    </div>
    <div class="cart-info" v-if="hasSensor()">
      <span>Total: €{{ totalPrice() }}, 00</span>
      <router-link to="/checkout">
        <a href="#" class="button is-info is-small">Checkout</a>
      </router-link>
    </div>
  </div>

  <!-- <div class="container">
    <div class="shopping-cart is-dark">
      <div class="shopping-cart-header">
        <i class="fa fa-shopping-cart cart-icon"></i>
        <span class="badge">3</span>
        <div class="shopping-cart-total">
          <span class="lighter-text">Total:</span>
          <span class="cart-total main-color-text">{{totalPrice()}}</span>
          <button class="delete" aria-label="close" @click="$emit('close')"></button>
        </div>
      </div>
      <ul class="shopping-cart-items">
        <span class="cart-products" v-if="!hasSensor()">No products :/</span>
        <li class="clearfix" v-for="(sensor, index) in getSensorsInCart" :key="index">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="level">
                <div class="level-item">
                  <figure class="image is-128x128">
                    <img src="../assets/Images/sensor.png" alt="item1" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column">
              <span class="item-name">{{sensor.name}}</span>
              <span class="item-price">{{sensor.price}}</span>
              <span class="item-quantity">Quantity: 01</span>
            </div>
          </div>
        </li>
      </ul>
      <a href="#" class="button">Checkout</a>
    </div>
  </div>-->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "shopcart",
  data() {
    return {
      items: [
        {
          id: 1,
          image: "./assets/Images/motion_sensor.png",
          name: "Motion Sensor",
          price: 10.0,
          amount: "1"
        }
      ]
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    hasSensor() {
      return this.getSensorsInCart.length > 0;
    },
    totalPrice() {
      return this.getSensorsInCart.reduce(
        (current, next) => current + next.price,
        0
      );
    },
    showCart() {
      // this.showOrHiddenCart();
    },
    hasProduct() {}
  },
  computed: {
    ...mapGetters(["getSensorsInCart"])
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 400px;
  height: auto;
  background-color: #fafafa;
  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
  border-radius: 5px;
  box-sizing: border-box;
  position: absolute !important;
  z-index: 1;
  // padding: ;
  top: 100px;
  right: 70px;
}

.box:after {
  content: "";
  width: 30px;
  height: 30px;
  transform: rotate(45deg);
  background: inherit;
  position: absolute;
  top: -15px;
  right: 15px;
}

.box-item {
  width: 100%;
  height: 130px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 0 0.5em;
  margin-top: 0.3em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.item-thumb {
  width: 6rem;
  max-height: 1500px !important;
  height: 6rem;
  grid-column: 1/2;
  grid-row: 1/4;
  align-self: center;
}

.item-name {
  grid-column: 2/4;
  grid-row: 1/2;
  font-weight: normal;
}

.item-amount {
  grid-column: 2/3;
  grid-row: 2/4;
  color: #ddd;
}

.cart-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete {
  display: inline-block;
}

// $main-color: #6394f8;
// $light-text: #abb0be;

// .lighter-text {
//   color: $light-text;
// }

// .main-color-text {
//   color: $main-color;
// }

// .container {
//   margin: auto;
//   width: 80%;
// }

// .badge {
//   background-color: #6394f8;
//   border-radius: 10px;
//   color: white;
//   display: inline-block;
//   font-size: 12px;
//   line-height: 1;
//   padding: 3px 7px;
//   text-align: center;
//   vertical-align: middle;
//   white-space: nowrap;
// }

// .shopping-cart {
//   margin: 50px -300px;
//   float: right;
//   background: #0a0f18;
//   width: 400px;
//   position: absolute;
//   border-radius: 3px;
//   padding: 20px;
//   right: 270px;

//   .shopping-cart-header {
//     border-bottom: 1px solid #e8e8e8;
//     padding-bottom: 15px;

//     .shopping-cart-total {
//       float: right;
//     }

//     .cart-total {
//       padding-right: 15px;
//     }
//   }

//   .shopping-cart-items {
//     padding-top: 20px;

//     .cart-products {
//       color: white;
//       text-align: center;
//     }

//     ul {
//       list-style: none !important;
//     }

//     li {
//       display: inline;
//       padding-left: 20px;
//       list-style: none !important;
//     }

//     img {
//       float: left;
//       margin-right: 12px;
//     }

//     .item-name {
//       display: block;
//       padding-top: 10px;

//       font-size: 16px;
//       color: black;
//     }

//     .item-price {
//       color: $main-color;
//       margin-right: 8px;
//     }

//     .item-quantity {
//       color: $light-text;
//     }
//   }
// }

// .shopping-cart:after {
//   bottom: 100%;
//   left: 89%;
//   border: solid transparent;
//   content: "";
//   height: 0;
//   width: 0;
//   position: absolute;
//   pointer-events: none;
//   border-bottom-color: white;
//   border-width: 8px;
//   margin-left: -8px;
// }

// .cart-icon {
//   color: #515783;
//   font-size: 24px;
//   margin-right: 7px;
//   float: left;
// }

// .button {
//   background: $main-color;
//   color: white;
//   text-align: center;
//   padding: 12px;
//   text-decoration: none;
//   display: block;
//   border-radius: 3px;
//   font-size: 16px;
//   margin: 25px 0 15px 0;

//   &:hover {
//     background: lighten($main-color, 3%);
//   }
// }

// .clearfix:after {
//   content: "";
//   display: table;
//   clear: both;
// }
</style>