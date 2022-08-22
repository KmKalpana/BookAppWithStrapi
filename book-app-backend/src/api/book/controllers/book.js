'use strict';

/**
 *  book controller
 */
 // book api

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::book.book');
