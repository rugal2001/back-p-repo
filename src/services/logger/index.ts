import { Logtail } from "@logtail/node";

export default {
  info: (msg: any, ...props: any[]) => {
    console.log(msg, ...props);
  },
  warn: (msg: any, ...props: any[]) => {
    console.log("🚧🚧🚧🚧🚧🚧🚧🚧");
    console.log(msg, ...props);
    console.log("🚧🚧🚧🚧🚧🚧🚧🚧");
  },
  error: (msg: any, ...props: any[]) => {
    console.log("🚩🚩🚩🚩🚩🚩🚩🚩");
    console.log(msg, ...props);
    console.log("🚩🚩🚩🚩🚩🚩🚩🚩");
  },
  debug: (msg: any, ...props: any[]) => {
    console.log(msg, ...props);
  },
};
