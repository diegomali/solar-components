import { assignByPath } from './lang/assign-by-path';

export interface SerializeFormOptions {
  ignoreDisabled?: boolean;
}

export function serializeForm(form: HTMLFormElement, options: SerializeFormOptions = {}) {
  const obj = {};

  Array.prototype.slice.call(form.querySelectorAll('[name]' + (options.ignoreDisabled ? ':not([disabled])' : '')))
    .forEach(function (field) {
      if (field.name && ['file', 'reset', 'button'].indexOf(field.type) === -1) {
        switch (field.type) {
          case 'select-multiple':
            const options = [];
            Array.prototype.slice.call(field.options).forEach(function (option) {
              if (option.selected) options.push(option.value);
            });
            assignByPath(obj, field.name, options);
            break;

          case 'checkbox':
          case 'radio':
            if (field.checked) assignByPath(obj, field.name, true);
            break;

          default:
            if (field.value) assignByPath(obj, field.name, field.value);
            break
        }
      }
    });

  return obj;
}

