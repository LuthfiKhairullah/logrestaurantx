const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.waitForElement('.status', 15);
  I.see('You don\'t have favorite restaurant', '.status');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('You don\'t have favorite restaurant', '.status');

  I.amOnPage('/');

  I.waitForElement('#restaurant', 15);

  const firstFilm = locate('#restaurant').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);
  I.waitForElement('#likeButton', 15);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('#restaurant', 15);
  const likedFilmTitle = await I.grabTextFrom('#restaurant');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('You don\'t have favorite restaurant', '.status');

  I.amOnPage('/');

  I.waitForElement('#restaurant', 15);

  const firstFilm = locate('#restaurant').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.waitForElement('#likeButton', 15);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('#restaurant', 15);
  const likedFilmTitle = await I.grabTextFrom('#restaurant');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);

  I.click(likedFilmTitle);
  I.waitForElement('#likeButton', 15);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.status', 15);
  I.see('You don\'t have favorite restaurant', '.status');
});

Scenario('add one customer review', async ({ I }) => {
  I.see('You don\'t have favorite restaurant', '.status');

  I.amOnPage('/');

  I.waitForElement('#restaurant', 15);
  I.click(locate('#restaurant').first());

  I.waitForElement('#inputName', 15);
  I.waitForElement('#inputReview', 15);
  I.waitForElement('#inputReview', 15);
  const inputName = 'test';
  const inputReview = 'review';
  I.fillField('#inputName', inputName);
  I.fillField('#inputReview', inputReview);
  I.click('#addReviewButton');
  I.click('#closeButton');

  const lastReviewName = await I.grabTextFrom(locate('.customer-review-name').last());
  const lastReviewReview = await I.grabTextFrom(locate('.customer-review-review').last());

  assert.strictEqual(lastReviewName, inputName);
  assert.strictEqual(lastReviewReview, inputReview);
});
