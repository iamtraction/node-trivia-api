# Trivia API

[![GitHub release](https://img.shields.io/github/release/snkrsnkampa/node-trivia-api.svg?style=flat)](https://github.com/snkrsnkampa/node-trivia-api/releases)
[![license](https://img.shields.io/github/license/snkrsnkampa/node-trivia-api.svg)](LICENSE)

A nodejs module for getting trivia questions in all your fancy projects, in a pretty simple way.

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
