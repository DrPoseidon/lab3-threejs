<script setup>
  import MyThree from './MyThree.vue';
  import { reactive, ref } from 'vue';

  let rotationOptions = reactive({ x: 0, y: 0, z: 0 });
  let timeout = ref();

  const mouseDown = (add) => {
    timeout = setInterval(() => {
      if (add) {
        rotationOptions.y += 0.1;
      } else {
        rotationOptions.y -= 0.1;
      }
    }, 20);
  };

  const mouseUp = () => {
    clearInterval(timeout);
  };
</script>

<template>
  <div class="iphone13pm">
    <a
      class="header"
      target="_blank"
      href="https://www.dns-shop.ru/product/8c6be93d15daed20/67-smartfon-apple-iphone-13-pro-max-128-gb-goluboj/"
    >
      <h1>iPhone 13 Pro Max</h1>
    </a>

    <my-three
      root=".iphone13pm"
      gltfUrl="models/iPhone13PM/scene.gltf"
      :object-options="{ position: { x: 0, y: 0, z: - 3.5 }, rotation: rotationOptions }"
      :light-options="{color: 0xffffff, intensity: 2 }"
    />

    <div class="buttons">
      <a
        class="button-left"
        @mousedown="mouseDown(false)"
        @mouseup="mouseUp"
        @mouseleave="mouseUp"
      >
        <img src="@/assets/chevron-down.svg" style="width: 40px; height: 40px">
      </a>

      <a
        class="button-right"
        @mousedown="mouseDown(true)"
        @mouseup="mouseUp"
        @mouseleave="mouseUp"
      >
        <img src="@/assets/chevron-down.svg" style="width: 40px; height: 40px">
      </a>
    </div>
  </div>
</template>

<style>
  .iphone13pm {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .buttons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70%;
  }

  .button-right {
    cursor: pointer;
    transform: rotate(-90deg);
  }

  .button-left {
    cursor: pointer;
    transform: rotate(90deg);
  }

  .header {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-decoration: none;
  }
</style>
