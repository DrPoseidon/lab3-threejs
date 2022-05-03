<script setup>
import MyThree from './MyThree.vue';
import { reactive, ref } from 'vue';

let rotationOptions = reactive({ x: 0, y: 3.1, z: 0 });
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

const mouseClick = (add) => {
  if (add) {
    rotationOptions.y += 0.5;
  } else {
    rotationOptions.y -= 0.5;
  }
};

const mouseUp = () => {
  clearInterval(timeout);
};
</script>

<template>
  <div class="iphone5s">
    <a
      class="header"
      target="_blank"
      href="https://www.dns-shop.ru/product/167cdc1539443120/4-smartfon-apple-iphone-5s-16-gb-zolotistyj/"
    >
      <h1>iPhone 5S</h1>
    </a>

    <my-three
      root=".iphone5s"
      gltfUrl="models/iPhone5S/scene.gltf"
      :object-options="{position: { x: 0, y: 0, z: - 5 }, rotation: rotationOptions}"
    />

    <div class="buttons">
      <button
        class="button-left"
        @mousedown="mouseDown(false)"
        @mouseup="mouseUp"
        @click="mouseClick(false)"
      >
        <img src="@/assets/chevron-down.svg" style="width: 40px; height: 40px">
      </button>

      <button
        class="button-right"
        @mousedown="mouseDown(true)"
        @mouseup="mouseUp"
        @click="mouseClick(true)"
      >
        <img src="@/assets/chevron-down.svg" style="width: 40px; height: 40px">
      </button>
    </div>
  </div>
</template>

<style>
  .iphone5s {
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
