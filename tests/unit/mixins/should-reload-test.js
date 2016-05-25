import Ember from 'ember';
import ShouldReloadMixin from 'ember-data-2-x-should-reload-behavior/mixins/should-reload';
import { module, test } from 'qunit';

module('Unit | Mixin | should reload');

// Replace this with your real tests.
test('it works', function(assert) {
  let ShouldReloadObject = Ember.Object.extend(ShouldReloadMixin);
  let subject = ShouldReloadObject.create();
  assert.ok(subject);
});


test('shouldReloadAll should return true when there are no records in the cache', function(assert) {
  let ShouldReloadObject = Ember.Object.extend(ShouldReloadMixin);
  let subject = ShouldReloadObject.create();
  assert.equal(subject.shouldReloadAll(null, []), true);
});

test('shouldReloadAll should return false when there is at least 1 record in the cache', function(assert) {
  let ShouldReloadObject = Ember.Object.extend(ShouldReloadMixin);
  let subject = ShouldReloadObject.create();
  assert.equal(subject.shouldReloadAll(null, [{}]), false);
});

test('shouldBackgroundReloadRecord should always return true', function(assert) {
  let ShouldReloadObject = Ember.Object.extend(ShouldReloadMixin);
  let subject = ShouldReloadObject.create();
  assert.equal(subject.shouldBackgroundReloadRecord(), true);
});
