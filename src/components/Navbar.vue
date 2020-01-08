<template>
  <nav class="navbar is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
      <a class="navbar-item logo" href="#">
        <img src="../assets/Images/1.png" width="161" height="28" />
      </a>
      <!-- BURGER -->
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarContent"
        @click="isOpen = !isOpen"
        v-bind:class="{'is-active': isOpen}"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarContent" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
      <div id="navbarCenter" class="navbar-end">
        <a class="navbar-item sectionLink has-text-white">Security</a>
        <a class="navbar-item sectionLink has-text-white">Catalog</a>
        <!-- Dropdown desktop/tablet-->
        <div class="navbar-item has-dropdown is-hoverable is-hidden-mobile" v-if="user == true">
          <!-- v-if="user" -->
          <a class="navbar-link has-text-white">
            <i class="fas fa-user-circle is-white" style="margin-right:5px"></i>Rodrigo
          </a>

          <div class="navbar-dropdown ">
            <a class="navbar-item">Perfil</a>
            <a class="navbar-item">Achievements</a>
            <a class="navbar-item">Settings</a>
            <a class="navbar-item">Home Manager</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Sign out</a>
          </div>
        </div>
        <!-- Mobile dropdown -->
        <a class="navbar-item sectionLink has-text-white is-hidden-tablet" v-if="user == true">Perfil</a>
        <a class="navbar-item sectionLink has-text-white is-hidden-tablet" v-if="user == true">Achievements</a>
        <a class="navbar-item sectionLink has-text-white is-hidden-tablet" v-if="user == true">Settings</a>
       

        <div class="navbar-item">
        <div class="buttons">
          <a class="button is-info is-hidden-tablet " v-if="user == true">
            <span class="icon">
          <i class="fas fa-home"></i>
        </span>
            <span>Home Manager</span>
          </a>

          <a class="button buttonBorderDanger is-hidden-tablet" v-if="user == true">
            <span class="icon">
          <i class="fas fa-sign-out-alt"></i>
        </span>
            <span>Sign Out</span>
          </a>

          <a class="button buttonBorderPrimary" v-if="user == false">
            <span class="icon is-hidden-tablet">
          <i class="fas fa-sign-in-alt"></i>
        </span>
            <span>Log In</span>
          </a>
        </div>
      </div>
      </div>

      
    </div>





    </div>
    



  </nav>
</template>

<script>
export default {
  name: "Navbar1",
  data() {
    return {
      isOpen: false,
      user: true
    };
  }
};
</script>

<style lang="scss">

.sectionLink {
  padding-left: 20px !important;
  padding-right: 20px !important;
}



</style>