<template>
<nav class="navbar secondaryColorBG"  role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="../assets/Images/logo.png" width="27" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu ">
    <!-- <div class="navbar-start">
      
      </div> -->
    </div>

    <div class="navbar-end">

<a class="navbar-item has-text-white">
        Security
      </a>

      <a class="navbar-item has-text-white">
        Catalog
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link has-text-white">
          <i class="fas fa-user-circle"></i>
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Perfil
          </a>
          <a class="navbar-item">
            Settings
          </a>
          <a class="navbar-item">
            Home Manager
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Sign out
          </a>
        </div>




      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light"><router-link to="/login">Log in</router-link>
            
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'Navbar',

}

</script>

<style lang="scss" scoped>
    @import '../assets/main.scss';

    .navbar-item:hover, .navbar-link:hover{
      background-color: rgba(13, 52, 107, 0.349) !important;
    }
    
</style>