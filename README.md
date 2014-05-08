RandomQuote
===========

University course thing.

Single-page-app, which shows random quotes.

Online @ [Heroku](http://random-quote.herokuapp.com/)
===========

```
http://random-quote.herokuapp.com/
```

Install
===========

```
git clone {{ url }}
cd RandomQuote
npm install
npm start
```

API
===========

Get new quote via [iheartquotes.com](http://www.iheartquotes.com/api/v1/random?format=json)
```
/api/v1/quote/random
```

Get old already cached quote
```
/api/v1/quote/random/cached
```
