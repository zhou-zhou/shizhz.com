<template>
<div class="ui celled grid intro-board noshadow font-color">
  <div class="row noshadow" style="border-bottom: 0.5px #d4d4d5 solid;">
    <div class="eight wide column" style="background-color: #f8f9f9;">
      <div class="ui huge header font-color">Shizhz's personal site</div>
      <h2>It's about <strong>Coding</strong> and <strong>Funny</strong> stuff.</h2>
      <SearchBox />
    </div>
    <div class="four wide column" style="background-color: #f2f3f4;">
      <div style="width: 100%;" class="ui top left attached label" ><strong>Top Tags</strong></div>
         <a class="ui image label">
          <img src="@/assets/java-48.png">
          Java
          <div class="detail">12</div>
        </a>
        <a class="ui image label">
          <img src="@/assets/gopher-48.png">
          Golang
          <div class="detail">25</div>
        </a>
        <a class="ui image label">
          <img src="@/assets/docker-48.png">
          Docker
          <div class="detail">25</div>
        </a>
        <a class="ui image label">
          <img src="@/assets/console-48.png">
          Shell
          <div class="detail">25</div>
        </a>
        <a class="ui image label">
          <img src="@/assets/linux-48.png">
          Linux
          <div class="detail">25</div>
        </a>
        <a class="ui image label">
          <img src="@/assets/python-48.png">
          Python
          <div class="detail">25</div>
        </a>
    </div>
    <div class="four wide column" style="background-color: #f8f9f9;">
      <div class="ui three column grid">
        <div class="column"><div>192</div><strong>Articles</strong></div>
        <div class="column"><div>87</div><strong>Tags</strong></div>
        <div class="column"><div>15k</div><strong>Words</strong></div>
      </div>
      <div class="ui list" style="padding-left:25px;">
        <div class="item">
          <i class="marker icon"></i>
          <div class="content">
            Chengdu, China
          </div>
        </div>
        <div class="item">
          <i class="github icon"></i>
          <div class="content">
            <a href="https://www.github.com/shizhz">Github</a>
          </div>
        </div>
        <div class="item">
          <i class="stack overflow icon"></i>
          <div class="content">
            <a href="https://stackoverflow.com/users/1000254/shizhz">Stackoverflow</a>
          </div>
        </div>
        <div class="item">
          <i class="mail icon"></i>
          <div class="content">
            <a href="mailto:messi.shizz@gmail.com">messi.shizz@gmail.com</a>
          </div>
        </div>
        <div class="item">
          <i class="clock outline icon"></i>
          <div class="content">
            Founded since 2018/04/15
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SearchBox from './SearchBox'

export default {
  name: 'IntroBoard',
  components: {
    SearchBox
  }
}
</script>

<style>
.font-color {
  color: #1b2631 !important;
}

.intro-board {
  margin-top: 1px !important;
  min-height: 200px;
  border-radius: 0;
  text-align: center;
  vertical-align: middle;
}

.noshadow {
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

a.label {
  margin: 2px !important;
}
</style>
