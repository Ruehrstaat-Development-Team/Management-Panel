<template>
  <div
    class="dialog-background"
    :class="{ expanded: expanded }"
    @click="toggleExpanded()"
  ></div>
  <aside class="navigation-rail" :class="{ expanded: expanded }">
    <span
      class="material-symbols-rounded navigation-rail-hamburger-menu"
      @click="toggleExpanded()"
      >menu</span
    >
    <span class="navigation-rail-title-text">Ruehrstaat Squadron</span>
    <NavigationRailItem
      :icon="'home'"
      :title="'Home'"
      :is-active="true"
      :is-expanded="expanded"
      :to="'/'"
      :toggle-func="toggleExpanded"
    />
    <NavigationRailItem
      :icon="'handyman'"
      :title="'Carrier'"
      :is-active="false"
      :is-expanded="expanded"
      :to="'/carrier'"
      :toggle-func="toggleExpanded"
    />
    <NavigationRailItem
      :icon="'group'"
      :title="'Commander'"
      :is-active="false"
      :is-expanded="expanded"
      :to="'/commander'"
      :toggle-func="toggleExpanded"
    />
    <NavigationRailItem
      :icon="'inventory'"
      :title="'Management'"
      :is-active="false"
      :is-expanded="expanded"
      :to="'/management'"
      :toggle-func="toggleExpanded"
    />
    <select v-model="$colorMode.preference">
      <option>light</option>
      <option>dark</option>
      <option>system</option>
    </select>
  </aside>
</template>

<script setup lang="ts">
var expanded = ref(false);

const toggleExpanded = () => {
  expanded.value = !expanded.value;
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
  transition: width var(--animation-time-l) var(--easing-default),
    border-radius var(--animation-time-l) var(--easing-default);

  .navigation-rail-hamburger-menu {
    margin: 16px 0 16px 0;
    font-size: 24px;
    padding: 0 28px 0 28px;
    height: 24px;
    cursor: pointer;
    transition: height var(--animation-time-l) var(--easing-default),
      margin var(--animation-time-l) var(--easing-default),
      opacity var(--animation-time-l) var(--easing-default);
  }

  .navigation-rail-title-text{
    font-size: 14px;
    font-weight: 600;
    padding-left: 28px;
    height: 0px;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 52px;
    margin: 0;
    transition: opacity var(--animation-time-l) var(--easing-default),
      width var(--animation-time-l) var(--easing-default),
      margin var(--animation-time-l) var(--easing-default),
      height var(--animation-time-l) var(--easing-default);
  }

  .material-symbols-rounded {
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
  }
}

.navigation-rail.expanded {
  width: 360px;
  border-radius: 0 28px 28px 0;

  .navigation-rail-hamburger-menu{
    height: 0px;
    opacity: 0;
    margin: 0;
  }

  .navigation-rail-title-text{
    opacity: 1;
    width: 332px;
    margin: 10px 0 10px 0;
    height: 20px;
  }
}

.dialog-background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: black;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--animation-time-l) var(--easing-default);
}
.dialog-background.expanded {
  opacity: 0.5;
  pointer-events: all;
}
</style>
