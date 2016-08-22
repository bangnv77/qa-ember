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
      var tagArray = this.get('tags').split(',');
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        tags: tagArray
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
