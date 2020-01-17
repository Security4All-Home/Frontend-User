<template>
<body>
  <div class="container">
    <section>
      <Navbar></Navbar>
    </section>
    <section class="section">
      <h1 class="title section-title has-text-weight-bold">Catalog</h1>

      <div class="tile is-ancestor">
        <div class="tile is-2 is-vertical is-parent">
          <!--Coluna dos Filtros-->
          <div class="tile is-parent is-12 box box-filter">
            <div class="columns col-filter is-multiline is-12-mobile is-6-tablet is-2-desktop">
              <b-menu class="menu">
                <b-menu-list label="Filtro">
                  <b-field label="Price Range">
                    <b-slider type="is-warning" v-model="range" :min="0" :max="200"></b-slider>
                  </b-field>
                  <b-menu-item label="Most Bought" @click="orderBySales"></b-menu-item>
                  <b-menu-item label="Top Rated" @click="orderByRank"></b-menu-item>
                  <b-menu-item label="Most Bought" @click="orderBySales"></b-menu-item>
                </b-menu-list>

                <b-dropdown class="dropdown-filter" hoverable aria-role="list" v-model="ctg">
                  <button class="button" slot="trigger" expanded>
                    <span>
                      Sensors
                      <!-- <i class="fa fa-sort-down"></i> -->
                    </span>
                    <b-icon icon="sort-down"></b-icon>
                  </button>

                  <b-dropdown-item
                    aria-role="listitem"
                    v-for="item in categories"
                    :label="item.name"
                    :value="item.category"
                    :key="item.category"
                  >{{item.name}}</b-dropdown-item>
                </b-dropdown>
              </b-menu>

              <br />
            </div>
          </div>
        </div>
        <!--fim do filtro -->

        <div class="tile is-parent">
          <div class="tile is-child box">
            <!--Barra de Pesquisa-->
            <div class="columns is-vcentered">
              <div class="column is-10">
                <div class="panel-block">
                  <p class="control has-icons-left">
                    <input
                      class="input is-link"
                      type="text"
                      placeholder="Search"
                      v-model="searchInput"
                    />
                    <span class="icon is-left">
                      <i class="fas fa-search" aria-hidden="true"></i>
                    </span>
                  </p>
                </div>
              </div>
              <div class="column is-2">
                <a class="button" style="margin-right: 5px">
                  <span class="icon is-small">
                    <i class="fas fa-table"></i>
                  </span>
                </a>

                <a class="button">
                  <span class="icon is-small">
                    <i class="fas fa-address-card"></i>
                  </span>
                </a>
              </div>
            </div>

            <!-- Card-->
            <div class="columns is-multiline is-12-mobile is-6-tablet is-3-desktop">
              <div class="column is-3" v-for="sensor in filteredSensors" :key="sensor.title">
                <div class="card is-rounded">
                  <div class="image">
                    <figure class="image is-5by4 has-image-centered">
                      <img v-bind:src="sensor.image" />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-6">
                          <router-link
                            :to="{name: 'product', params: {_id: sensor.idSensor}}"
                          >{{sensor.name}}</router-link>
                        </p>

                        <div class="Stars" style="--rating: 4.5 " aria-label></div>

                        <p class="subtitle is-3">Price: {{sensor.price}}€</p>

                        <div
                          class="content has-text-right is-clearfix"
                          v-if="sensor.state == 'unavailable'"
                        >
                          <span class="icon has-text-danger">
                            <i class="fas fa-ban"></i>
                            <i></i>
                          </span>
                        </div>

                        <div class="content has-text-right is-clearfix" v-else>
                          <span class="icon has-text-success">
                            <i class="fas fa-check-square"></i>
                            <i></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="notification is-light" v-if="filteredSensors.length === 0">
              <strong>No Match Found!</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</body>
</template>

<script>
import Navbar from "../components/Navbar";
import { getAllSensors } from "../API/apiSensor";

export default {
  name: "Catalog",
  components: {
    Navbar
  },
  created() {
    getAllSensors().then(res => {
      /* eslint-disable */
      this.sensors = res.data.data;
      console.log(this.sensors);
    });
  },
  data() {
    return {
      sensors: [
        // {
        //   id: 0,
        //   title: "motion sensor",
        //   photo:
        //     "https://s3.eu-west-3.amazonaws.com/greeniceweb/p/1/8/6/1/7/18617-large_default.jpg",
        //   price: 5,
        //   state: "available",
        //   category: "motion",
        //   sales: 125,
        //   stars: 2
        // },
        // {
        //   id: 1,
        //   title: "flame sensor",
        //   photo:
        //     "https://www.electrofun.pt/131-large_default/sensor-distancia-hc-sr04.jpg",
        //   price: 50,
        //   state: "unavailable",
        //   category: "flame",
        //   sales: 7,
        //   stars: 3
        // },
        // {
        //   id: 2,
        //   title: "temperature sensor",
        //   photo:
        //     "https://cdn1-shop.mikroe.com/img/product/lm35-sensor/lm35-sensor-thickbox_default-12x.jpg",
        //   price: 25,
        //   state: "available",
        //   category: "temperature",
        //   sales: 2,
        //   stars: 4
        // },
        // {
        //   id: 3,
        //   title: "photo sensor",
        //   photo:
        //     "https://www.electrofun.pt/125-large_default/sensor-de-corrente-arduino-acs712.jpg",
        //   price: 30,
        //   state: "unavailable",
        //   category: "photo",
        //   sales: 10,
        //   stars: 1
        // },
        // {
        //   id: 4,
        //   title: "rfid sensor",
        //   photo:
        //     "https://images-na.ssl-images-amazon.com/images/I/6131KRlni3L._SY355_.jpg",
        //   price: 80,
        //   state: "available",
        //   category: "rfid",
        //   sales: 5,
        //   stars: 5
        // },
        // {
        //   id: 5,
        //   title: "gas sensor",
        //   photo:
        //     "https://www.robotshop.com/media/catalog/product/cache/image/400x400/9df78eab33525d08d6e5fb8d27136e95/m/q/mq-2-gas-sensor.jpg",
        //   price: 70,
        //   state: "unavailable",
        //   category: "gas",
        //   sales: 10,
        //   stars: 2.5
        // },
        // {
        //   id: 6,
        //   title: "led rgb",
        //   photo:
        //     "https://boutique.semageek.com/314-large_default/transparent-5mm-rgb-led.jpg",
        //   price: 70,
        //   state: "available",
        //   category: "led",
        //   sales: 70,
        //   stars: 3.2
        // },
        // {
        //   id: 7,
        //   title: "humidity sensor",
        //   photo:
        //     "https://5.imimg.com/data5/YU/RX/MY-4167793/dht-11-humidity-sensor-500x500.jpg",
        //   price: 70,
        //   state: "unavailable",
        //   category: "humidity",
        //   sales: 40,
        //   stars: 2
        // },
        // {
        //   id: 8,
        //   title: "motion sensor 2",
        //   photo:
        //     "https://a.pololu-files.com/picture/0J6438.1200.jpg?73654d2fca2844de083cfed0aa4f2e66",
        //   price: 70,
        //   state: "available",
        //   category: "motion",
        //   sales: 169,
        //   stars: 5
        // },
        // {
        //   id: 9,
        //   title: "motion sensor 3",
        //   photo:
        //     "https://img1.bgxcdn.com/thumb/view/oaupload/banggood/images/83/9A/a72959aa-1dca-4b20-8c44-7e8a4a33a5a1.JPG",
        //   price: 70,
        //   state: "available",
        //   category: "motion",
        //   sales: 79,
        //   stars: 4.5
        // },
        // {
        //   id: 10,
        //   title: "buzzer sensor",
        //   photo:
        //     "https://5.imimg.com/data5/LF/CR/QV/SELLER-43948449/active-buzzer-beep-alarm-sensor-500x500.jpg",
        //   price: 70,
        //   state: "unavailable",
        //   category: "buzzer",
        //   sales: 2,
        //   stars: 2
        // }
      ],

      categories: [
        { id: 0, name: "all", category: "" }, //all
        { id: 1, name: "motion sensor", category: "motion" },
        { id: 2, name: "flame sensor", category: "flame" },
        { id: 3, name: "temperature sensor", category: "temperature" },
        { id: 4, name: "photo sensor", category: "photo" },
        { id: 5, name: "rfid sensor", category: "rfid" },
        { id: 6, name: "display", category: "display" }
      ],
      searchInput: "",
      ctg: "",
      range: 0
      //isActive:true
    };
  },
  methods: {
    // Order by title
    compareName(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      else return 0;
    },
    orderByName() {
      this.sensors.sort(this.compareName);
    },

    // Order by most bought
    compareSales(a, b) {
      if (a.sales > b.sales) return -1;
      if (a.sales < b.sales) return 1;
      else return 0;
    },
    orderBySales() {
      this.sensors.sort(this.compareSales);
    },

    // Order by Rank
    compareRank(a, b) {
      if (a.stars > b.stars) return -1;
      if (a.stars < b.stars) return 1;
      else return 0;
    },
    orderByRank() {
      this.sensors.sort(this.compareRank);
    }
  },
  computed: {
    filteredSensors() {
      let sensors = this.sensors.filter(sensor => {
        return (
          sensor.name.toLowerCase().includes(this.searchInput.toLowerCase()) &&
          sensor.name.match(this.searchInput)
        );
      });

      if (this.ctg !== "") {
        return this.sensors.filter(sensor => sensor.category === this.ctg);
      }

      if (this.range !== 0) {
        return this.sensors.filter(sensor => sensor.price <= this.range);
      } else {
        return sensors;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/catalog.scss";
</style>