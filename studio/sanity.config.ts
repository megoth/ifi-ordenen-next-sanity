import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'Hennes Majestet Keiserpingvinen den Fornemmes orden',

  projectId: 'pvgrwf7h',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    colorInput()
  ],

  schema: {
    types: schemaTypes
  }
})
