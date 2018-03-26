function singleThread(){
  process.argv[2] = "Arg"

  console.log("pid............... "+process.pid);
  console.log("title............. "+process.title);
  console.log("directory node.... "+process.execPath);
  console.log("directory actual.. "+process.cwd());
  console.log("version node...... "+process.version);
  console.log("dependency........ "+process.versions);
  console.log("platform.......... "+process.platform);
  console.log("architecture...... "+process.arch);
  console.log("time process...... "+process.uptime());
  console.log("args.............. "+process.argv);

}

singleThread()
