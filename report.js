const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/31174049-849dded1-5568-4279-80e3-d838ad63b09e?access_key=<Your-PMAT-Key>`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', 
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});