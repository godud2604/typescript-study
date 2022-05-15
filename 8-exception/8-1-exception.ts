// Java : Exception
// JavaScript: Error
// const array = new Array(10000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if(fileName === 'not exist!') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {
  //
}

function run() {
  const fileName = 'not exist!';

  try {
    console.log(readFile(fileName));
  } catch(e) {
    console.log(`catched !!!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`finally!`);
  }
}

run();