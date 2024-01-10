<template>
  <div>
    <form>
      <div class="message">
        <div class="grid-container">
          <div>
            <input
              type="text"
              name="nom"
              :placeholder="isInputFilled(input1) ? '' : 'Nom'"
              id="input1"
              v-model="input1"
              class="form_input_information"
              @focus="addShadow"
              @blur="removeShadow"
            />
          </div>
          <div>
            <input
              class="form_input_information"
              type="text"
              name="Prénom"
              :placeholder="isInputFilled(input2) ? '' : 'Prénom'"
              id="input2"
              v-model="input2"
              @focus="addShadow"
              @blur="removeShadow"
            />
          </div>
        </div>
      </div>
      <div class="message">
        <input
          class="form_input"
          type="email"
          name="email"
          :placeholder="isInputFilled(input3) ? '' : 'E-mail'"
          id="input3"
          v-model="input3"
          @focus="addShadow"
          @blur="removeShadow"
        />
      </div>
      <div class="message">
        <textarea
          :placeholder="isInputFilled(input3) ? '' : ' message:'"
          class="myTextArea"
          id="textarea"
          name="message"
          v-model="textareaContent"
        ></textarea>
      </div>
      <div class="form__button">
        <button class="buttof" libelle="Send" type="submit">
          <Mybutton>Envoyez</Mybutton>
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 20px;
  justify-items: center;
}
.form_input {
  width: 488px;
  height: 44px;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  border: 0.5px solid $b-black;
  border-radius: 5px;
  text-align: justify;
  text-align: start;
  font-family: $okine;
  font-size: 20px;
  background-color: $g-gray2;

  &::placeholder {
    text-align: start;
    font-family: $okine;
    font-size: 20px;
    font-weight: 800;
  }
}
.form_input_information {
  width: 220px;
  height: 44px;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  border: 0.5px solid $b-black;
  border-radius: 5px;
  text-align: justify;
  text-align: start;
  font-family: $okine;
  font-size: 20px;
  background-color: $g-gray2;

  &::placeholder {
    text-align: start;
    font-family: $okine;
    font-size: 20px;
    font-weight: 800;
  }
}

.message {
  display: flex;
  justify-content: center;
  margin: 20px;
}
.myTextArea {
  width: 488px;
  height: 218.161px;
  padding-left: 1.5rem;
  font-family: $okine;
  font-size: 14px;
  font-weight: 500;
  flex-shrink: 0;
  border: 2px solid $b-black;
  border-radius: 10px;
  background-color: $g-gray2;
  &::placeholder {
    text-align: start;
    font-family: $okine;
    font-style: normal;
    font-size: 20px;
    font-weight: 500;
  }
}

.form__button {
  display: flex;
  justify-content: center;
  .buttof {
    border: none;
  }
}

@media (max-width: 425px) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 20px;
    justify-items: center;
  }
  .form_input {
    width: 328px;
    height: 44px;
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    border: 0.5px solid $b-black;
    border-radius: 5px;
    text-align: justify;
    text-align: start;
    font-family: $okine;
    font-size: 20px;
    background-color: $g-gray2;

    &::placeholder {
      text-align: start;
      font-family: $okine;
      font-size: 20px;
      font-weight: 800;
    }
  }
  .form_input_information {
    width: 140px;
    height: 44px;
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    border: 0.5px solid $b-black;
    border-radius: 5px;
    text-align: justify;
    text-align: start;
    font-family: $okine;
    font-size: 20px;
    background-color: $g-gray2;

    &::placeholder {
      text-align: start;
      font-family: $okine;
      font-size: 20px;
      font-weight: 800;
    }
  }

  .message {
    display: flex;
    justify-content: center;
    margin: 20px;
  }
  .myTextArea {
    width: 328px;
    height: 218px;

    font-family: $okine;
    font-size: 14px;
    font-weight: 500;
    flex-shrink: 0;
    border: 2px solid $b-black;
    border-radius: 10px;
    background-color: $g-gray2;
    &::placeholder {
      text-align: start;
      font-family: $okine;
      font-style: normal;
      font-size: 20px;
      font-weight: 500;
    }
  }

  .form__button {
    display: flex;
    justify-content: center;
    .buttof {
      border: none;
    }
  }
}
</style>

<script setup>
import { ref } from "vue";

const selectedOption = ref("option");

const isInputFilled = (input) => {
  return input !== "";
};

const input1 = ref("");
const input2 = ref("");
const input3 = ref("");
const input5 = ref("");
const textareaContent = ref("");
</script>
