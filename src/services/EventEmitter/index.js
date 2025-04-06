import { EventEmitter2 } from "eventemitter2";

let emitter = null;
const start = () => {
  emitter = new EventEmitter2();
};

const on = (eventType, eventHandler) => {
  if (emitter) {
    emitter.on(eventType, eventHandler, { async: true });
  }
};

const emit = (eventType, eventData) => {
  if (emitter) {
    emitter.emitAsync(eventType, eventData);
  }
};

export default {
  start,
  on,
  emit,
};
