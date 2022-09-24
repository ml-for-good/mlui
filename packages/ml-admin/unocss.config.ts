import {
  defineConfig,
  // presetAttributify,
  // presetIcons,
  // presetUno,
  // transformerCompileClass,
  // transformerDirectives,
  // transformerVariantGroup,
  // transformerAttributifyJsx
} from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  shortcuts: [
    { logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180' },
  ],
  // theme: {
  //   fontFamily: {
  //     sans: '\'Inter\', sans-serif',
  //     mono: '\'Fira Code\', monospace',
  //   },
  // },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    // transformerAttributifyJsx()
    // transformerCompileClass(),
    // transformerVariantGroup(),
    // transformerDirectives(),
  ],
})