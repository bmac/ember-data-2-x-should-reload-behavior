import Ember from 'ember';

export default Ember.Mixin.create({
  shouldReloadAll: function(store, snapshotRecordArray) {
    return !snapshotRecordArray.length;
  },

  shouldBackgroundReloadRecord: function(/* store, snapshot */) {
    return true;
  },
});
