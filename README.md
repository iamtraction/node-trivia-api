# Trivia API

[![NPM Version](https://img.shields.io/npm/v/trivia-api.svg?style=flat)](https://www.npmjs.com/package/trivia-api)
[![NPM Downloads](https://img.shields.io/npm/dt/trivia-api.svg?style=flat)](https://www.npmjs.com/package/trivia-api)
[![Dependencies](https://david-dm.org/k3rn31p4nic/node-trivia-api.svg)](https://david-dm.org/k3rn31p4nic/node-trivia-api)
[![Known Vulnerabilities](https://snyk.io/test/github/k3rn31p4nic/node-trivia-api/badge.svg)](https://snyk.io/test/github/k3rn31p4nic/node-trivia-api)
[![license](https://img.shields.io/github/license/k3rn31p4nic/node-trivia-api.svg)](LICENSE)
[![PayPal](https://img.shields.io/badge/donate-PayPal-003086.svg)](https://paypal.me/snkrsnkampa)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/k3rn31p4nic)  

A Node.JS module for getting trivia questions in all your fancy projects, in a pretty simple way.

## Classes

<dl>
<dt><a href="#Trivia">Trivia</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#getCategories">getCategories()</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Returs the available categories of the trivia questions.</p>
</dd>
<dt><a href="#getQuestions">getQuestions([options])</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Returs a trivia question from the given options.</p>
</dd>
</dl>

<a name="Trivia"></a>

## Trivia
**Kind**: global class  
<a name="new_Trivia_new"></a>

### new Trivia([options])

| Param | Type | Optional | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | True | The options for Trivia API |
| [options.encoding] | <code>String</code> | True | The encoding format of the result, either `urlLegacy`, `url3986` and `base64`. |

**Example**  
```js
const Trivia = require('trivia-api')
const trivia = new Trivia({ encoding: 'url3986' });
```
<a name="getCategories"></a>

## getCategories() ⇒ <code>Promise.&lt;Object&gt;</code>
Returs the available categories of the trivia questions.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolves available trivia categories and their IDs  
**Example**  
```js
trivia.getCategories()
  .then(console.log)
  .catch(console.error);
```
<a name="getQuestions"></a>

## getQuestions([options]) ⇒ <code>Promise.&lt;Object&gt;</code>
Returs a trivia question from the given options.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolves available trivia questions  

| Param | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| [options] | <code>Object</code> | True |  | The options for retrieving the question |
| [options.amount] | <code>String</code> | True | <code>1</code> | The amount of question(s) to be retrieved |
| [options.difficulty] | <code>String</code> | True |  | The difficulty of question(s) to be retrieved, either `easy`, `medium` or `hard` |
| [options.category] | <code>Number</code> | True |  | The category ID from which the question(s) should be retrieved |
| [options.type] | <code>String</code> | True |  | The type of question(s) to be retrieved, either `multiple` or `boolean` |

**Example**  
```js
let options = {
  type: 'boolean',
  amount: 10,
  difficulty: 'hard'
};
trivia.getQuestions(options)
  .then(questions => console.log(questions))
  .catch(console.error);
```

> If you liked this project you can **⭐ Star** it on
> [GitHub](https://github.com/k3rn31p4nic/node-trivia-api) and/or
> [send a thank you note to me](https://saythanks.io/to/k3rn31p4nic).  
