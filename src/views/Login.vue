<template>
<body>
  <div class="login is-hidden-mobile">
    <div class="container is-centered">
      <div class="columns fullLogin is-gapless is-centered" v-if="login">
        <div class="column is-3-desktop is-12-mobile has-text-centered" id="left">
          <!-- Logo -->
          <br />
          <br />
          <br />
          <figure class="image is-128x128" id="LogoLogin">
            <img src="../assets/img/logo.png" />
          </figure>
          <h1 id="introduction">
            Welcome to Security4All
            <br />Platform
          </h1>
          <br />
          <p id="loginMessage">Time to make yourself secure</p>
          <button
            id="signButton"
            class="button is-warning is-outlined"
            v-on:click="change()"
          >SIGN UP</button>
          <br />
          <br />
          <br />
        </div>
        <div class="column is-5-desktop is-12-mobile" id="right">
          <!--Title-->
          <h1 id="TitleLogin" v-if="login">LOGIN</h1>
          <!--Input of email -->
          <label class="label loginLabel">Email</label>
          <div class="control has-icons-left">
            <input
              class="input inputLogin is-5-desktop"
              id="email"
              type="text"
              v-model="loginInfo.email"
            />
            <span class="icon iconDesktop is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>

          <br />
          <!--Input of password -->
          <label class="label loginLabel">Password</label>
          <div class="control has-icons-left">
            <input class="input inputLogin" type="password" v-model="loginInfo.password" />
            <span class="icon iconDesktop is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
          <!--esqueceu-se da password -->
          <br />
          <a id="forgotPass">Esqueceu-se da sua password?</a>
          <!--Login Button -->
          <br />
          <button id="logButton" class="button is-warning" @click="loginExe()">ENTRAR</button>
          <br />
        </div>
      </div>
      <!-- Sign Up -->
      <div class="columns fullSignUp is-gapless is-centered" v-if="!login">
        <div class="column is-5-desktop is-12-mobile" id="leftSign">
          <!--Title-->
          <h1 id="TitleSignUp">SIGN UP</h1>
          <br />
          <div v-if="step == 1">
            <h3 class="Subtitles">Personal Info</h3>
            <!--First Name -->
            <label class="label signLabel">Name</label>
            <input class="input inputSign" type="text" placeholder="Insert your name" />
            <br />
            <br />
            <!--Last Name -->
            <label class="label signLabel">Email</label>
            <input class="input inputSign" type="email" placeholder="Insert your email" />
            <br />
            <br />
            <!--email-->
            <label class="label signLabel">Phone Number</label>
            <input class="input inputSign" type="number" placeholder="Insert your phone number" />
          </div>
          <div v-if="step == 2">
            <h3 class="Subtitles">Password</h3>
            <!--Last Name -->
            <label class="label signLabel">Password</label>
            <input class="input inputSign" type="password" placeholder="Insert your password" />
            <br />
            <br />
            <!--email-->
            <label class="label signLabel">Confirm Password</label>
            <input class="input inputSign" type="password" placeholder="Confirm your password" />
            <br />
            <br />
            <!--First Name -->
            <label class="label signLabel">User Name</label>
            <input class="input inputSign" type="text" placeholder="Insert your Username" />
            <br />
          </div>
          <div v-if="step == 3">
            <h3 class="Subtitles">Billing</h3>
            <div class="columns is-gapless is-vcentered is-desktop">
              <div class="column is-8-desktop">
                <label class="label signLabel">Adress</label>
                <input class="input inputSign" type="text" placeholder="Insert your Adress" />
              </div>
              <div class="column is-3-desktop">
                <label class="label signLabel">Postal-code</label>
                <input class="input inputSign" type="text" placeholder />
              </div>
            </div>
            <label class="checkbox">
              <input type="checkbox" hoverable="false" v-on:click="checkbox()" />
              Adress and Billing Adress are the same?
            </label>
            <div class="columns is-gapless is-desktop" v-if="!checked">
              <div class="column is-8-desktop">
                <label class="label signLabel">Billing Adress</label>
                <input class="input inputSign" type="text" placeholder="Insert your Billing Adress" />
              </div>
              <div class="column is-3-desktop">
                <label class="label signLabel">Postal-code</label>
                <input class="input inputSign" type="text" placeholder />
              </div>
            </div>
            <div class="columns is-gapless is-vcentered is-desktop">
              <div class="column is-6-desktop">
                <label class="label signLabel">NIF</label>
                <input class="input inputSign" id="nif" type="text" placeholder="Insert your NIF" />
              </div>
            </div>
          </div>
          <div v-if="step == 4">
            <h3 class="Subtitles">Choose Package</h3>
            <br />
            <div class="tile is-ancestor is-centered">
              <div class="tile is-vertical is-12 is-10-desktop">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <article
                      class="tile is-child box"
                      v-bind:class="[isActiveBasic ? 'activePack' : '']"
                    >
                      <div
                        class="content has-text-justified"
                        @click="toggleClassBasic()"
                        v-bind:class="[isActiveBasic ? 'activePack' : '']"
                      >
                        <h1
                          class="title articleTitle"
                          @click="toggleClassBasic()"
                          v-bind:class="[isActiveBasic ? 'activePackText' : '']"
                        >Basic</h1>
                        <ul>
                          <li
                            v-bind:class="[isActiveBasic ? 'activePackText' : '']"
                            @click="toggleClassBasic()"
                          >Access to Mobile app</li>
                          <!--<li>2 sensors included</li>
                          <li>Home Service</li>-->
                        </ul>
                        <h3
                          class="prices"
                          @click="toggleClassBasic()"
                          v-bind:class="[isActiveBasic ? 'activePackText' : '']"
                        >40€</h3>
                      </div>
                      <!--<nav class="level">
                                <div class="level-left"></div>
                                <div class="level-right">
                                    <div class="level-item">
                                    <div class="level-item">
                                        <a id="btnTeste" class="button is-warning">40€</a>
                                        <h3 class="prices is-success">40€</h3>
                                    </div>
                                    </div>
                                </div>
                      </nav>-->
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article
                      class="tile is-child box"
                      v-bind:class="[isActivePremium ? 'activePack' : '']"
                    >
                      <div
                        class="content has-text-justified"
                        @click="toggleClassPremium()"
                        v-bind:class="[isActivePremium ? 'activePack' : '']"
                      >
                        <h1
                          class="title articleTitle"
                          v-bind:class="[isActivePremium ? 'activePackText' : '']"
                        >Premium</h1>
                        <!--<nav class="level">
                                    <div class="level-left">
                                    </div>
                                     <div class="level-right discount">
                                    <p class="text">23% off</p>
                                    </div>
                                    <div class="media-right">
                                        <button class="button is-success">23% off</button>
                                    </div> 
                        </nav>-->
                        <ul>
                          <li
                            v-bind:class="[isActivePremium ? 'activePackText' : '']"
                          >Access to Mobile App</li>
                          <!--<li>4 sensors included</li>
                                    <li>Home Service</li>
                                    <li>Instalation Included</li>
                          <li>3D Model of your house</li>-->
                        </ul>
                        <!--<nav class="level">
                                    <div class="level-left"></div>
                                    <div class="level-right">
                                    <div class="level-item">
                                        <div class="level-item">
                                        <h3 class="prices">100€</h3>
                                        </div>
                                    </div>
                                    </div>
                                    <p class="discount">23% off</p>
                        </nav>-->
                        <h3
                          class="prices"
                          v-bind:class="[isActivePremium ? 'activePackText' : '']"
                        >100€</h3>
                        <p
                          class="discount"
                          v-bind:class="[isActivePremium ? 'activePackText' : '']"
                        >23% off</p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Login Button -->
          <button
            id="logButton"
            class="button attach previous is-warning"
            :disabled="isDisabledPrev"
            v-on:click="stepChangeMinus()"
          >PREVIOUS</button>
          <a id="steps">{{currentStep}}</a>
          <button
            id="logButton"
            class="button attach next is-warning"
            :disabled="isDisabledNext"
            v-on:click="stepChangePlus()"
          >NEXT</button>
          <button id="logButton" class="button attach enter is-warning" v-if="step == 4">REGISTER</button>
          <a
            id="CreateAcc"
            class="is-hidden-desktop doLogin"
            v-on:click="change()"
          >So enter your account</a>
          <br />
        </div>
        <div
          class="column is-3-desktop is-12-mobile has-text-centered is-hidden-mobile"
          id="rightSign"
        >
          <!-- Logo -->
          <br />
          <br />
          <br />
          <figure class="image is-128x128" id="LogoLogin">
            <img src="../assets/img/logo.png" />
          </figure>
          <h1 id="introduction">
            Welcome to Security4All
            <br />Platform
          </h1>
          <br />
          <p id="loginMessage">Time to make yourself secure</p>
          <a id="CreateAcc" v-on:click="change()">So create your account</a>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>

  <div class="is-hidden-tablet mobileVer">
    <div class="mobileLogin container-fluid" v-if="login">
      <h1 class="title TitleLoginMobile">LOGIN</h1>
      <label class="label loginLabelMobile">Email</label>
      <div class="control has-icons-left">
        <input
          class="input inputLoginMobile inputEmailMobile"
          id="email"
          type="text"
          placeholder="Insert your Email"
          v-model="loginInfo.email"
        />
        <span class="icon iconMobile is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
      <br />
      <label class="label loginLabelMobile">Password</label>
      <div class="control has-icons-left">
        2
        <input
          class="input inputLoginMobile inputPassMobile"
          type="password"
          placeholder="Insert your Password"
          v-model="loginInfo.password"
        />
        <span class="icon iconMobile is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </div>
      <button class="button logButtonMobile" @click="loginExe()">ENTRAR</button>
      <a id="forgotPassMobile">Esqueceu-se da sua password?</a>
      <a id="signUpMobile" v-on:click="change()">Criar Conta</a>
    </div>
    <div class="mobileSign" v-if="!login">
      <h1 class="title TitleLoginMobile">CREATE ACCOUNT</h1>
      <div v-if="step == 1">
        <h3 class="SubtitlesMobile">Personal Info</h3>
        <!--First Name -->
        <label class="label signLabelMobile">Name</label>
        <input class="input inputSignMobile" type="text" placeholder="Insert your name" v-model="signInInfo.name" />
        <br />
        <br />
        <!--Last Name -->
        <label class="label signLabelMobile">Email</label>
        <input class="input inputSignMobile" type="email" placeholder="Insert your email" v-model="signInInfo.email"/>
        <br />
        <br />
        <!--email-->
        <label class="label signLabelMobile">Phone Number</label>
        <input class="input inputSignMobile" type="number" placeholder="Insert your phone number" v-model="signInInfo.contacto" />
        <br />
        <br />
        <label class="label signLabelMobile">Nif</label>
        <input class="input inputSignMobile" type="number" placeholder="Insert your Nif" v-model="signInInfo.nif" />
        <br />
        <button
          class="button attach previousMobile is-warning firstStepChange"
          :disabled="isDisabledPrev"
          v-on:click="stepChangeMinus()"
          v-bind:class="[activeSteps ? 'adjustSteps' : '']"
        >ANTERIOR</button>
        <!--<a id="steps">{{currentStep}}</a>-->
        <button
          class="button attach nextMobile is-warning firstStepChange"
          :disabled="isDisabledNext"
          v-on:click="stepChangePlus()"
          v-bind:class="[activeSteps ? 'adjustSteps' : '']"
        >PROXIMO</button>
      </div>
      <div v-if="step == 2">
        <h3 class="SubtitlesMobile">Password</h3>
        <!--Last Name -->
        <label class="label signLabelMobile">Password</label>
        <input class="input inputSignMobile" type="password" placeholder="Insert your password" v-model="signInInfo.password" />
        <br />
        <br />
        <!--email-->
        <label class="label signLabelMobile">Confirm Password</label>
        <input class="input inputSignMobile" type="password" placeholder="Confirm your password" v-model="confirmPass" />
        <br />
        <br />
        <label class="label signLabelMobile">User name</label>
        <input class="input inputSignMobile" type="text" placeholder="Insert your Username" v-model="signInInfo.username"/>
        <br />
        <button
          class="button attach previousMobile is-warning firstStep"
          :disabled="isDisabledPrev"
          v-on:click="stepChangeMinus()"
          v-bind:class="[activeSteps ? 'adjustSteps' : '']"
        >ANTERIOR</button>
        <!--<a id="steps">{{currentStep}}</a>-->
        <button
          class="button attach nextMobile is-warning firstStep"
          :disabled="isDisabledNext"
          v-on:click="stepChangePlus()"
          v-bind:class="[activeSteps ? 'adjustSteps' : '']"
        >PROXIMO</button>
      </div>
      <div v-if="step == 3">
        <h3 class="SubtitlesMobile">Billing</h3>
        <label class="label signLabelMobile">Adress</label>
        <input class="input inputSignMobile" type="text" placeholder="Insert your Adress" v-model="signInInfo.adress" />
        <br />
        <br />
        <label class="label signLabelMobile">Postal-code</label>
        <input class="input inputSignMobile" type="text" placeholder v-model="signInInfo.zipCode" />
        <label class="checkboxMobile">
          <input type="checkbox" hoverable="false" v-on:click="checkbox()" />
          <p class="checkboxMobileText">Adress and Billing Adress are the same?</p>
        </label>
        <label class="label signLabelMobile" v-if="!checked">Billing Adress</label>
        <input
          class="input inputSignMobile"
          type="text"
          placeholder="Insert your Billing Adress"
          v-if="!checked"
          v-model="signInInfo.taxAdress"
        />
        <br v-if="!checked" />
        <br v-if="!checked" />
        <label class="label signLabelMobile" v-if="!checked">Postal-code</label>
        <input class="input inputSignMobile" type="text" placeholder v-if="!checked" v-model="signInInfo.taxZipCode" />
        <br v-if="!checked" />
        <br />
        <label class="label signLabelMobile">Local</label>
        <input class="input inputSignMobile" type="text" placeholder="Insert your Local" v-model="signInInfo.local" />
        <br />
        <button
          class="button attach previousMobile is-warning thirdStep"
          :disabled="isDisabledPrev"
          v-on:click="stepChangeMinus()"
          v-bind:class="[activeSteps ? 'adjustSteps' : '']"
        >ANTERIOR</button>
        <!--<a id="steps">{{currentStep}}</a>-->
        <button
          class="button attach nextMobile is-warning thirdStep"
          :disabled="isDisabledNext"
          v-on:click="stepChangePlus()"
          v-bind:class="[activeSteps ? 'adjustSteps' : '']"
        >PROXIMO</button>
      </div>
      <div v-if="step == 4">
        <h3 class="SubtitlesMobile">ChoosePackage</h3>
        <div class="tile is-ancestor is-12">
          <div class="tile is-vertical is-parent">
            <div
              class="tile is-child box boxMobile"
              @click="toggleClassBasic()"
              v-bind:class="[isActiveBasic ? 'activePack' : '']"
            >
              <h1
                class="title articleTitle"
                v-bind:class="[isActiveBasic ? 'activePackText' : '']"
              >Basic</h1>
              <ul class="packageListMobile" @click="toggleClassBasic()">
                <li
                  v-bind:class="[isActiveBasic ? 'activePackText' : '']"
                  @click="toggleClassBasic()"
                >Access to Mobile app</li>
                <!--<li>2 sensors included</li>
                <li>Home Service</li>-->
              </ul>
              <h3 class="prices" v-bind:class="[isActiveBasic ? 'activePackText' : '']">40€</h3>
            </div>
            <div
              class="tile is-child box boxMobile"
              @click="toggleClassPremium()"
              v-bind:class="[isActivePremium ? 'activePack' : '']"
            >
              <h1
                class="title articleTitle"
                v-bind:class="[isActivePremium ? 'activePackText' : '']"
              >Premium</h1>
              <ul
                class="packageListMobile"
                @click="toggleClassPremium()"
                v-bind:class="[isActivePremium ? 'activePackText' : '']"
              >
                <li
                  @click="toggleClassPremium()"
                  v-bind:class="[isActivePremium ? 'activePackText' : '']"
                >Access to Mobile App</li>
              </ul>
              <h3 class="prices" v-bind:class="[isActivePremium ? 'activePackText' : '']">100€</h3>
              <p class="discount" v-bind:class="[isActivePremium ? 'activePackText' : '']">23% off</p>
            </div>
          </div>
        </div>
        <br />
        <button
          class="button attach previousMobile is-warning fourthStep"
          :disabled="isDisabledPrev"
          v-on:click="stepChangeMinus()"
          v-bind:class="[activeSteps ? 'adjustSteps' : '']"
        >ANTERIOR</button>
        <button
          id="logButton"
          class="button attach enterMobile is-warning fourthStep"
          v-if="step == 4"
          v-on:click="signUp()"
        >ENTRAR</button>
      </div>
    </div>
  </div>
</body>
</template>
<script>
//import bulmaSteps from "../../node_modules/bulma-extensions/bulma-steps/src/js/index";
import { doLogin } from "../API/apiAuth";
import { doRegister} from "../API/apiAuth";
export default {
  data() {
    return {
      login: true,
      step: 1,
      currentStep: "1/4",
      checked: false,
      isActiveBasic: false,
      isActivePremium: false,
      activeSteps: true,
      chosenPack: 0,
      loginInfo: {
        email: "",
        password: ""
      },
      confirmPass: "",
      signInInfo: {
        name: "",
        email: "",
        password: "",
        adress: "",
        nif: 0,
        username:"",
        taxAdress:"",
        taxZipCode:"",
        contacto:0,
        idPackage: 0,
        zipCode:"",
        local:"",
        credit:0,
        instalation: 1,
        active: 1,
        instaled: 0
      },
      userFirstOrder: {
        package: ""
      },
      userHouse: {
        adress: "",
        zipCode: ""
      }
    };
  },
  methods: {
    change() {
      if (this.login) {
        this.login = false;
      } else {
        this.login = true;
      }
    },
    stepChangePlus() {
      this.step++;
      if (this.step == 2) {
        this.currentStep = "2/4";
      }
      if (this.step == 3) {
        this.currentStep = "3/4";
      }
      if (this.step == 4) {
        this.currentStep = "4/4";
      }
    },
    stepChangeMinus() {
      this.step--;
      if (this.step == 2) {
        this.currentStep = "2/4";
      }
      if (this.step == 3) {
        this.currentStep = "3/4";
      }
      if (this.step == 1) {
        this.currentStep = "1/4";
      }
    },
    checkbox() {
      if (this.checked) {
        this.checked = false;
      } else {
        this.checked = true;
      }
    },
    toggleClassBasic() {
      if (!this.isActivePremium) {
        if (this.isActiveBasic) {
          this.isActiveBasic = false;
          this.signInInfo.idPackage = 0
          this.signInInfo.credit = 40
        } else {
          this.isActiveBasic = true;
          this.signInInfo.idPackage = 6
          this.signInInfo.credit = 40
        }
      }
    },
    toggleClassPremium() {
      if (!this.isActiveBasic) {
        if (this.isActivePremium) {
          this.isActivePremium = false;
          this.signInInfo.idPackage = 0
          this.signInInfo.credit = 100
        } else {
          this.isActivePremium = true;
          this.signInInfo.idPackage = 100
        }
      }
    },
    loginExe() {
      doLogin(this.loginInfo).then(response => {
        /*eslint-disable*/
        console.log(response.data)
        if(!response.data.success){
          this.$buefy.toast.open({
            message: "Invalid User!",
            type: "is-danger"
          });
        }
        else{
          /*eslint-disable*/
          console.log(response.data)
          this.$buefy.toast.open({
            message: "Welcome!",
            type: "is-success"
          });
          this.$router.push({name: "home"})
          this.$store.dispatch("set_user_id",response.data.data.idUser)
          localStorage.setItem("token", response.data.token);
        }
      });
    },
    signUp() {
      doRegister(this.signInInfo).then(response => {
        /*eslint-disable*/
        console.log(response.data)
        /*if(!response.data.success){
          this.$buefy.toast.open({
            message: "Invalid User!",
            type: "is-danger"
          });
        }
        else{
          this.$buefy.toast.open({
            message: "Welcome!",
            type: "is-success"
          });
          this.login = false
        }*/
      });
    }
  },
  created() {
    //este é o metodo em concreto
    //bulmaSteps.attach();
  },
  computed: {
    isDisabledPrev: function() {
      if (this.step == 1) {
        return true;
      } else {
        return false;
      }
    },
    isDisabledNext: function() {
      if (this.step == 4) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/login.scss";
</style>