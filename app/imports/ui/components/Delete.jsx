import React from 'react';
import { Contacts } from '/imports/api/contact/contact';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class Delete extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.deleteCallback = this.deleteCallback().bind(this);
    this.formRef = null;
  }

  onClick(){
    Contacts.remove(this.id, this.deleteCallback)
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
      this.formRef.reset();
    }
  }
}

export default Delete;
