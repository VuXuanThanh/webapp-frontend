<template>
  <header class="header">
    <div class="header__left">
      <div class="combobox combobox__restaurant">
        <input class="combobox__input" value="Lyoko shop" />
        <i class="fas fa-chevron-down combobox__icon"></i>
        <ul class="combobox__content">
          <li class="combobox__content-item combobox__content-item-selected">
            <i class="combobox__item-icon combobox__item-icon-selected fas fa-check"></i>
            <span class="combobox__item-value combobox__item-value-selected">
              Nhà hàng Biển
              Nam
            </span>
          </li>
          <li class="combobox__content-item">
            <i class="fas fa-check combobox__item-icon"></i>
            <span class="combobox__item-value">Nhà hàng Biển Đông</span>
          </li>
          <li class="combobox__content-item">
            <i class="fas fa-check combobox__item-icon"></i>
            <span class="combobox__item-value">Nhà hàng Biển Bắc</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="header__right">
      <div class="header__right-avartar"></div>
      <span class="header__right-user">Administrator</span>
      <i class="fas fa-ellipsis-h header__right-icon"></i>
    </div>
  </header>
</template>

<script>
  export default {};
</script>

<style>
</style>