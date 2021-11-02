<template>
  <div id="app">
    <PostContainer author="이상훈" date="2020년 전" msg="국회는 의원의 자격을 심사하며, 의원을 징계할 수 있다. 국민의 자유와 권리는 헌법에 열거되지 아니한 이유로 경시되지 아니한다. 타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은 법률이 정하는 바에 의하여 국가로부터 구조를 받을 수 있다.

연소자의 근로는 특별한 보호를 받는다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 국가의 세입·세출의 결산, 국가 및 법률이 정한 단체의 회계검사와 행정기관 및 공무원의 직무에 관한 감찰을 하기 위하여 대통령 소속하에 감사원을 둔다."/>
  </div>
</template>

<script>
import PostContainer from './components/PostContainer.vue'

export default {
  name: 'App',
  components: {
    PostContainer
  }
}
</script>

<style>

</style>
