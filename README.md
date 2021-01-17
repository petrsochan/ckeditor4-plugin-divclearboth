# CKEditor4 plugin divclearboth
CKEditor plugin allowing to insert a div element with clearboth styling and to show these elements in editor.

## Installation

1. Download and copy into /plugins folder.
2. Into config.js add
```js
config.extraPlugins = 'divclearboth';
config.extraAllowedContent = 'div style;*id';
config.fillEmptyBlocks = false;
```