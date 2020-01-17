<template>
<body>
  <div class="container">
    <section>
      <Navbar></Navbar>
    </section>
    <section class="hero is-medium has-background-white">
      <div class="columns">
        <div class="column is-12-mobile is-6-tablet is-4-desktop">
          <img src="../assets/Images/Login.png" width=" 150px;" />
        </div>
        <div class="column is-12-mobile is-6-tablet is-8-desktop">
          <h1 class="title">Create your account</h1>
          <h2
            class="subtitle"
          >and get ready to protect your home. wdf2et2wetg23 t23t23t 24y34ty423t232 23t23523</h2>
        </div>
      </div>
    </section>
    <section class="hero is-medium has-background-white is-12-mobile is-6-tablet is-2-desktop">
      <div class="hero-body">
        <nav class="level" id>
          <div class="level-left">
            <h1 class="title">Create your account</h1>
            <h2 class="subtitle">and get ready to protect your home.</h2>
          </div>
          <div class="level-right">
            <img class="image" src="../assets/Images/Login.png" />
          </div>
        </nav>
      </div>
    </section>
    <section class="hero is-medium has-background-light is-12-mobile is-6-tablet is-2-desktop">
      <div class="hero-body">
        <nav class="level">
          <div class="level-left">
            <img class="image" src="../assets/Images/Choose.png" />
          </div>
          <div class="level-right">
            <h1 class="title">Choose your plan</h1>
            <h2 class="subtitle">make sure you buy what you need to feel secured.</h2>
          </div>
        </nav>
      </div>
    </section>
    <section class="hero is-medium has-background-white is-12-mobile is-6-tablet is-2-desktop">
      <div class="hero-body">
        <nav class="level">
          <div class="level-left">
            <h1 class="title" style="font-size: 60px">We take care of everything</h1>
            <h2 class="subtitle">Delivery and installation</h2>
          </div>
          <div class="level-right">
            <img class="image" src="../assets/Images/Delivery.png" />
          </div>
        </nav>
      </div>
    </section>
    <section class="hero is-medium has-background-light">
      <div class="hero-body">
        <nav class="level">
          <div class="level-left">
            <img class="image" src="../assets/Images/Payment.png" />
          </div>
          <div class="level-right">
            <h1 class="title" style="font-size: 60px">You can pay from anywhere</h1>
            <h2 class="subtitle"></h2>
          </div>
        </nav>
      </div>
    </section>
  </div>
</body>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "Security",
  components: {
    Navbar
  }
};
</script>

<style scoped>
* {
  max-width: 100% !important;
}

.hero {
  position: relative;
  max-height: 75vh;
  max-width: 1024px;
}

.level-left {
  margin-left: 150px;
}

.level-left .title {
  font-size: 80px;
  color: #0a1f3c;
  padding-bottom: 250px;
}

.level-left .subtitle {
  position: absolute;
  padding-top: 25px;
  padding-left: 130px;
  font-size: 30px;
}

.level-right img {
  /* width: 300px; */
  height: 500px;
  max-width: 300px;
  padding-bottom: 100px;
  padding-right: 100px;
}

.level-right {
  margin-right: 80px;
}

.level-right .title {
  font-size: 80px;
  color: #0a1f3c;
  padding-bottom: 250px;
}

.level-right .subtitle {
  position: absolute;
  padding-right: 100px;
}

.level-left img {
  height: 400px;
  max-width: 200px;
}
</style>