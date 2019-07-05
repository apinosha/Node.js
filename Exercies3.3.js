var fs = require('fs');fs.appendFile('ukinode.txt',
'Sri Lanka targeting students who has completed Advanced Level examinations and don’t have access to university education or any other form of vocational education',
function (err) {
 if (err) throw err;
 console.log('Saved!');
});
