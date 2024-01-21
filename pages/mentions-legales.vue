<script setup>
useSeoMeta({
  title: "MMI Exposition | Mentions Légales",
  ogTitle: "MMI Exposition | Mentions Légales",
  description: "Mentions légales du site MMI Exposition",
  ogDescription: "Mentions légales du site MMI Exposition",
  ogImage: "/favicon.png",
});
</script>

<template>
  <MyOutro>Mention Légales</MyOutro>
  <div class="mention-container">
    <!-- Éditeur du Site : -->
    <div>
      <MyTitle el="h4" size="small">Éditeur du Site :</MyTitle>
      <p class="text">
        MMI Expo <br />
        4 Place Lucien Tharradin 25200 Montbéliard <br />[Téléphone de
        contact]<br />
        [Adresse e-mail de contact]<br />
        [Numéro d'immatriculation de l'entreprise/association, le cas échéant]
      </p>
    </div>

    <!-- Directeur de la publication : -->
    <div>
      <MyTitle el="h4" size="small"> Directeur de la publication :</MyTitle>
      <p class="text">
        [Nom du directeur de la publication] <br />
        [Coordonnées du directeur de la publication]
      </p>
    </div>
    <!-- Hébergeur du Site : -->
    <div>
      <MyTitle el="h4" size="small"> Hébergeur du Site :</MyTitle>
      <p class="text">
        Vercel Inc. <br />
        440 N Barranca Ave #4133 <br />
        Covina, CA 91723 <br />
        privacy@vercel.com
      </p>
    </div>
    <!-- Propriété Intellectuelle : -->
    <div>
      <MyTitle el="h4" size="small"> Propriété Intellectuelle :</MyTitle>
      <p class="text">
        Le contenu de ce site web est protégé par les lois sur la propriété
        intellectuelle. Tous les droits sont réservés aux artistes et créateurs
        mentionnés sur le site. Toute reproduction ou utilisation non autorisée
        du contenu est strictement interdite.
      </p>
    </div>
    <!-- Collecte de Données Personnelles :-->
    <div>
      <MyTitle el="h4" size="small">
        Collecte de Données Personnelles :
      </MyTitle>
      <p class="text">
        Nous collectons des données personnelles uniquement dans le cadre de
        l'organisation de l'exposition et dans le respect des lois en vigueur.
        Les utilisateurs peuvent demander la suppression de leurs données en
        nous contactant à [adresse e-mail de contact].
      </p>
    </div>
    <!--Cookies :  -->
    <div>
      <MyTitle el="h4" size="small"> Cookies :</MyTitle>
      <p class="text">
        Ce site utilise des cookies pour améliorer l'expérience de
        l'utilisateur. En naviguant sur ce site, vous acceptez l'utilisation de
        cookies conformément à notre politique de confidentialité.
      </p>
    </div>
    <!--Liens Externes :  -->
    <div>
      <MyTitle el="h4" size="small"> Liens Externes :</MyTitle>
      <p class="text">
        Ce site peut contenir des liens vers des sites externes. Nous déclinons
        toute responsabilité quant au contenu de ces sites et aux pratiques de
        confidentialité qui y sont associées.
      </p>
    </div>
    <!--Droit Applicable et Juridiction :  -->
    <div>
      <MyTitle el="h4" size="small"> Droit Applicable et Juridiction :</MyTitle>
      <p class="text">
        Le présent site est soumis au droit français. Tout litige découlant de
        l'utilisation de ce site sera soumis à la juridiction compétente,
        conformément aux dispositions légales en vigueur, notamment devant le
        Tribunal de Grande Instance ou Tribunal de Commerce de Belfort.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mention-container {
  padding: 2%;
  .text {
    font-size: $text1pc;
    font-family: $okine;
  }
}
</style>
