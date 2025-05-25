<template>
  <SectionContainer title="Our love story">
    <div
      class="story-container container relative px-16 py-18 bg-white max-w-[85%] rounded-lg mx-auto"
    >
      <div class="story-content mx-auto mb-17 pb-12">
        <h4 class="font-great-vibes font-medium text-3xl text-center mb-3.5">First time we meet</h4>
        <p class="text-md text-center pb-2.5">
          It wasn't a dream. His room, a proper human room although a little too small, lay
          peacefully between its four familiar walls. A collection of textile samples lay spread out
          on the table - Samsa was a travelling salesman - and above it there hung a picture that he
          had recently cut out of an illustrated magazine and which he had recently framed. It
          showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur
          muff that covered the whole of her lower arm towards the viewer. Gregor then turned to
          look out the window at the dull weather. Drops stood on the copper roof of thein the
          middle of the
        </p>
      </div>
      <div class="story-content mx-auto my-17 py-12">
        <h4 class="font-great-vibes font-medium text-3xl text-center mb-3.5">First time we meet</h4>
        <p class="text-md text-center pb-2.5">
          It wasn't a dream. His room, a proper human room although a little too small, lay
          peacefully between its four familiar walls. A collection of textile samples lay spread out
          on the table - Samsa was a travelling salesman - and above it there hung a picture that he
          had recently cut out of an illustrated magazine and which he had recently framed. It
          showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur
          muff that covered the whole of her lower arm towards the viewer. Gregor then turned to
          look out the window at the dull weather. Drops stood on the copper roof of thein the
          middle of the
        </p>
      </div>
      <div class="flex justify-center">
        <img src="https://themegeniuslab.com/html/pretty/assets/images/ring.png" alt="" />
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
  import SectionContainer from '../components/SectionContainer.vue'
</script>

<style lang="scss" scoped>
  .story {
    background-image: url('https://themegeniuslab.com/html/pretty/assets/images/story-bg.png');
    background-repeat: no-repeat;
  }
  .story-container {
    box-shadow: 0px 14px 36.21px 14.79px rgba(177, 154, 86, 0.09);
    .story-content {
      position: relative;
      &::before {
        content: '';
        background-color: #d0d5e9;
        width: 1px;
        height: 45px;
        position: absolute;
        left: 50%;
        bottom: -40px;
        transform: translateX(-50%);
      }
      &::after {
        content: '♡';
        font-size: 24px;
        position: absolute;
        left: calc(50% - 8px);
        bottom: -70px;
      }
    }
  }
</style>
