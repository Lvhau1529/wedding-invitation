<template>
  <div class="hero relative">
    <div class="bg-overlay" />
    <div class="title-wrap">
      <span class="title-line top font-prata">Hậu</span>
      <span class="title-amp font-arcittya-begatri">&</span>
      <span class="title-line bottom font-prata">Ngân</span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .hero {
    height: min(80vh, 900px);
    min-height: 420px;
    position: relative;
    background-image: url('@/assets/images/banner.webp');
    background-size: cover;
    background-position: 70% 80%;
    background-repeat: no-repeat;
    content-visibility: auto; /* avoid rendering offscreen hero content */
    contain-intrinsic-size: 900px 600px; /* reserve size to prevent layout jank */
  }

  /* gradient dưới giúp chữ nổi bật hơn */
  .bg-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 55%);
  }

  /* Khối chữ: đặt ở góc trái dưới theo % để luôn tương đối */
  .title-wrap {
    position: absolute;
    left: 4%;
    bottom: 4%;
    color: #fff;
    text-transform: uppercase;
    line-height: 0.88;
    display: grid;
    grid-auto-rows: max-content;
    align-items: end;
    /* nền mờ cục bộ tinh tế để tách nền, có fallback */
  }
  // .title-wrap::before {
  //   content: '';
  //   position: absolute;
  //   inset: -0.6rem -0.9rem -0.4rem -0.9rem;
  //   z-index: -1;
  //   background: rgba(0, 0, 0, 0.22);
  //   border-radius: 6px;
  // }
  // @supports (backdrop-filter: blur(2px)) {
  //   .title-wrap::before {
  //     background: transparent;
  //     backdrop-filter: blur(3px) brightness(0.92);
  //     -webkit-backdrop-filter: blur(3px) brightness(0.92);
  //   }
  // }

  /* Dòng trên và dưới dùng clamp để co giãn hợp lý theo viewport */
  // .title-line {
  //   letter-spacing: clamp(0.02em, 0.35vw, 0.12em);
  //   text-shadow:
  //     0 2px 6px rgba(0, 0, 0, 0.35),
  //     0 0 1px rgba(0, 0, 0, 0.25);
  //   -webkit-text-stroke: 0.4px rgba(0, 0, 0, 0.25);
  //   paint-order: stroke fill;
  // }

  /* Cỡ chữ responsive:
   - min px  - cỡ nhỏ nhất khi màn hình nhỏ
   - preferred theo vw
   - max px  - giới hạn trên để không quá to
*/
  .title-line.top {
    font-size: clamp(100px, 6.5vw, 115px);
  }
  .title-amp {
    display: inline-block;
    font-size: clamp(100px, 6.5vw, 115px);
    line-height: 0.9;
    margin: clamp(-6px, -0.6vw, -12px) 0 clamp(-2px, -0.2vw, -4px) clamp(2px, 0.4vw, 8px);
    text-shadow:
      0 2px 6px rgba(0, 0, 0, 0.35),
      0 0 1px rgba(0, 0, 0, 0.25);
  }
  .title-line.bottom {
    font-size: clamp(100px, 6.5vw, 115px);
    /* đẩy nhẹ sang phải để tạo bố cục lệch như mẫu */
    transform: translateX(clamp(30px, 1.5vw, 50px));
  }

  /* Khoảng cách dọc giữa các hàng cũng responsive */
  .title-line.top {
    margin-bottom: clamp(2px, 0.6vw, 10px);
  }
  .title-amp {
    margin-bottom: clamp(0px, 0.2vw, 4px);
  }

  /* Breakpoints tinh chỉnh thêm khi màn hình rất lớn */
  @media (min-width: 1280px) {
    .title-wrap {
      left: 5%;
      bottom: 5%;
    }
    .title-line.bottom {
      transform: translateX(24px);
    }
  }
</style>
