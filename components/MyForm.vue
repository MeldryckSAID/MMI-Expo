<template>
  <form class="form">
    <label for="nom" class="form__label -nom">
      <input
        type="text"
        name="nom"
        placeholder="Nom"
        class="form__input"
        required
      />
    </label>
    <label for="prenom" class="form__label -prenom">
      <input
        type="text"
        name="prenom"
        placeholder="Prénom"
        class="form__input"
        required
      />
    </label>
    <label for="email" class="form__label -email">
      <input
        type="email"
        name="email"
        placeholder="Email"
        class="form__input"
        required
      />
    </label>
    <textarea
      name="message"
      placeholder="Votre message"
      class="form__input -textarea"
      required
    ></textarea>
    <label for="checkbox" class="form__label -checkbox">
      <input type="checkbox" name="checkbox" class="form__checkbox" required />
      J'accepte la politique de confidentialité. Veuillez accepter la politique
      de confidentialité
    </label>
    <button type="submit" class="form__submit">Envoyer</button>
  </form>
</template>

<style lang="scss">
.form {
  display: grid;
  grid-template-areas: "nom" "prenom" "email " "message" "checkbox" "submit";
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    grid-template-areas: "nom prenom" "email email" "message message" "checkbox checkbox" "submit submit";
  }
  &__label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    &.-nom {
      grid-area: nom;
    }
    &.-prenom {
      grid-area: prenom;
    }
    &.-email {
      grid-area: email;
    }
    &.-checkbox {
      grid-area: checkbox;
      display: flex;
      flex-direction: row;
    }
  }
  &__input {
    padding: 0.5rem;
    border: 1px solid #000;
    background: #e9e9eb;
    border-radius: 5px;
    font-size: 1rem;
  }
  &__input.-textarea {
    grid-area: message;
    resize: none;
    height: 200px;
  }
  &__checkbox {
    width: 20px;
    height: 20px;
  }
  &__submit {
    grid-area: submit;
    place-self: center;
    width: 190px;
    height: 49px;
    padding: 0.5rem;
    border: 1px solid #000;
    background: #000;
    color: #e9e9eb;
    cursor: pointer;
  }
}
</style>
