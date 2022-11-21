// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import home from './home';
import HomeCards from './HomeCards';
import localities from './localities';
import collections from './collections';
import CollectionCards from './CollectionCards';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    home,HomeCards, localities, collections, CollectionCards
  ]),
})
