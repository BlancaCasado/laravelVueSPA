<template>
  <main>
    <Header />

    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper">
        <router-view></router-view>

        <Footer />
      </div>
    </div>

    <FlashMessage :position="'right top'"></FlashMessage>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Sidebar,
    Footer
  }
};
</script>