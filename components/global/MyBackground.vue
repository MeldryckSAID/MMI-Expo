<template>
  <div class="background">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<style lang="scss" setup>
@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}

.background {
  position: fixed;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: auto;
  top: 0;
  left: 0;
  background: #f6f4f4;
  overflow: hidden;
  z-index: -20;
}

.background span {
  width: 4vmin;
  height: 1.5vmin;
  border-radius: 5vmin;
  backface-visibility: hidden;
  position: fixed;
  animation: move;
  animation-duration: 50;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.background span:nth-child(0) {
  color: #e9e9eb;
  top: 44%;
  left: 39%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -11vw -18vh;
  box-shadow: -10vmin 0 1.989338501520045vmin currentColor;
}
.background span:nth-child(1) {
  color: #e9e9eb;
  top: 46%;
  left: 89%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -15vw -6vh;
  box-shadow: -10vmin 0 1.9659997105948737vmin currentColor;
}
.background span:nth-child(2) {
  color: #c8c8c9;
  top: 47%;
  left: 80%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 11vw 11vh;
  box-shadow: -10vmin 0 2.0906730701677745vmin currentColor;
}
.background span:nth-child(3) {
  color: #c8c8c9;
  top: 16%;
  left: 67%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -23vw -16vh;
  box-shadow: -10vmin 0 1.648773944486351vmin currentColor;
}
.background span:nth-child(4) {
  color: #e9e9eb;
  top: 37%;
  left: 3%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -18vw 17vh;
  box-shadow: -10vmin 0 1.7108761670159642vmin currentColor;
}
.background span:nth-child(5) {
  color: #e9e9eb;
  top: 54%;
  left: 68%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -14vw 22vh;
  box-shadow: 10vmin 0 1.6815336592018593vmin currentColor;
}
.background span:nth-child(6) {
  color: #e9e9eb;
  top: 58%;
  left: 82%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -8vw 11vh;
  box-shadow: 10vmin 0 1.6839366601090207vmin currentColor;
}
.background span:nth-child(7) {
  color: #c8c8c9;
  top: 13%;
  left: 94%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -6vw -12vh;
  box-shadow: 10vmin 0 1.657851938208904vmin currentColor;
}
.background span:nth-child(8) {
  color: #c8c8c9;
  top: 63%;
  left: 29%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 14vw -6vh;
  box-shadow: 10vmin 0 1.3267316260491222vmin currentColor;
}
.background span:nth-child(9) {
  color: #e9e9eb;
  top: 24%;
  left: 17%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 10vw -1vh;
  box-shadow: 10vmin 0 1.4289469668395667vmin currentColor;
}
.background span:nth-child(10) {
  color: #c8c8c9;
  top: 52%;
  left: 64%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 25vw 21vh;
  box-shadow: -10vmin 0 2.1268097143517877vmin currentColor;
}
.background span:nth-child(11) {
  color: #c8c8c9;
  top: 63%;
  left: 11%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 20vw -17vh;
  box-shadow: -10vmin 0 1.456182717472426vmin currentColor;
}
.background span:nth-child(12) {
  color: #c8c8c9;
  top: 62%;
  left: 36%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 14vw -19vh;
  box-shadow: -10vmin 0 2.1476727994320437vmin currentColor;
}
.background span:nth-child(13) {
  color: #e9e9eb;
  top: 40%;
  left: 29%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 8vw -6vh;
  box-shadow: -10vmin 0 2.039544610770719vmin currentColor;
}
.background span:nth-child(14) {
  color: #e9e9eb;
  top: 80%;
  left: 2%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -9vw 21vh;
  box-shadow: 10vmin 0 1.3474884925329669vmin currentColor;
}
.background span:nth-child(15) {
  color: #e9e9eb;
  top: 13%;
  left: 60%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 21vw -23vh;
  box-shadow: 10vmin 0 1.493834832187935vmin currentColor;
}
.background span:nth-child(16) {
  color: #e9e9eb;
  top: 14%;
  left: 3%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 18vw -13vh;
  box-shadow: 10vmin 0 1.2802156069915893vmin currentColor;
}
.background span:nth-child(17) {
  color: #e9e9eb;
  top: 54%;
  left: 55%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 9vw -24vh;
  box-shadow: 10vmin 0 1.471352406941147vmin currentColor;
}
.background span:nth-child(18) {
  color: #e9e9eb;
  top: 25%;
  left: 76%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -16vw -10vh;
  box-shadow: 10vmin 0 1.9582646889160673vmin currentColor;
}
.background span:nth-child(19) {
  color: #c8c8c9;
  top: 79%;
  left: 65%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 14vw -19vh;
  box-shadow: -10vmin 0 2.1532789753688637vmin currentColor;
}
.background span:nth-child(20) {
  color: #c8c8c9;
  top: 1%;
  left: 87%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 19vw 6vh;
  box-shadow: 10vmin 0 2.1553424152135507vmin currentColor;
}
.background span:nth-child(21) {
  color: #c8c8c9;
  top: 33%;
  left: 2%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -1vw 18vh;
  box-shadow: 10vmin 0 2.2475963071680436vmin currentColor;
}
.background span:nth-child(22) {
  color: #e9e9eb;
  top: 18%;
  left: 70%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 3vw 15vh;
  box-shadow: 10vmin 0 1.3344740081210031vmin currentColor;
}
.background span:nth-child(23) {
  color: #e9e9eb;
  top: 43%;
  left: 42%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 20vw 24vh;
  box-shadow: -10vmin 0 2.00371049179774vmin currentColor;
}
.background span:nth-child(24) {
  color: #c8c8c9;
  top: 9%;
  left: 82%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -20vw -22vh;
  box-shadow: 10vmin 0 1.7752755377470617vmin currentColor;
}
.background span:nth-child(25) {
  color: #c8c8c9;
  top: 58%;
  left: 21%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -3vw -11vh;
  box-shadow: -10vmin 0 1.7716931917398746vmin currentColor;
}
.background span:nth-child(26) {
  color: #e9e9eb;
  top: 64%;
  left: 18%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -5vw 3vh;
  box-shadow: -10vmin 0 1.6231850034420388vmin currentColor;
}
.background span:nth-child(27) {
  color: #c8c8c9;
  top: 5%;
  left: 80%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 11vw -2vh;
  box-shadow: 10vmin 0 2.2148524781276446vmin currentColor;
}
.background span:nth-child(28) {
  color: #c8c8c9;
  top: 1%;
  left: 83%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 25vw 11vh;
  box-shadow: -10vmin 0 1.9744741849962242vmin currentColor;
}
.background span:nth-child(29) {
  color: #c8c8c9;
  top: 69%;
  left: 90%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -24vw 1vh;
  box-shadow: 10vmin 0 1.4138781627477133vmin currentColor;
}
.background span:nth-child(30) {
  color: #e9e9eb;
  top: 38%;
  left: 50%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -7vw 25vh;
  box-shadow: -10vmin 0 1.4416889655764082vmin currentColor;
}
.background span:nth-child(31) {
  color: #e9e9eb;
  top: 30%;
  left: 64%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -16vw 7vh;
  box-shadow: 10vmin 0 2.105565467663496vmin currentColor;
}
.background span:nth-child(32) {
  color: #e9e9eb;
  top: 78%;
  left: 100%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 9vw 16vh;
  box-shadow: -10vmin 0 1.7293108707102736vmin currentColor;
}
.background span:nth-child(33) {
  color: #c8c8c9;
  top: 95%;
  left: 12%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 25vw -5vh;
  box-shadow: -10vmin 0 1.4940558251934661vmin currentColor;
}
.background span:nth-child(34) {
  color: #e9e9eb;
  top: 22%;
  left: 57%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 23vw 19vh;
  box-shadow: 10vmin 0 2.0834260902162507vmin currentColor;
}
.background span:nth-child(35) {
  color: #c8c8c9;
  top: 83%;
  left: 96%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 5vw 18vh;
  box-shadow: -10vmin 0 1.3762245698778632vmin currentColor;
}
.background span:nth-child(36) {
  color: #e9e9eb;
  top: 77%;
  left: 84%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 20vw 25vh;
  box-shadow: -10vmin 0 2.208546351866105vmin currentColor;
}
.background span:nth-child(37) {
  color: #e9e9eb;
  top: 28%;
  left: 39%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: 8vw 23vh;
  box-shadow: 10vmin 0 1.6113587668310776vmin currentColor;
}
.background span:nth-child(38) {
  color: #c8c8c9;
  top: 1%;
  left: 23%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -16vw -5vh;
  box-shadow: 10vmin 0 2.0491947545180755vmin currentColor;
}
.background span:nth-child(39) {
  color: #c8c8c9;
  top: 4%;
  left: 4%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -23vw -22vh;
  box-shadow: -10vmin 0 1.941843359692559vmin currentColor;
}
.background span:nth-child(40) {
  color: #c8c8c9;
  top: 19%;
  left: 12%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -2vw -7vh;
  box-shadow: -10vmin 0 1.3284855144165744vmin currentColor;
}
.background span:nth-child(41) {
  color: #e9e9eb;
  top: 78%;
  left: 2%;
  animation-duration: 6s;
  animation-delay: -1s;
  transform-origin: -1vw -23vh;
  box-shadow: 10vmin 0 1.7561938695303814vmin currentColor;
}
</style>
