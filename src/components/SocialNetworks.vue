<template>
  <ul class="social__networks">
    <li>
      <a href="https://github.com/fagomezch" target="_blank" rel="noopener">
        <span class="icon icon-github"></span>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/fagomezch/" target="_blank" rel="noopener">
        <span class="icon icon-linkedin"></span>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/fagomezch" target="_blank" rel="noopener">
        <span class="icon icon-twitter"></span>
      </a>
    </li>
    <li>
      <a href="mailto:fagomezch@gmail.com" rel="noopener">
        <span class="icon icon-gmail"></span>
      </a>
    </li>
    <li class="social__networks__download-cv">
      <a
        class="btn btn-primary"
        href="https://github.com/fagomezch/fagomezch.github.io/raw/master/CV-Fernando_Gomez-Web_Engineer.pdf"
        rel="noopener"
        target="_blank"
      >
        Download CV
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocialNetworks',
};
</script>

<style lang="scss">
   @import '../styles/components/SocialNetworks.scss';
</style>
