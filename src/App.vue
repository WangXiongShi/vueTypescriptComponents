<template>
  <div id="app">
     <!-- <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
        <div class="load_title">正在加载XXX课题组,请稍等……
        </div>
      </div> -->

    <div class="book" id="loader-wrapper">
      <div class="inner">
        <div class="left"></div>
        <div class="middle"></div>
        <div class="right"></div>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/styles/reset.scss";

    .book {
      --color: #fff;
      --duration: 6.8s;
      width: 32px;
      height: 12px;
      position: relative;
      margin: 32px 0 0 0;
      zoom: 1.5;
    }

    .book .inner {
      width: 32px;
      height: 12px;
      position: relative;
      -webkit-transform-origin: 2px 2px;
      transform-origin: 2px 2px;
      -webkit-transform: rotateZ(-90deg);
      transform: rotateZ(-90deg);
      -webkit-animation: book var(--duration) ease infinite;
      animation: book var(--duration) ease infinite;
    }

    .book .inner .left,
    .book .inner .right {
      width: 60px;
      height: 4px;
      top: 0;
      border-radius: 2px;
      background: var(--color);
      position: absolute;
    }

    .book .inner .left:before,
    .book .inner .right:before {
      content: '';
      width: 48px;
      height: 4px;
      border-radius: 2px;
      background: inherit;
      position: absolute;
      top: -10px;
      left: 6px;
    }

    .book .inner .left {
      right: 28px;
      -webkit-transform-origin: 58px 2px;
      transform-origin: 58px 2px;
      -webkit-transform: rotateZ(90deg);
      transform: rotateZ(90deg);
      -webkit-animation: left var(--duration) ease infinite;
      animation: left var(--duration) ease infinite;
    }

    .book .inner .right {
      left: 28px;
      -webkit-transform-origin: 2px 2px;
      transform-origin: 2px 2px;
      -webkit-transform: rotateZ(-90deg);
      transform: rotateZ(-90deg);
      -webkit-animation: right var(--duration) ease infinite;
      animation: right var(--duration) ease infinite;
    }

    .book .inner .middle {
      width: 32px;
      height: 12px;
      border: 4px solid var(--color);
      border-top: 0;
      border-radius: 0 0 9px 9px;
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
    }

    .book ul {
      margin: 0;
      padding: 0;
      list-style: none;
      position: absolute;
      left: 50%;
      top: 0;
    }

    .book ul li {
      height: 4px;
      border-radius: 2px;
      -webkit-transform-origin: 100% 2px;
      transform-origin: 100% 2px;
      width: 48px;
      right: 0;
      top: -10px;
      position: absolute;
      background: var(--color);
      -webkit-transform: rotateZ(0deg) translateX(-18px);
      transform: rotateZ(0deg) translateX(-18px);
      -webkit-animation-duration: var(--duration);
      animation-duration: var(--duration);
      -webkit-animation-timing-function: ease;
      animation-timing-function: ease;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
    }

    .book ul li:nth-child(0) {
      -webkit-animation-name: page-0;
      animation-name: page-0;
    }

    .book ul li:nth-child(1) {
      -webkit-animation-name: page-1;
      animation-name: page-1;
    }

    .book ul li:nth-child(2) {
      -webkit-animation-name: page-2;
      animation-name: page-2;
    }

    .book ul li:nth-child(3) {
      -webkit-animation-name: page-3;
      animation-name: page-3;
    }

    .book ul li:nth-child(4) {
      -webkit-animation-name: page-4;
      animation-name: page-4;
    }

    .book ul li:nth-child(5) {
      -webkit-animation-name: page-5;
      animation-name: page-5;
    }

    .book ul li:nth-child(6) {
      -webkit-animation-name: page-6;
      animation-name: page-6;
    }

    .book ul li:nth-child(7) {
      -webkit-animation-name: page-7;
      animation-name: page-7;
    }

    .book ul li:nth-child(8) {
      -webkit-animation-name: page-8;
      animation-name: page-8;
    }

    .book ul li:nth-child(9) {
      -webkit-animation-name: page-9;
      animation-name: page-9;
    }

    .book ul li:nth-child(10) {
      -webkit-animation-name: page-10;
      animation-name: page-10;
    }

    .book ul li:nth-child(11) {
      -webkit-animation-name: page-11;
      animation-name: page-11;
    }

    .book ul li:nth-child(12) {
      -webkit-animation-name: page-12;
      animation-name: page-12;
    }

    .book ul li:nth-child(13) {
      -webkit-animation-name: page-13;
      animation-name: page-13;
    }

    .book ul li:nth-child(14) {
      -webkit-animation-name: page-14;
      animation-name: page-14;
    }

    .book ul li:nth-child(15) {
      -webkit-animation-name: page-15;
      animation-name: page-15;
    }

    .book ul li:nth-child(16) {
      -webkit-animation-name: page-16;
      animation-name: page-16;
    }

    .book ul li:nth-child(17) {
      -webkit-animation-name: page-17;
      animation-name: page-17;
    }

    .book ul li:nth-child(18) {
      -webkit-animation-name: page-18;
      animation-name: page-18;
    }

    @-webkit-keyframes page-0 {
      4% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      13%,
      54% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      63% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-0 {
      4% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      13%,
      54% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      63% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-1 {
      5.86% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      14.74%,
      55.86% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      64.74% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-1 {
      5.86% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      14.74%,
      55.86% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      64.74% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-2 {
      7.72% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      16.48%,
      57.72% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      66.48% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-2 {
      7.72% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      16.48%,
      57.72% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      66.48% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-3 {
      9.58% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      18.22%,
      59.58% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      68.22% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-3 {
      9.58% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      18.22%,
      59.58% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      68.22% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-4 {
      11.44% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      19.96%,
      61.44% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      69.96% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-4 {
      11.44% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      19.96%,
      61.44% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      69.96% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-5 {
      13.3% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      21.7%,
      63.3% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      71.7% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-5 {
      13.3% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      21.7%,
      63.3% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      71.7% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-6 {
      15.16% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      23.44%,
      65.16% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      73.44% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-6 {
      15.16% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      23.44%,
      65.16% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      73.44% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-7 {
      17.02% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      25.18%,
      67.02% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      75.18% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-7 {
      17.02% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      25.18%,
      67.02% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      75.18% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-8 {
      18.88% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      26.92%,
      68.88% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      76.92% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-8 {
      18.88% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      26.92%,
      68.88% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      76.92% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-9 {
      20.74% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      28.66%,
      70.74% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      78.66% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-9 {
      20.74% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      28.66%,
      70.74% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      78.66% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-10 {
      22.6% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      30.4%,
      72.6% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      80.4% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-10 {
      22.6% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      30.4%,
      72.6% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      80.4% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-11 {
      24.46% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      32.14%,
      74.46% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      82.14% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-11 {
      24.46% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      32.14%,
      74.46% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      82.14% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-12 {
      26.32% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      33.88%,
      76.32% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      83.88% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-12 {
      26.32% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      33.88%,
      76.32% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      83.88% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-13 {
      28.18% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      35.62%,
      78.18% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      85.62% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-13 {
      28.18% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      35.62%,
      78.18% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      85.62% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-14 {
      30.04% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      37.36%,
      80.04% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      87.36% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-14 {
      30.04% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      37.36%,
      80.04% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      87.36% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-15 {
      31.9% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      39.1%,
      81.9% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      89.1% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-15 {
      31.9% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      39.1%,
      81.9% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      89.1% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-16 {
      33.76% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      40.84%,
      83.76% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      90.84% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-16 {
      33.76% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      40.84%,
      83.76% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      90.84% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-17 {
      35.62% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      42.58%,
      85.62% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      92.58% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-17 {
      35.62% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      42.58%,
      85.62% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      92.58% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes page-18 {
      37.48% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      44.32%,
      87.48% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      94.32% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @keyframes page-18 {
      37.48% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }

      44.32%,
      87.48% {
        -webkit-transform: rotateZ(180deg) translateX(-18px);
        transform: rotateZ(180deg) translateX(-18px);
      }

      94.32% {
        -webkit-transform: rotateZ(0deg) translateX(-18px);
        transform: rotateZ(0deg) translateX(-18px);
      }
    }

    @-webkit-keyframes left {
      4% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
      }

      10%,
      40% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
      }

      46%,
      54% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
      }

      60%,
      90% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
      }

      96% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
      }
    }

    @keyframes left {
      4% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
      }

      10%,
      40% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
      }

      46%,
      54% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
      }

      60%,
      90% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
      }

      96% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
      }
    }

    @-webkit-keyframes right {
      4% {
        -webkit-transform: rotateZ(-90deg);
        transform: rotateZ(-90deg);
      }

      10%,
      40% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
      }

      46%,
      54% {
        -webkit-transform: rotateZ(-90deg);
        transform: rotateZ(-90deg);
      }

      60%,
      90% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
      }

      96% {
        -webkit-transform: rotateZ(-90deg);
        transform: rotateZ(-90deg);
      }
    }

    @keyframes right {
      4% {
        -webkit-transform: rotateZ(-90deg);
        transform: rotateZ(-90deg);
      }

      10%,
      40% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
      }

      46%,
      54% {
        -webkit-transform: rotateZ(-90deg);
        transform: rotateZ(-90deg);
      }

      60%,
      90% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
      }

      96% {
        -webkit-transform: rotateZ(-90deg);
        transform: rotateZ(-90deg);
      }
    }

    @-webkit-keyframes book {
      4% {
        -webkit-transform: rotateZ(-90deg);
        transform: rotateZ(-90deg);
      }

      10%,
      40% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
        -webkit-transform-origin: 2px 2px;
        transform-origin: 2px 2px;
      }

      40.01%,
      59.99% {
        -webkit-transform-origin: 30px 2px;
        transform-origin: 30px 2px;
      }

      46%,
      54% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
      }

      60%,
      90% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
        -webkit-transform-origin: 2px 2px;
        transform-origin: 2px 2px;
      }

      96% {
        -webkit-transform: rotateZ(-90deg);
        transform: rotateZ(-90deg);
      }
    }

    @keyframes book {
      4% {
        -webkit-transform: rotateZ(-90deg);
        transform: rotateZ(-90deg);
      }

      10%,
      40% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
        -webkit-transform-origin: 2px 2px;
        transform-origin: 2px 2px;
      }

      40.01%,
      59.99% {
        -webkit-transform-origin: 30px 2px;
        transform-origin: 30px 2px;
      }

      46%,
      54% {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
      }

      60%,
      90% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
        -webkit-transform-origin: 2px 2px;
        transform-origin: 2px 2px;
      }

      96% {
        -webkit-transform: rotateZ(-90deg);
        transform: rotateZ(-90deg);
      }
    }

    html {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }

    * {
      box-sizing: inherit;
    }

    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      min-height: 100vh;
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      background: #275EFE;
    }

    body .dribbble {
      position: fixed;
      display: block;
      right: 24px;
      bottom: 24px;
    }

    body .dribbble img {
      display: block;
      width: 76px;
    }




// html,
//       body,
//       #app {
//         height: 100%;
//         margin: 0px;
//         padding: 0px;
//       }
//       .chromeframe {
//         margin: 0.2em 0;
//         background: #ccc;
//         color: #000;
//         padding: 0.2em 0;
//       }
//       #loader-wrapper {
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         z-index: 999999;
//       }
//       #loader {
//         display: block;
//         position: relative;
//         left: 50%;
//         top: 50%;
//         width: 150px;
//         height: 150px;
//         margin: -75px 0 0 -75px;
//         border-radius: 50%;
//         border: 3px solid transparent;
//         /* COLOR 1 */
//         border-top-color: #FFF;
//         -webkit-animation: spin 2s linear infinite;
//         /* Chrome, Opera 15+, Safari 5+ */
//         -ms-animation: spin 2s linear infinite;
//         /* Chrome, Opera 15+, Safari 5+ */
//         -moz-animation: spin 2s linear infinite;
//         /* Chrome, Opera 15+, Safari 5+ */
//         -o-animation: spin 2s linear infinite;
//         /* Chrome, Opera 15+, Safari 5+ */
//         animation: spin 2s linear infinite;
//         /* Chrome, Firefox 16+, IE 10+, Opera */
//         z-index: 1001;
//       }
//       #loader:before {
//         content: "";
//         position: absolute;
//         top: 5px;
//         left: 5px;
//         right: 5px;
//         bottom: 5px;
//         border-radius: 50%;
//         border: 3px solid transparent;
//         /* COLOR 2 */
//         border-top-color: #FFF;
//         -webkit-animation: spin 3s linear infinite;
//         /* Chrome, Opera 15+, Safari 5+ */
//         -moz-animation: spin 3s linear infinite;
//         /* Chrome, Opera 15+, Safari 5+ */
//         -o-animation: spin 3s linear infinite;
//         /* Chrome, Opera 15+, Safari 5+ */
//         -ms-animation: spin 3s linear infinite;
//         /* Chrome, Opera 15+, Safari 5+ */
//         animation: spin 3s linear infinite;
//         /* Chrome, Firefox 16+, IE 10+, Opera */
//       }
//       #loader:after {
//         content: "";
//         position: absolute;
//         top: 15px;
//         left: 15px;
//         right: 15px;
//         bottom: 15px;
//         border-radius: 50%;
//         border: 3px solid transparent;
//         border-top-color: #FFF;
//         /* COLOR 3 */
//         -moz-animation: spin 1.5s linear infinite;
//         /* Chrome, Opera 15+, Safari 5+ */
//         -o-animation: spin 1.5s linear infinite;
//         /* Chrome, Opera 15+, Safari 5+ */
//         -ms-animation: spin 1.5s linear infinite;
//         /* Chrome, Opera 15+, Safari 5+ */
//         -webkit-animation: spin 1.5s linear infinite;
//         /* Chrome, Opera 15+, Safari 5+ */
//         animation: spin 1.5s linear infinite;
//         /* Chrome, Firefox 16+, IE 10+, Opera */
//       }
//       @-webkit-keyframes spin {
//         0% {
//           -webkit-transform: rotate(0deg);
//           /* Chrome, Opera 15+, Safari 3.1+ */
//           -ms-transform: rotate(0deg);
//           /* IE 9 */
//           transform: rotate(0deg);
//           /* Firefox 16+, IE 10+, Opera */
//         }
//         100% {
//           -webkit-transform: rotate(360deg);
//           /* Chrome, Opera 15+, Safari 3.1+ */
//           -ms-transform: rotate(360deg);
//           /* IE 9 */
//           transform: rotate(360deg);
//           /* Firefox 16+, IE 10+, Opera */
//         }
//       }
//       @keyframes spin {
//         0% {
//           -webkit-transform: rotate(0deg);
//           /* Chrome, Opera 15+, Safari 3.1+ */
//           -ms-transform: rotate(0deg);
//           /* IE 9 */
//           transform: rotate(0deg);
//           /* Firefox 16+, IE 10+, Opera */
//         }
//         100% {
//           -webkit-transform: rotate(360deg);
//           /* Chrome, Opera 15+, Safari 3.1+ */
//           -ms-transform: rotate(360deg);
//           /* IE 9 */
//           transform: rotate(360deg);
//           /* Firefox 16+, IE 10+, Opera */
//         }
//       }
//       #loader-wrapper .loader-section {
//         position: fixed;
//         top: 0;
//         width: 51%;
//         height: 100%;
//         background: #7171C6;
//         /* Old browsers */
//         z-index: 1000;
//         -webkit-transform: translateX(0);
//         /* Chrome, Opera 15+, Safari 3.1+ */
//         -ms-transform: translateX(0);
//         /* IE 9 */
//         transform: translateX(0);
//         /* Firefox 16+, IE 10+, Opera */
//       }
//       #loader-wrapper .loader-section.section-left {
//         left: 0;
//       }
//       #loader-wrapper .loader-section.section-right {
//         right: 0;
//       }
//       /* Loaded */
//       .loaded #loader-wrapper .loader-section.section-left {
//         -webkit-transform: translateX(-100%);
//         /* Chrome, Opera 15+, Safari 3.1+ */
//         -ms-transform: translateX(-100%);
//         /* IE 9 */
//         transform: translateX(-100%);
//         /* Firefox 16+, IE 10+, Opera */
//         -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
//         transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
//       }
//       .loaded #loader-wrapper .loader-section.section-right {
//         -webkit-transform: translateX(100%);
//         /* Chrome, Opera 15+, Safari 3.1+ */
//         -ms-transform: translateX(100%);
//         /* IE 9 */
//         transform: translateX(100%);
//         /* Firefox 16+, IE 10+, Opera */
//         -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
//         transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
//       }
//       .loaded #loader {
//         opacity: 0;
//         -webkit-transition: all 0.3s ease-out;
//         transition: all 0.3s ease-out;
//       }
//       .loaded #loader-wrapper {
//         visibility: hidden;
//         -webkit-transform: translateY(-100%);
//         /* Chrome, Opera 15+, Safari 3.1+ */
//         -ms-transform: translateY(-100%);
//         /* IE 9 */
//         transform: translateY(-100%);
//         /* Firefox 16+, IE 10+, Opera */
//         -webkit-transition: all 0.3s 1s ease-out;
//         transition: all 0.3s 1s ease-out;
//       }
//       /* JavaScript Turned Off */
//       .no-js #loader-wrapper {
//         display: none;
//       }
//       .no-js h1 {
//         color: #222222;
//       }
//       #loader-wrapper .load_title {
//         font-family: 'Open Sans';
//         color: #FFF;
//         font-size: 19px;
//         width: 100%;
//         text-align: center;
//         z-index: 9999999999999;
//         position: absolute;
//         top: 70%;
//         opacity: 1;
//         line-height: 30px;
//       }
//       #loader-wrapper .load_title span {
//         font-weight: normal;
//         font-style: italic;
//         font-size: 13px;
//         color: #FFF;
//         opacity: 0.5;
//       }
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}

</style>
