# WIK-DPS-TP01
web-server typescript

# Initialiser le projet


```
> npm init -y
> npm install typescript --save-dev
> npm install @types/node --save-dev
> npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true
> mkdir src
> echo "console.log('Hello world')" > src/index.ts
> npx tsc
> node build/index.js
Hello world
```

# Installer nodemon 

```
> npm i nodemon
> npm i  --dev nodemon ts-node
```

# Routing

```
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('This is a test web page!');
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
```

```npx nodemon src/index.ts```

## Ajouter une page /ping qui return le Header de ma page

```
app.get('/ping', (req, res) => {
  res.send(req.headers);
})
```

```npx nodemon src/index.ts```

```
{"host":"localhost:3000","cookie":"crisp-client%2Fsession%2F62638816-0a3c-43e5-b555-ded072759c01=session_fee81a7f-099c-4fbf-9736-8e9cef6a14fc; _ga_182Y1CF98D=GS1.1.1665138032.57.0.1665138032.0.0.0; _fbp=fb.0.1663685205215.879121766; _ga=GA1.1.80657525.1662386396; G_ENABLED_IDPS=google; __stripe_mid=2988211a-e043-4ea6-828a-6447634c672ac07ca5","if-none-match":"W/\"2df-nU6WT9SCU2tFVlJ+arcnJ2g1pW4\"","upgrade-insecure-requests":"1","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15","accept-language":"fr-FR,fr;q=0.9","accept-encoding":"gzip, deflate","connection":"keep-alive"}
```

## Avoir une vrai page 404

```
app.get('/*', (req, res) => {
  res.send('Page 404');
})
```

```npx tsc``` <--- build

```node build/index.js```

FINISH !!