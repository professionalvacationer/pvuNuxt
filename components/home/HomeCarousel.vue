<template>
  <div id="HomeCarousel" class="pa-0 ma-0">
    <!-- START OF CAROUSEL!!!!!!!!!! -->
    <!-- START OF CAROUSEL!!!!!!!!!! -->
    <!-- START OF CAROUSEL!!!!!!!!!! -->
    <v-carousel
      class="hidden-xs pa-0 ma-0"
      hide-delimiters
      cycle
      height="350px"
    >
      <v-carousel-item v-for="(image, i) in images" :key="i" :src="image.src">
        <v-row class="fill-height ma-0" align="center" justify="center">
          <div class="display-3">{{ image.text }}</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeCarousel',

  data: () => {
    return {
      images: [
        {
          src: require('~/assets/beachoffice.png'),
          text: 'Where will you go?',
        },
        {
          src: require('~/assets/elNidoTop1.png'),
          text: 'What will you find?',
        },
        {
          src: require('~/assets/jumppic2.png'),
          text: 'Who will you meet?',
        },
      ],
    }
  },
}
</script>
