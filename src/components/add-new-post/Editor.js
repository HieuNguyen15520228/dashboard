import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";
import { ImageDrop } from 'quill-image-drop-module';
import axios from 'axios'
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

class Editor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
    } // You can also pass a Quill Delta here
  }
  toolbarOptions = {
    container: [
      ['bold', 'italic', 'underline'],        // toggled buttons

      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],

      ['clean']                                         // remove formatting button
    ],
    handlers: { image: this.quill_img_handler },
  };
  history = {
    delay: 2000,
    maxStack: 500,
    userOnly: true
  }
  modules = {
    toolbar: this.toolbarOptions,
    history: this.history,
  }
  quill_img_handler = () => {
    let fileInput = this.container.querySelector('input.ql-image[type=file]');

    if (fileInput == null) {
      fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
      fileInput.classList.add('ql-image');
      fileInput.addEventListener('change', () => {
        const files = fileInput.files;
        const range = this.quill.getSelection(true);
        if (!files || !files.length) {
          console.log('No files selected');
          return;
        }

        const formData = new FormData();
        formData.append('image', files[0]);

        this.quill.enable(false);

        axios
          .post('	https://api.imgur.com/3/image', formData, {
            headers: {
              Authorization: 'Client-ID ' + 'ccc9266052a1d7e'
            }
          })
          .then(response => {
            console.log(response)
            this.quill.enable(true);
            this.quill.editor.insertEmbed(range.index, 'image', response.data.data.link);
            this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
            fileInput.value = '';
          })
          .catch(error => {
            console.log('quill image upload failed');
            console.log(error);
            this.quill.enable(true);
          });
      });
      this.container.appendChild(fileInput);
    }
    fileInput.click();
  }
  handleChange = (value) => {
    this.setState({ text: value })
  }
  post = (e) => {
    e.preventDefault();
    console.log(this.state.text)
  }

  render() {
    // Quill.register('modules/imageDrop', ImageDrop);
    const formats = [
      'bold', 'italic', 'underline',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ]
    console.log(this)
    return (
      <Card small className="mb-3">
        <CardBody>
          <Form className="add-new-post">
            <FormInput size="lg" className="mb-3" placeholder="Your Post Title" />
            <ReactQuill
              className="add-new-post__editor mb-1"
              modules={this.modules}
              formats={formats}
              theme='snow' value={this.state.text}
              onChange={this.handleChange} />
            <button onClick={this.post}>dddd</button>
          </Form>
        </CardBody>
      </Card>
    )
  }
}

export default Editor;
