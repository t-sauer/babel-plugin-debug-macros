import { DEPRECATED_PARTIALS, DEPRECATED_CONTROLLERS } from '@ember/features';

export let PartialComponentManager;
if (DEPRECATED_PARTIALS) {
  PartialComponentManager = class {
    constructor() {
      this.isDone = true;
    }
  };
}

export let ObjectController;
if (DEPRECATED_CONTROLLERS) {
  ObjectController = class {
    constructor() {
      this.isDoneAsWell = true;
    }
  };
}

export default class TheThingToReplaceControllers {
  constructor() {
    this.isNew = true;
  }
}