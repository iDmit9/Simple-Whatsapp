import dev from './dev.js'
import prod from './prod.js'

let keys 

if (process.env.NODE_ENV === 'production') {
   keys = prod
} else {
   keys = dev
}

export default keys