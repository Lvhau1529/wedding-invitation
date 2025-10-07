<template>
  <section class="pt-8 bg-img-gray">
    <p class="text-center px-4 text-lg font-medium tracking-wider uppercase">
      Thân mời tới dự lễ cưới thân mật của chúng tôi
    </p>
    <div class="relative mt-8">
      <p class="text-center px-4 text-5xl tracking-wider uppercase mb-12">Văn Hậu</p>
      <p class="text-center px-4 text-5xl tracking-wider uppercase">Anh Ngân</p>
      <div
        class="font-arcittya-begatri absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-50"
      >
        &
      </div>
    </div>

    <div class="flex items-center relative h-[350px] my-8">
      <div class="frame-left absolute top-[50px] left-0 z-1">
        <div class="absolute w-[176px] h-[200px] top-[32px] left-[44px] rotate-[-9deg]">
          <img
            class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="frame left"
          />
        </div>
      </div>
      <div class="frame-right absolute top-0 right-0 z-0">
        <div class="absolute w-[176px] h-[200px] top-[32px] right-[48px] rotate-[9deg]">
          <img
            class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="frame right"
          />
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center mt-8 relative">
      <div class="text-center px-4">
        <p class="text-medium font-semibold uppercase mb-1">nhà trai</p>
        <div class="text-base">
          <p>Ông. Lê Mạnh Tiến</p>
          <p>Bà. Nguyễn Thị Mai Oanh</p>
          <p>TP. Hà Nội</p>
        </div>
      </div>
      <div class="text-center px-4">
        <p class="text-medium font-semibold uppercase mb-1">nhà gái</p>
        <div class="text-base">
          <p>Ông. Nguyễn Tiên Phong</p>
          <p>Bà. Nguyễn Hoài Anh</p>
          <p>TP. Hải Phòng</p>
        </div>
      </div>
      <div class="w-0.5 h-full bg-primary absolute top-1/2 -translate-y-1/2"></div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
  .frame-left,
  .frame-right {
    width: 280px;
    height: 300px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .frame-left {
    background-image: url('@/assets/images/frame-left-invitation.png');
  }
  .frame-right {
    background-image: url('@/assets/images/frame-right-invitation.png');
  }
</style>
