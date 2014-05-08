RandomQuote
===========

University course thing.

Here will be single-page-app that's going to use public APIs for quotes, and maybe locals also. It will be awesome, and it will use many cool things that AngularJS offers.

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
