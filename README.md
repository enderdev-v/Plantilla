# Plantilla BotDiscord 

***Lee esto antes de iniciar***

> la version de discordjs es 13.7.0 para instalarla es
```shell
npm install discord.js@13.7.0
```
> lee cada comentario que tendrá una guia por tu aventura
> Si usas replit Y lo quieres 24/7 utiliza uptimerobot y esto

**index.js**
```js
const keepAlive = require('./server.js'); 
  
 const express = require("express")().get("/", (req,res)=>res.send("bot 24/7")).listen(3000)
```

**Nuevo archivo.js**
```js
const express = require('express') 
 const server = express(); 
   
 server.all('/', (req, res) => { 
     res.send('ok'); 
 }); 
   
 function keepAlive() { 
    server.listen(3000, () => { console.log("si 24/7 simulado" + Date.now()) }); 
 } 
  
 module.exports = keepAlive; 
```

```js
"Gracias :D"
```


**English**

***Read this before you start***

> the discordjs version is 13.7.0 to install it is
```shell
npm install discord.js@13.7.0
```

> reads each comment that will have a guide for your adventure
> If you use replit And you want it 24/7 use uptimerobot and this

**index.js**
```js
const keepAlive = require('./server.js'); 
  
 const express = require("express")().get("/", (req,res)=>res.send("24/7")).listen(3000)
```

**New file.js**
```js
const express = require('express') 
 const server = express(); 
   
 server.all('/', (req, res) => { 
     res.send('ok'); 
 }); 
   
 function keepAlive() { 
    server.listen(3000, () => { console.log("Yes now is 24/7 simulate" + Date.now()) }); 
 } 
  
 module.exports = keepAlive; 
```

```js
"Thank you :D"
```

# Note

**spanish**

*si se llega a apagar en replit es un bug de replit y solo pon  en el shell*

```shell
kill 1
```


**English**

*if bot turn off is a bug for replit solve put in the shell*
```shell
kill 1
```
