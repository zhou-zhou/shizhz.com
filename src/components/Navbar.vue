<template>
  <nav class="navbar is-transparent is-fixed-top">
  <div class="navbar-brand">
    <a class="navbar-item" href="http://shizhz.com">
        <img src="@/assets/logo.png" alt="Logo">
    </a>
    <div class="navbar-burger burger" data-target="navbar-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbar-menu" class="navbar-menu is-active">
    <div class="navbar-start">
      <a class="navbar-item" href="/#">
        Shizhz's Site
      </a>
      <hr class="navbar-divider">
      <a class="navbar-item" href="/#blogs">
        Blogs
      </a>
      <a class="navbar-item" href="/#tips">
        Tips
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="input" placeholder="Search Anything">
            <span class="icon is-medium is-right">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary" href="/#write">
              <span class="icon">
                <i class="fas fa-edit"></i>
              </span>
              <span>New</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
