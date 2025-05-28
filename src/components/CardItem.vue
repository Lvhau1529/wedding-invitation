<template>
  <div ref="cardContainer">
    <div ref="card" class="card py-7 px-5 rounded-2xl">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { gsap } from 'gsap'

  const cardContainer = ref(null)
  const card = ref(null)
  let bounds
  let mouseX = 0
  let mouseY = 0
  let mouseLeaveDelay

  const handleMouseMove = e => {
    bounds = cardContainer.value.getBoundingClientRect()
    mouseX = e.clientX - bounds.left
    mouseY = e.clientY - bounds.top
    const mouseXPercent = mouseX / bounds.width
    const mouseYPercent = mouseY / bounds.height
    const rotateX = (mouseYPercent - 0.5) * 20
    const rotateY = (mouseXPercent - 0.5) * -20
    gsap.to(card.value, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      duration: 0.5,
      ease: 'power2.out'
    })
  }

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay)
    gsap.to(card.value, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleMouseLeave = () => {
    mouseLeaveDelay = setTimeout(() => {
      gsap.to(card.value, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.7,
        ease: 'power3.out'
      })
    }, 100)
  }

  onMounted(() => {
    const container = cardContainer.value
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
  })

  onUnmounted(() => {
    const container = cardContainer.value
    container.removeEventListener('mousemove', handleMouseMove)
    container.removeEventListener('mouseenter', handleMouseEnter)
    container.removeEventListener('mouseleave', handleMouseLeave)
  })
</script>

<style scoped lang="scss">
  .card {
    background: #38261d40;
    transform-style: preserve-3d;
    will-change: transform;
  }
</style>
