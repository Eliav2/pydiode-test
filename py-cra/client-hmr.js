if (import.meta.hot) {
  import.meta.hot.on("python-update", (data) => {
    console.log(data);
    // perform custom update
    if (data?.ext === "py") {
      // currently, will update on ANY change in a python file
      // console.log("python reload");
      import.meta.hot.invalidate();
    }
  });
}
