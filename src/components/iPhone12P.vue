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
  <div class="iphone12p">
    <a
      class="header"
      target="_blank"
      href="https://www.dns-shop.ru/product/33faf78c0da03332/61-smartfon-apple-iphone-12-pro-128-gb-sinij/"
    >
      <h1>iPhone 12 Pro</h1>
    </a>

    <my-three
      root=".iphone12p"
      gltfUrl="models/iPhone12P/scene.gltf"
      :object-options="{position: { x: 0, y: -45, z: - 350 }, rotation: rotationOptions}"
      :camera-options="{ fov: 45, near: 1, far: 1000 }"
      :light-options="{color: 0xffffff, intensity: 10 }"
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
        @click="mouseClick(true)"
        @mousedown="mouseDown(true)"
        @mouseup="mouseUp"
      >
        <img src="@/assets/chevron-down.svg" style="width: 40px; height: 40px">
      </button>
    </div>
  </div>
</template>

<style>
.iphone12p {
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
