import { Controller } from '@hotwired/stimulus';
import Ckeditor from "./ckeditor";

class default_1 extends Controller {
    connect() {
        let config = this.configValue;
        config['simpleUpload'] = {
            // The URL that the images are uploaded to.
            uploadUrl: this.imageUploadUrlValue,

            // // Enable the XMLHttpRequest.withCredentials property.
            // withCredentials: true,

            // Headers sent along with the XMLHttpRequest to the upload server.
            headers: {
                'X-CSRF-TOKEN': this.imageUploadCsrfTokenValue
            }
        };
        if (this.languageValue) {
            config['language'] = this.languageValue;
            // require('../ckeditor5/build/translations/' + this.languageValue)
        }

        const options = {
            config: config,
            language: this.languageValue,
            imageUploadCsrfToken: this.imageUploadCsrfTokenValue,
            imageUploadUrl: this.imageUploadUrlValue
        };

        this._dispatchEvent('ckeditor:pre-connect', { options });
        const ckeditor = Ckeditor
          .create(this.element, options.config)
          .then(editor => {
              // console.log(Array.from( editor.ui.componentFactory.names() ))
          })
          .catch( error => {
              console.error( error );
          });
        this._dispatchEvent('ckeditor:connect', { ckeditor, options });
    }
    _dispatchEvent(name, payload) {
        this.element.dispatchEvent(new CustomEvent(name, { detail: payload, bubbles: true }));
    }
}
default_1.values = {
    config: Object,
    language: String,
    imageUploadCsrfToken: String,
    imageUploadUrl: String,
};

export { default_1 as default };
