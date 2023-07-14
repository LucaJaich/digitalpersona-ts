# Cosas a tener en consideración:
- Por ahora, es necesario modificar el archivo `node_modules/@digitalpersona/devices/dist/es5.bundles/index.umd.js` para que la linea 1 sea 
    ```javascript
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@digitalpersona/core'), require('../../../../../src/webSdk')) :
    ```
    en vez de
    ```javascript
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@digitalpersona/core'), require('WebSdk')) :
    ```
- Si esto no anda, borrar `node_modules/.cache/` y volver a correr `npm start`.
- Buscar la manera de mejorar esto, ya que no es una solución definitiva.
- Esta solución está basada en [este repo](https://github.com/folajubril/digitalpersona-react-sample) que responde a [este issue](https://github.com/hidglobal/digitalpersona-devices/issues/15) del repo oficial de DigitalPersona. Mi código está modificado para parecerse a la respuesta que dan en el issue.