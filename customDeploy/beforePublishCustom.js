var fs = require('fs');

//NEW INDEX.JS WITH react-data-grid
fs.readFile("packages/react-data-grid/index.js", 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var replaceIndex = data.split("'");
  var resultIndex = data.replace(replaceIndex[1], './dist/react-data-grid');
  console.log(resultIndex)

  fs.writeFile("packages/react-data-grid/index.js", resultIndex, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

//CHANGE VERSION

fs.readFile("packages/react-data-grid/package.json", 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var parsedObj = JSON.parse(data);
  var replaceJson = parsedObj.version.split(".");

  var major = parseInt(replaceJson[0], 10)
  var minor = parseInt(replaceJson[1], 10)
  var patch = parseInt(replaceJson[2], 10)
  var version =  parsedObj.version;

  console.log("Current version: " , major + "." + minor +"." + patch)

  var resultJson = data.replace(parsedObj.version,replaceJson[0] + "." + replaceJson[1] + "." + (patch+1)  );

  var parsedObjRes = JSON.parse(resultJson);
  console.log("Next version: " , parsedObjRes.version)

  fs.writeFile("packages/react-data-grid/package.json", resultJson, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

