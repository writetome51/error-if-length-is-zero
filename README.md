## errorIfNotStringLongerThanZero(arg): void

## Examples
```
errorIfNotStringLongerThanZero('h'); // no error.

errorIfNotStringLongerThanZero('');
// Error: "Input must be string longer than zero characters"

errorIfNotStringLongerThanZero(false);
// Error: "Input must be string"
```

## Installation
`npm i  error-if-not-string-longer-than-zero`

## Loading
```ts
// if using TypeScript:
import { errorIfNotStringLongerThanZero } 
    from 'error-if-not-string-longer-than-zero';
// if using ES5 JavaScript:
var errorIfNotStringLongerThanZero = 
    require('error-if-not-string-longer-than-zero')
    .errorIfNotStringLongerThanZero;
```
