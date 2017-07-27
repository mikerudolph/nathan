# nathan

Nathan is relevant, short-term, intuitive search

## Usage Examples

```js

var nathan = require('nathan')

var options = {
    relative: '24h',
    mediaType: 'all'
}

nathan.query('search-query', options)
    .then(function(response) {

        console.log('successfull query!', response)

    })
    .catch(function(err) {

        console.error('Nathan failed to retrieve anything', err)

    })

```
