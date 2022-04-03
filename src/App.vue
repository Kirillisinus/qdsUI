<template>
  <div id="content">
    <router-view />
  </div>
  <div id="footer"></div>
</template>

<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Neucha", cursive;
}

body {
  background-color: #fff6e1;
}

#content {
  margin: 30px 2em;
  padding: 20px;
  border: solid black;
  border-color: #ffaf3b;
  /*border-width: 5px 3px 3px 5px;
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;*/
  border: 4px #f5d731f1 solid;
  box-shadow: inset 0px 2px 0px 0px rgb(255 255 255 / 15%),
    0px 3px 0px 0px rgb(255 255 255 / 15%);
  border-radius: 12px;
}

@media (max-width: 877px) {
  #content {
    max-width: 50em;
    margin: 30px 2em;
  }
}
</style>