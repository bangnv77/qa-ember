import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    questionFormHide() {
      this.set('addNewQuestion', false);
    },

    newQuestionSave1() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('sentFromNewQuestionComponent', params);
      this.set('content', "");
      this.set('author', "");
    }
  }
});
