import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
    return this.store.findAll('person');
  }, actions: {
    add() {
      let name = this.currentModel.name;
      let birth_date = this.currentModel.birth_date;
      if (!name || !birth_date) {
        return false
      }
      const person = this.store.createRecord('person', {name: name, birth_date: birth_date});
      this.get('ajax').request('http://localhost:3000/people', {
        method: 'POST',
        data: {
          person: {
            name: name,
            birth_date: birth_date,
          }
        }
      });
    }
  }
});
