import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    updateFormHide() {
      this.set('updateQuestionForm', false);
    },

    update(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
