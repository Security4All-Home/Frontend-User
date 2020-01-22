<template>
  <section class="section">
    <div class="container empty-state" v-if="!hasSensor()">
      <figure class="image is-centered is-vcentered">
        <img src="../assets/img/shopping-cart-empty.svg" alt />
      </figure>
    </div>

    <div class="columns is-centered" style="margin-top: 50px" v-if="hasSensor()">
      <div
        class="column is-8-desktop is-hidden-mobile"
        style="background-color: white; border-radius: 10px;"
      >
        <div class="product-labels">
          <label class="product-image">Image</label>
          <label class="product-details">Product</label>
          <label class="product-price">Price</label>
          <label class="product-quantity">Quantity</label>
          <label class="product-removal">Remove</label>
          <label class="product-line-price">Total</label>
        </div>

        <div class="product" v-for="(sensor,index) in getSensorsInCart" :key="index">
          <div class="product-image">
            <img :src="sensor.image" />
          </div>
          <div class="product-details">
            <div class="product-title">{{sensor.name}}</div>
            <p class="product-description">{{sensor.description}}</p>
          </div>
          <div class="product-price">{{sensor.price}}</div>
          <div class="product-quantity">
            <input v-model="quantity" type="number" value="1" min="1" />
          </div>
          <div class="product-removal">
            <button class="remove-product" @click="deleteSensor(sensor.name, index)">
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <div class="product-line-price">{{sensor.price}}</div>
        </div>

        <div class="totals">
          <div class="totals-item totals-item-total">
            <label>Grand Total</label>
            <div class="totals-value" id="cart-total">{{ totalPrice() }}</div>
          </div>
        </div>

        <button class="button is-success is-small checkout" @click="checkout">Checkout</button>
      </div>

      <!-- MOBILE VERSION -->
      <div
        class="column is-12-mobile checkout-mobile is-hidden-tablet"
        style="background-color: white; border-radius: 10px;"
      >
        <div class="product-labels">
          <label class="product-image">Image</label>
          <label class="product-details">Product</label>
          <label class="product-price">Price</label>
          <label class="product-quantity">Quantity</label>
          <label class="product-removal">Remove</label>
          <label class="product-line-price">Total</label>
        </div>

        <div class="product" v-for="(sensor,index) in getSensorsInCart" :key="index">
          <div class="product-image">
            <img :src="sensor.image" />
          </div>
          <div class="product-details">
            <div class="product-title">{{sensor.name}}</div>
            <p class="product-description">{{sensor.description}}</p>
          </div>
          <div class="product-price">{{sensor.price}}</div>
          <div class="product-quantity">
            <input v-model="quantity" type="number" value="1" min="1" />
          </div>
          <div class="product-removal">
            <button class="remove-product" @click="deleteSensor(sensor.name, index)">
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <div class="product-line-price">{{sensor.price}}</div>
        </div>

        <div class="totals">
          <div class="totals-item totals-item-total">
            <label>Grand Total</label>
            <div class="totals-value" id="cart-total">{{ totalPrice() }}</div>
          </div>
        </div>

        <button class="button is-success is-small checkout" @click="checkout">Checkout</button>
      </div>
    </div>
    <div class="columns is-centered" style="margin-top: 20px" v-if="hasSensor()">
      <div class="column is-4-desktop">
        <nav class="level">
          <div class="level-left">
            <figure class="image is-128x128">
              <img src="../assets/img/paypal.svg" />
            </figure>
          </div>
          <div class="level-right">
            <figure class="image is-128x128">
              <img src="../assets/img/MBWay.png" />
            </figure>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import { addOrder } from "../API/apiOrder";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Checkout",
  components: {},

  data() {
    return {
      sensor: {},
      userId: JSON.parse(localStorage.getItem("user")).idUser,
      finalOrder: [],
      quantity: 0
    };
  },
  computed: {
    ...mapGetters(["getSensorsInCart"])
  },

  methods: {
    hasSensor() {
      return this.getSensorsInCart.length > 0;
    },
    totalPrice() {
      return this.getSensorsInCart.reduce(
        (current, next) => current + next.price,
        0
      );
    },
    ...mapActions(["removeSensor"]),
    deleteSensor(name, index) {
      this.$buefy.dialog.confirm({
        title: "Remove Sensor",
        message:
          "Are you sure you want to <b>delete</b> the " +
          name +
          " from your cart?",
        confirmText: "Remove",
        type: "is-danger",
        onConfirm: () => {
          this.removeSensor(index)
            .then(() => {
              this.$buefy.toast.open({
                type: "is-warning",
                message: "Sensor deleted"
              });
            })
            .catch(error => {
              this.$buefy.toast.open({
                message: error,
                type: "is-danger"
              });
            });
        }
      });
    },

    checkout() {
      let order = [];
      for (let i = 0; i < this.getSensorsInCart.length; i++) {
        let data = {
          idSensor: this.getSensorsInCart[i].idSensor,
          quantity: this.quantity
        };
        order.push(data);
      }
      /* eslint-disable */
      // console.log(order);
      this.finalOrder = {
        sensors: order,
        idUser: this.userId,
        instalation: 0,
        payed: 0,
        active: 0
      };

      addOrder(this.finalOrder).then(response => {
        /*eslint-disable*/
        console.log(response.data);
        if (!response.data.success) {
          this.$buefy.toast.open({
            message: "Something went wrong!",
            type: "is-danger"
          });
        } else {
          this.$buefy.toast.open({
            message: "Order completed!",
            type: "is-success"
          });
        }

        this.$router.push({ name: "catalog" });
        this.$store.dispatch("clear_cart");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$color-border: #eee;
$color-label: #aaa;

/* Global "table" column settings */
.product-image {
  float: left;
  width: 20%;
}
.product-details {
  float: left;
  width: 37%;
}
.product-price {
  float: left;
  width: 12%;
}
.product-quantity {
  float: left;
  width: 10%;
}
.product-removal {
  float: left;
  width: 9%;
}
.product-line-price {
  float: left;
  width: 12%;
  text-align: right;
}

.checkout-mobile {
  height: 370px;
}

/* This is used as the traditional .clearfix class */
.group:before,
.group:after {
  content: "";
  display: table;
}
.group:after {
  clear: both;
}
.group {
  zoom: 1;
}

/* Apply clearfix in a few places */
.shopping-cart,
.product-labels,
.product,
.totals-item {
  @extend .group;
}

/* Apply dollar signs */
.product .product-price:before,
.product .product-line-price:before,
.totals-value:before {
  content: "€";
}

/* Body/Header stuff */
body {
  padding: 0px 30px 30px 20px;
  font-weight: 100;
}

h1 {
  font-weight: 100;
}

label {
  color: $color-label;
}

.shopping-cart {
  margin-top: -45px;
}

/* Column headers */
.product-labels {
  label {
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid $color-border;
  }

  .product-image,
  .product-details,
  .product-removal {
    text-indent: -9999px;
  }
}

/* Product entries */
.product {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid $color-border;

  .product-image {
    text-align: center;
    img {
      width: 100px;
    }
  }

  .product-details {
    .product-title {
      margin-right: 20px;
      font-weight: bold;
    }
    .product-description {
      margin: 5px 20px 5px 0;
      line-height: 1.4em;
    }
  }

  .product-quantity {
    input {
      width: 40px;
    }
  }

  .remove-product {
    border: 0;
    padding: 4px 8px;
    background-color: #c66;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
  }

  .remove-product:hover {
    background-color: #a44;
  }
}

/* Totals section */
.totals {
  .totals-item {
    float: right;
    clear: both;
    width: 100%;
    margin-bottom: 10px;

    label {
      float: left;
      clear: both;
      width: 79%;
      text-align: right;
    }

    .totals-value {
      float: right;
      width: 21%;
      text-align: right;
    }
  }

  .totals-item-total {
    font-weight: bold;
  }
}

.checkout {
  float: right;
  border: 0;
  margin-top: 20px;
  padding: 6px 25px;
  color: #fff;
  border-radius: 3px;
}

.checkout:hover {
  background-color: #494;
}

/* Make adjustments for tablet */
@media screen and (max-width: 650px) {
  .shopping-cart {
    margin: 0;
    padding-top: 20px;
    border-top: 1px solid $color-border;
  }

  .column-labels {
    display: none;
  }

  .product-image {
    float: right;
    width: auto;
    img {
      margin: 0 0 10px 10px;
    }
  }

  .product-details {
    float: none;
    margin-bottom: 10px;
    width: auto;
  }

  .product-price {
    clear: both;
    width: 70px;
  }

  .product-quantity {
    width: 100px;
    input {
      margin-left: 20px;
    }
  }

  .product-quantity:before {
    content: "x";
  }

  .product-removal {
    width: auto;
  }

  .product-line-price {
    float: right;
    width: 70px;
  }
}

/* Make more adjustments for phone */
@media screen and (max-width: 350px) {
  .product-removal {
    float: right;
  }

  .product-line-price {
    float: right;
    clear: left;
    width: auto;
    margin-top: 10px;
  }

  .product .product-line-price:before {
    content: "Item Total: $";
  }

  .totals {
    .totals-item {
      label {
        width: 60%;
      }

      .totals-value {
        width: 40%;
      }
    }
  }
}

.empty-state {
  display: table;
}

.image {
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  padding-top: 80px;
}

.image img {
  max-width: 400px;
  max-height: 400px;
}
</style>