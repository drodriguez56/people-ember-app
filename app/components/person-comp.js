import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleBirthday() {
      this.toggleProperty('showBirth_date');
    },
    delete(person) {
      person.deleteRecord();
      person.save();
    }
  }
});
