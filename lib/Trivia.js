/**
 * @file Trivia API
 * @author Sankarsan Kampa
 * @license MIT
 */

const request = require('got');

const BASE_URL = {
  API: 'https://opentdb.com/api.php',
  CATEGORIES: 'https://opentdb.com/api_category.php'
};

/**
 * @class Trivia
 */
class Trivia {
  /**
   * @constructor
   * @param {Object} [options] the options for Trivia API
   * @param {String} [options.encoding] the encoding format of the result, either `urlLegacy`, `url3986` and `base64`.
   * @example
   * const Trivia = require('trivia-api')
   * const trivia = new Trivia({ encoding: 'url3986' });
   */
  constructor (options) {
    if (options) {
      let encodings = [ 'urlLegacy', 'url3986', 'base64' ];
      if (options.encoding && encodings.includes(options.encoding)) {
        this.encoding = options.encoding;
      }
    }
    this.API_URL = BASE_URL['API'];
    this.CATEGORIES_URL = BASE_URL['CATEGORIES'];
  }

  /**
   * Returs the available categories of the trivia questions.
   * @method getCategories
   * @returns {Promise<Object>} Resolves available trivia categories and their IDs
   * @example
   * trivia.getCategories()
   *   .then(console.log)
   *   .catch(console.error);
   */
  getCategories() {
    return new Promise((resolve, reject) => {
      request(this.CATEGORIES_URL, { json: true }).then(response => {
        resolve(response.body);
      }).catch(e => reject(e));
    });
  }

  /**
   * Returs a trivia question from the given options.
   * @method getQuestions
   * @param {Object} [options] The options for retriving the question
   * @param {String} [options.amount = 1] The amount of question(s) to be retrieved
   * @param {String} [options.difficulty] The difficulty of question(s) to be retrieved, either `easy`, `medium` or `hard`
   * @param {Number} [options.category] The category ID from which the question(s) should be retrieved
   * @param {String} [options.type] The type of question(s) to be retrieved, either `multiple` or `boolean`
   * @returns {Promise<Object>} Resolves available trivia questions
   * @example
   * let options = {
   *   type: 'boolean',
   *   amount: 10,
   *   difficulty: 'hard'
   * };
   * trivia.getQuestions(options)
   *   .then(questions => console.log(questions))
   *   .catch(console.error);
   */
  getQuestions(options) {
    if (!options) {
      options = { amount: 1 };
    }

    // Validates and assigns the amount of questions to retrieved
    if (!options.amount || typeof options.amount !== 'number' || options.amount > 50) {
      options.amount = 1;
    }

    // Request URL
    let url = `${this.API_URL}?amount=${options.amount}`;

    // Validates and appends difficulty to the request URL
    if (options.difficulty && typeof options.difficulty === 'string') {
      options.difficulty = options.difficulty.toLowerCase();

      let difficulties = [ 'easy', 'medium', 'hard' ];
      if (difficulties.includes(options.difficulty)) {
        url = `${url}&difficulty=${options.difficulty}`;
      }
    }

    // Validates and appends category to the request URL
    if (options.category && typeof options.category === 'number') {
      url = `${url}&category=${options.category}`;
    }

    // Validates and appends type to the request URL
    if (options.type && typeof options.type === 'string') {
      options.type = options.type.toLowerCase();

      let types = [ 'boolean', 'multiple' ];
      if (types.includes(options.type)) {
        url = `${url}&type=${options.type}`;
      }
    }

    return new Promise((resolve, reject) => {
      request(url, { json: true }).then(response => {
        resolve(response.body);
      }).catch(e => reject(e));
    });
  }
}

module.exports = Trivia;
