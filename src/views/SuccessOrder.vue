<template>
  <div class="success-order">
    <Navbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img
            src="../assets/images/undraw_cooking_lyxy.svg"
            width="200"
            class="mb-5"
          />
          <h2>Berhasil Dipesan</h2>
          <h4>Mohon ditunggu pesanan Anda sedang dibuat</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "SuccessOrder",
  components: {
    Navbar,
  },
};
</script>

<style></style>
