<script setup></script>

<template>
  <MyOutro
    ><span class="relative">
      À Propos
      <MyIconBis name="Losange" position="topLeft" size="medium" />
      <MyIconBis name="LosangeBis" position="bottomRight" size="small" /> </span
  ></MyOutro>
  <div class="about-container">
    <div class="who">
      <MyTitle class="Titlle" font="arc" el="h2" size="large"
        >Qui sommes nous ?
      </MyTitle>
      <p class="text relative">
        <MyIconBis name="Losange" position="topRight" size="medium" />
        <MyIconBis name="LosangeBis" position="bottomLeft" size="small" />
        Étudiants en 2ème et 3ème année de MMI, notre objectif commun est de
        permettre à tout nos étudiants de montrer au grand public leurs talents
        créative ! <br />
        C’est un moyen pour eux de mettre un pied dans le monde l’exposition
        artistique et créative.<br /><br />
        Et pour nous, un moyen de gagner en expérience et plus particulièrement
        dans l’organisation d’évènements à une échelle conséquente. <br /><br />
        On espère de tout coeur que l’évènement vous plaira !
      </p>
    </div>
    <div class="line"></div>
    <div class="equipe">
      <MyTitle class="Titlle" font="arc" el="h2" size="large"
        >L’équipe -
      </MyTitle>
      <p class="text relative">
        <MyIconBis name="LosangeBis" position="topRight" size="small" />
        Notre équipe se décompose en trois domaines distincts. Nous retrouvons
        <span class="name">Ilkay Men</span> ,
        <span class="name">Valentin Tholomier</span>,
        <span class="name">Meldryck Saïd</span>,
        <span class="name">Benoît Fasel</span>, et
        <span class="name">Jules Houbron</span>, pour la partie communication de
        l’évènement.<br /><br />
        La partie design de la charte graphique du site web revient à
        <span class="name">Théo Pasquarelli</span>,
        <span class="name">Ilkay Men</span>,
        <span class="name">Maël Grosjean</span> , et
        <span class="name">Noah Lafourcade</span>. <br /><br />
        Et pour finir le développement du site est géré par nos développeurs
        <span class="name">Meldryck Saïd</span>,
        <span class="name">Quentin Heinis</span>, et
        <span class="name">Yanis Richard</span> .
      </p>
    </div>
  </div>

  <MyEquipe />
</template>

<style lang="scss">
.about-container {
  display: flex;
  flex-direction: column;
  padding-inline: rem(50);
  margin-top: 10%;
  margin-bottom: 10%;
  gap: 20px;
  justify-items: center;
  align-items: center;
  .line {
    width: 4px;
    height: 356px;
    background-color: $b-black;
    display: none;
  }
  .name {
    color: #820410;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .line {
      display: block;
    }
  }
}
</style>
