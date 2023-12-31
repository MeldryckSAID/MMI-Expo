<script setup></script>

<template>
  <footer>
    <div class="footer__content">
      <div class="section">
        <div class="section1">
          <nuxt-link to="/MyMention" class="link"> Mention Légales </nuxt-link>
          <div class="social">
            <MyIcon name="letter" />
            <MyIcon name="insta" />
          </div>
        </div>
        <div class="section2">
          <MyLogo name="mmi" />
          <p class="foot__text">
            Exercice réalisé dans le cadre d'un exercice pédagogique au
            département MMI de Montbéliard
          </p>
        </div>
        <div class="section3"></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.link {
  color: white;
  text-decoration: none;
}
p {
  color: white;
}
@media (max-width: 425px) {
  .footer__content {
    background-color: black;
    padding: 5px;
    .section1 {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .social {
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
      }
    }
    .section2 {
      text-align: center;
      display: flex;
      flex-direction: column;
    }
  }
}

@media (min-width: 426px) {
  .footer__content {
    background-color: black;
    padding: 5px;
  }
  .section {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;

    .section1 {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      gap: 5px;
      .social {
        display: flex;

        justify-content: center;
        flex-direction: row;
        width: fit-content;
      }
    }

    .section2 {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
    }
  }
}
</style>
