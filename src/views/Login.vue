<template>
  <div class="login">
    <div class="container">
    <div class="columns fullLogin is-gapless">
        <div class="column is-two-fifths" id="left">
            <!-- Logo -->
            <figure class="image is-128x128" id="LogoLogin">
    	        <img src="../assets/Images/logo.png" >
            </figure>
            <h1 id="introduction">Welcome to Security4All<br>Platform</h1>
            <p id="loginMessage">Time to make yourself secure</p>
        </div>
        <div class="column" id="right">
            <!--Title-->
            <h1 id="TitleLogin">LOGIN</h1>
            <!--Input of email -->
            <label class="label loginLabel">Email</label>
            <input class="input inputLogin" type="text" placeholder="<i class='far fa-envelope'></i>">
            <br>
            <br>
            <!--Input of password -->
            <label class="label loginLabel">Password</label>
            <input class="input inputLogin" type="password" placeholder="Text input">
            <!--esqueceu-se da password -->
            <br>
            <a id="forgotPass">Esqueceu-se da sua password?</a>
            <!--Login Button -->
            <br>
            <button id="logButton" class="button is-warning">ENTRAR</button>
            
        </div>
    </div>
    </div>
   </div>
</template>

<style lang="scss">
    @import "../assets/login.scss";
</style>
