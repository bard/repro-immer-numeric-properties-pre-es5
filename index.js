import 'core-js/features/object/freeze'
import 'core-js/features/object/is-frozen'
import 'core-js/features/function/bind'
import 'core-js/features/promise'
import produce, { setUseProxies } from 'immer'

setUseProxies(false)

const initialState = {
  data: {}
}

const newState = produce(initialState, draft => {
  draft.data['123'] = 'foobar'
})

console.error(JSON.stringify(newState))


