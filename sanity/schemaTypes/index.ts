import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog'
import { post } from './post'
import { authorType } from './authorType'
import { postType } from './postType'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType,postType,blockContentType,categoryType,blog,post],
}
