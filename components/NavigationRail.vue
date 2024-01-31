<template>
  <aside class="navigation-rail" :class="{ expanded: expanded }">
    <span class="material-symbols-rounded navigation-rail-hamburger-menu" @click="toggleExpanded()">menu</span>
    <NavigationRailItem
      :icon="'home'"
      :title="'Home'"
      :is-active="true"
      :is-expanded="expanded"
      :to="'/'"
    />
    <NavigationRailItem
      :icon="'handyman'"
      :title="'Carrier'"
      :is-active="false"
      :is-expanded="expanded"
      :to="'/carrier'"
    />
    <NavigationRailItem
      :icon="'group'"
      :title="'Commander'"
      :is-active="false"
      :is-expanded="expanded"
      :to="'/commander'"
    />
    <NavigationRailItem
      :icon="'inventory'"
      :title="'Management'"
      :is-active="false"
      :is-expanded="expanded"
      :to="'/management'"
    />
    <select v-model="$colorMode.preference">
      <option>light</option>
      <option>dark</option>
      <option>system</option>
    </select>
    <button @click="crash()">Helo</button>
  </aside>
</template>

<script setup lang="ts">
var expanded = ref(localStorage.getItem("Navigation-Rail-Expanded") == 'true');

const toggleExpanded = () => {
  expanded.value = !expanded.value;
  localStorage.setItem("Navigation-Rail-Expanded", expanded.value.toString());
};
</script>

<style scoped lang="scss">
@use "~/assets/css/main.scss";
.navigation-rail {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80px;
  background: var(--background-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  transition: width var(--animation-time-l) var(--easing-default);
}

.navigation-rail.expanded {
  width: 360px;
}

.navigation-rail .navigation-rail-hamburger-menu {
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 24px;
  padding: 0 28px 0 28px;
  cursor: pointer;
}

.navigation-rail .material-symbols-rounded {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
