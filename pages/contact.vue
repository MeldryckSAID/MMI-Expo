<script setup></script>

<template>
  <MyOutro>
    <span class="relative">
      Contact
      <MyIconBis name="Losange" position="topRight" size="medium" />
      <MyIconBis name="LosangeBis" position="bottomLeft" size="small" />
    </span>
  </MyOutro>
  <div class="contact-container">
    <div class="come-on">
      <MyTitle font="arc" el="h2" size="large"
        ><span class="relative">N’hésitez pas !
          <MyIconBis name="TopRight" position="topLeft" size="medium" :rotate="true"/>
        </span></MyTitle
      >
      <p class="text">
        Pour toute requête ou demande remplissez le formulaire ci-dessous.
      </p>
    </div>
    <div class="line"></div>
    <!-- <MyText el="p" font="okine" size="medium">Pour toute requête ou demande remplissez le formulaire ci-dessous.</MyText> -->
    <MyForm />
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  padding-inline: rem(50);
  margin-top: 10%;
  margin-bottom: 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: center;
}
.line {
  width: 4px;
  height: 356px;
  background-color: $b-black;
}
.text {
  font-size: $text2pc;
  font-family: $okine;
  line-height: 120%;
  font-weight: 400;
  max-width: 423px;
  width: 90%;
}

@media (max-width: 1024px) {
  .contact-container {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  .come-on {
    text-align: center;
  }
  .line {
    display: none;
  }
}
</style>
