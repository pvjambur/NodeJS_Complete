const {readFile,writeFile} = require('fs');
//we need a call back for the above asynchronous method

readFile('./content/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if  (err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the reuslt: ${first}, ${second}`
            ,(err,result)=>{
                if (err){
                    console.log(err);
                    return;
                }
                console.log(result)
            }
        )
    })
})