# Fernando Gomez website
https://fernandogomez.dev

## Scripts
### Run Serve
```
npm run serve
```
### Build to production
```
npm run build
```

### Deploy to production
```
chmod +x deploy.sh
./deploy.sh
cd ../fagomezch.github.io
git pull
git push
git checkout gh-pages
git pull --allow-unrelated-histories
git rebase master
git push origin gh-pages
git checkout master
git merge gh-pages
git push
```
### Unit tests
```
npm run test:unit
```
### Lint
```
npm run lint
```
