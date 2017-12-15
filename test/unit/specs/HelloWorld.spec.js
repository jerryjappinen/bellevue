import { Vue } from '@vue-setup'
import { HelloWorld } from '@components'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.c-hello-world h1').textContent)
    .toEqual('Welcome to Your Vue.js App')
  })
})
