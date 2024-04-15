<template>
  <div id="desktop-centered" v-if="$viewport.isGreaterOrEquals('tablet')">
    <div class="card">
      <div class="header">
        <div class="header-background">
          <ThemeImage
            dark_src="HeaderBackgroundDark.webp"
            light_src="HeaderBackgroundLight.webp"
          />
        </div>
        <div class="header-icon-wrapper">
          <div class="header-icon">
            <ThemeImage
              dark_src="LogoCleanDark.webp"
              light_src="LogoCleanLight.webp"
            />
          </div>
        </div>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
  <div id="mobile-centered" v-if="$viewport.isLessThan('tablet')">
    <slot />
  </div>
  <div class="color-mode-selector">
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Hell</option>
      <option value="dark">Dunkel</option>
    </select>
  </div>
  <div class="locale-selector">
    <select v-model="$i18n.locale">
      <option value="de">Deutsch</option>
      <option value="en">English</option>
    </select>
  </div>
  <Alerts :alert_service="AlertService" :alerts="alerts" v-if="alerts.length > 0" />
</template>

<script lang="ts" setup>
const { alerts, AlertService } = useAlerts();
</script>
<style lang="scss">
//Mobile
@media (max-width: 767px) {
  #mobile-centered {
    display: block;
  }
  #desktop-centered {
    display: none;
  }
}
//Desktop
@media (min-width: 768px) {
  #desktop-centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .card {
      background: var(--background-100);
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      min-width: 500px;
      overflow: hidden;

      .header {
        height: 140px;
        width: min-content;
        min-width: 100%;
        overflow: hidden;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .header-background {
          position: relative;
          width: 100%;
          height: 100px;
          overflow: hidden;
        }

        .header-icon-wrapper {
          position: absolute;
          top: 50px;
          left: 0;
          margin: 0 40px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          max-height: 100px;

          .header-icon {
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            border-radius: 15px;
            background: var(--background-100);
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
              border-radius: 10px;
            }
          }
        }
      }

      .content {
        padding: 20px;
      }
    }
  }
  #mobile-centered {
    display: none;
  }
}

.color-mode-selector {
  position: fixed;
  top: 50px;
  right: 50px;
  select {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid var(--background-100);
    background: var(--background-100);
    color: var(--text-100);
  }
}

.locale-selector {
  position: fixed;
  top: 50px;
  right: 150px;
  select {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid var(--background-100);
    background: var(--background-100);
    color: var(--text-100);
  }
}
</style>
