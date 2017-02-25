import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  birth_date: DS.attr('date'),
  deleted_at: DS.attr('date'),
});