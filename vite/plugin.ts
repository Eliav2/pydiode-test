import { Plugin } from "vite";

export const pythonPlugin = () => {
  console.log("my plugin!");

  return {
    name: "my-plugin", // required, will show up in warnings and errors
    handleHotUpdate: ({ server, file, modules }) => {
        // console.log("file update", file, modules);
      const ext = file.split(".").pop();
      server.ws.send({
        type: "custom",
        event: "python-update",
        data: { file, ext },
      });
      return modules;
    },
  } as Plugin;
};
