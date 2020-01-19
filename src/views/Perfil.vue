<template>
<body>
  <div class="profile is-hidden-mobile">
    <div class="container profileZone ">
      <div class="columns is-gapless is-vcentered">
      <div class="column is-3-desktop">
        <div class="card cardDesktop">
            <header class="card-header">
              <div class="card-image">
                <figure class="image is-128x128">
                  <img v-bind:src="user.image" class="profilePickDesktop"/>
                </figure>
              </div>
            </header>
            <div class="card-content">
              <p class="cardTitle">{{user.name}}</p>
              <p class="usernameDesk">{{user.username}}</p>
              <p class="emailDesk">{{user.email}}</p>
              <br />
              <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading headingMobDesk">Pontos</p>
                    <p class="title titleMobDesk">{{user.points}}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered"></div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading headingMobDesk">Créditos</p>
                    <p class="title titleMobDesk">{{user.credit}}</p>
                  </div>
                </div>
              </nav>
            </div>
            <footer class="card-footer">
              <a class="card-footer-item" v-on:click="toggleModalUser()">
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a class="card-footer-item">
                <i class="fas fa-qrcode"></i>
              </a>
              <a class="card-footer-item" v-on:click="toggleModalPhoto()">
                <i class="fas fa-camera-retro"></i>
              </a>
            </footer>
          </div>
      </div>
      <div class="column column is-9-desktop">
         <Ranking></Ranking>
      </div>
    </div>
    </div>
    
    <div class="tile is-ancestor is-hidden">
      <div class="tile is-parent">
        <div class="tile is-child box is-4 profileTilesDesk">
          <div class="card">
            <header class="card-header">
              <div class="card-image">
                <figure class="image is-square">
                  <img v-bind:src="user.image" class="profilePickDesktop"/>
                </figure>
              </div>
              <p class="cardTitle">{{user.name}}</p>
            </header>
            <div class="card-content">
              <p class="usernameDesk">{{user.username}}</p>
              <p class="emailDesk">{{user.email}}</p>
              <br />
              <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading headingMobDesk">Pontos</p>
                    <p class="title titleMobDesk">{{user.points}}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered"></div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading headingMobDesk">Créditos</p>
                    <p class="title titleMobDesk">{{user.credit}}</p>
                  </div>
                </div>
              </nav>
            </div>
            <footer class="card-footer">
              <a class="card-footer-item" v-on:click="toggleModalUser()">
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a class="card-footer-item">
                <i class="fas fa-qrcode"></i>
              </a>
              <a class="card-footer-item" v-on:click="toggleModalPhoto()">
                <i class="fas fa-camera-retro"></i>
              </a>
            </footer>
          </div>
          <div class="modal" v-bind:class="[isModalActiveUser ? 'is-active' : '']">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">EDIT USER</p>
                <button class="delete" aria-label="close" v-on:click="toggleModalUser()"></button>
              </header>
              <section class="modal-card-body centerAlign">
                <label class="label is-small">Edit Username</label>
                <input
                  class="input is-small"
                  type="text"
                  placeholder="insert your new username"
                  v-model="editUser.username"
                />
                <br />
                <br />
                <label class="label is-small">Edit Email</label>
                <input
                  class="input is-small"
                  type="email"
                  placeholder="insert your new email"
                  v-model="editUser.email"
                />
                <br />
                <br />
                <button
                  class="button passwordButton is-danger is-small"
                  v-on:click="togglePassword()"
                >Password</button>
                <br />
                <br />
                <div id="passwordSection" v-if="isActivePasswordField">
                  <label class="label is-small">Current Password</label>
                  <input
                    class="input is-small"
                    type="text"
                    placeholder="Insert old password"
                    v-model="editUser.password"
                  />
                  <br />
                  <br />
                  <label class="label is-small">New Password</label>
                  <input
                    class="input is-small"
                    type="text"
                    placeholder="Insert new password"
                    v-model="currPass"
                  />
                  <br />
                  <br />
                </div>
                <button class="button is-success saveButton" v-on:click="editUserInfo()">Save</button>
              </section>
            </div>
          </div>
          <!-- Modal For Edit User  -->
          <div class="modal" v-bind:class="[isModalActivePhoto ? 'is-active' : '']">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">EDIT USER</p>
                <button class="delete" aria-label="close" v-on:click="toggleModalPhoto()"></button>
              </header>
              <section class="modal-card-body centerAlign">
                <label class="label is-small">Add Photo Link</label>
                <input class="input is-small" type="link" placeholder />
                <br />
                <br />
                <button class="button is-success saveButton">Save</button>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div class="tile is-child box is-4 getHere">
        <Ranking></Ranking>
      </div>
      <button
        class="button profileButtons editUserDesk is-rounded isPrimaryBGColor is-small"
        v-on:click="toggleModalUser()"
      >
        <i class="fas fa-external-link-alt"></i>
      </button>
      <button
        class="button profileButtons CreateQRcode is-rounded isPrimaryBGColor is-small"
        v-on:click="toggleModalUser()"
      >
        <i class="fas fa-qrcode"></i>
      </button>
    </div>
  </div>
  <div class="profileMobile is-hidden-tablet">
    <br>
    <br>
    <div class="card">
      <header class="card-header">
        <div class="card-image">
          <figure class="image is-128x128">
            <img :src="user.image" class="profilePickDesktop" />
          </figure>
        </div>
      </header>
      <div class="card-content">
        <p class="cardTitle">{{user.name}}</p>
        <p class="usernameDesk">{{user.username}}</p>
        <p class="emailDesk">{{user.email}}</p>
        <br />
        <nav class="level is-mobile">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading headingMobDesk">Pontos</p>
              <p class="title titleMobDesk">{{user.points}}</p>
            </div>
          </div>
          <div class="level-item has-text-centered"></div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading headingMobDesk">Créditos</p>
              <p class="title titleMobDesk">{{user.credit}}</p>
            </div>
          </div>
        </nav>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" v-on:click="toggleModalUser()">
          <i class="fas fa-external-link-alt"></i>
        </a>
        <a class="card-footer-item" v-on:click="toggleModalQr()">
          <i class="fas fa-qrcode"></i>
        </a>
        <a class="card-footer-item" v-on:click="toggleModalPhoto()">
          <i class="fas fa-camera-retro"></i>
        </a>
      </footer>
    </div>
    <div class="modal" v-bind:class="[isModalActiveUser ? 'is-active' : '']">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">EDIT USER</p>
          <button class="delete" aria-label="close" v-on:click="toggleModalUser()"></button>
        </header>
        <section class="modal-card-body centerAlign">
          <label class="label is-small">Edit Username</label>
          <input class="input is-small" type="text" placeholder v-model="editUser.username" />
          <br />
          <br />
          <label class="label is-small">Edit Email</label>
          <input class="input is-small" type="text" placeholder v-model="editUser.email" />
          <br />
          <br />
          <button
            class="button passwordButton is-danger is-small"
            v-on:click="togglePassword()"
          >Password</button>
          <br />
          <br />
          <div id="passwordSection" v-if="isActivePasswordField">
            <label class="label is-small">Current Password</label>
            <input class="input is-small" type="text" placeholder v-model="currPass" />
            <br />
            <br />
            <label class="label is-small">New Password</label>
            <input class="input is-small" type="text" placeholder v-model="editUser.password" />
            <br />
            <br />
          </div>
          <button class="button is-success saveButton" v-on:click="editUserInfo()">Save</button>
        </section>
      </div>
    </div>
    <!-- Modal For Edit User  -->
    <div class="modal" v-bind:class="[isModalActivePhoto ? 'is-active' : '']">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">EDIT USER</p>
          <button class="delete" aria-label="close" v-on:click="toggleModalPhoto()"></button>
        </header>
        <section class="modal-card-body centerAlign">
          <label class="label is-small">Add Photo Link</label>
          <input class="input is-small" type="link" placeholder v-model="addPhoto"/>
          <br />
          <br />
          <button class="button is-success saveButton" v-on:click="addUserPhoto()">Save</button>
        </section>
      </div>
    </div>
    <!-- modal for qr -->
    <div class="modal" v-bind:class="[isModalActiveQr ? 'is-active' : '']">
      <div class="modal-background"></div>
      <div class="modal-content qrCode">
        <p class="image is-square">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt />
        </p>
      </div>
      <button class="modal-close is-large" v-on:click="toggleModalQr()" aria-label="close"></button>
    </div>
    <!-- ################################################## -->
    <Ranking></Ranking>
    <br>
    <br>
    <!-- ########################################### isto é para esquecer ################################################## -->
    <div class="tile is-ancestor is-hidden">
      <div class="tile is-4 is-vertical is-parent is-12">
        <div class="tile is-child box profilesTiles firstTile">
          <div class="card">
            <header class="card-header">
              <div class="card-image">
                <figure class="image is 96x96">
                  <img :src="user.email" class="profilePickDesktop" />
                </figure>
              </div>
              <p class="card-header-title">{{user.name}}</p>
            </header>
            <div class="card-content">
              <p class="usernameDesk">{{user.username}}</p>
              <p class="emailDesk">{{user.email}}</p>
              <br />
              <nav class="level is-mobile">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading headingMobDesk">Pontos</p>
                    <p class="title titleMobDesk">{{user.points}}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered"></div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading headingMobDesk">Créditos</p>
                    <p class="title titleMobDesk">{{user.credit}}</p>
                  </div>
                </div>
              </nav>
            </div>
            <footer class="card-footer">
              <a class="card-footer-item" v-on:click="toggleModalUser()">
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a class="card-footer-item">
                <i class="fas fa-qrcode"></i>
              </a>
              <a class="card-footer-item" v-on:click="toggleModalPhoto()">
                <i class="fas fa-camera-retro"></i>
              </a>
            </footer>
          </div>
          <!-- Modal For Edit User  -->
          <div class="modal" v-bind:class="[isModalActiveUser ? 'is-active' : '']">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">EDIT USER</p>
                <button class="delete" aria-label="close" v-on:click="toggleModalUser()"></button>
              </header>
              <section class="modal-card-body centerAlign">
                <label class="label is-small">Edit Username</label>
                <input class="input is-small" type="text" placeholder v-model="editUser.username" />
                <br />
                <br />
                <label class="label is-small">Edit Email</label>
                <input class="input is-small" type="text" placeholder v-model="editUser.email" />
                <br />
                <br />
                <button
                  class="button passwordButton is-danger is-small"
                  v-on:click="togglePassword()"
                >Password</button>
                <br />
                <br />
                <div id="passwordSection" v-if="isActivePasswordField">
                  <label class="label is-small">Current Password</label>
                  <input class="input is-small" type="text" placeholder v-model="currPass" />
                  <br />
                  <br />
                  <label class="label is-small">New Password</label>
                  <input class="input is-small" type="text" placeholder v-model="editUser.password" />
                  <br />
                  <br />
                </div>
                <button class="button is-success saveButton" v-on:click="editUserInfo()">Save</button>
              </section>
            </div>
          </div>
          <!-- Modal For Edit User  -->
          <div class="modal" v-bind:class="[isModalActivePhoto ? 'is-active' : '']">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">EDIT USER</p>
                <button class="delete" aria-label="close" v-on:click="toggleModalPhoto()"></button>
              </header>
              <section class="modal-card-body centerAlign">
                <label class="label is-small">Add Photo Link</label>
                <input class="input is-small" type="link" placeholder />
                <br />
                <br />
                <button class="button is-success saveButton">Save</button>
              </section>
            </div>
          </div>
        </div>
        <div class="tile is-child box profilesTiles">
          <p class="title">nao tocar</p>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
import { GetUserById } from "../API/apiProfile";
import { EditUserById } from "../API/apiProfile";
//import { GetQrCode } from "../API/apiProfile"
import Ranking from "../components/Ranking";
export default {
  name: "Profile",
  components: {
    Ranking
  },
  data() {
    return {
      isModalActiveUser: false,
      isModalActivePhoto: false,
      isModalActiveQr: false,
      isActivePasswordField: false,
      user: {},
      editUser: {
        username: "",
        email: "",
        password: ""
      },
      addPhoto: "",
      currPass: "",
    };
  },
  created() {
    GetUserById(9).then(response => {
      this.user = response.data.data[0];
      /*eslint-disable*/
      console.log(response.data)
    });
    // codigo para qr code
    /*GetQrCode(1).then(response =>{
            eslint-disable
            console.log(response)
            
        })*/
  },
  methods: {
    toggleModalUser() {
      if (this.isModalActiveUser) {
        this.isModalActiveUser = false;
      } else {
        this.isModalActiveUser = true;
      }
    },
    toggleModalPhoto() {
      if (this.isModalActivePhoto) {
        this.isModalActivePhoto = false;
      } else {
        this.isModalActivePhoto = true;
      }
    },
    toggleModalQr() {
      if (this.isModalActiveQr) {
        this.isModalActiveQr = false;
      } else {
        this.isModalActiveQr = true;
      }
    },
    togglePassword() {
      if (this.isActivePasswordField) {
        this.isActivePasswordField = false;
      } else {
        this.isActivePasswordField = true;
      }
    },
    editUserInfo() {
      if (this.editUser.password != "") {
        if (this.editUser.password == this.currPass) {
          if(this.editUser.username =""){
            this.editUser.username = this.user.username
          }
          if(this.editUser.email =""){
            this.editUser.email = this.user.email
          }
          if(this.editUser.password =""){
            this.editUser.password = this.user.password
          }
          EditUserById(1, this.editUser).then(response => {
            /* eslint-disable */
            console.log(response.data);
          });
        } else {
          /* eslint-disable */
          console.log("the passwords do not match");
        }
      } else {
        if(this.editUser.username =""){
          this.editUser.username = this.user.username
        }
        if(this.editUser.email =""){
          this.editUser.email = this.user.email
        }
        if(this.editUser.password =""){
          this.editUser.password = this.user.password
        }
        EditUserById(1, this.editUser).then(response => {
          /* eslint-disable */
          console.log(response.data);
        });
      }
    },
    async addUserPhoto() {
      await EditUserById(9, {image: this.addPhoto}).then(response => {
            /* eslint-disable */
            console.log(response.data);
            this.$buefy.toast.open({
              message: "New Photo Added!",
              type: "is-success"
          });
      });
      await GetUserById(9).then(response => {
        this.user = response.data.data[0];
        /*eslint-disable*/
        console.log(response.data)
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/perfil.scss";
</style>