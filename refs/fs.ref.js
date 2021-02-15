const fs=require("fs")
const path=require("path")
/*
fs.mkdir(path.join(__dirname,'notes'),err=>{
    if(err){
        throw new Error(err)
    }
    console.log("Папка была создана")
})

fs.writeFile(path.join(__dirname,'notes','mynotes.txt'),"hello world",
(err)=>{
    if(err){
        throw err
    }
    console.log("файл был создан")
    
})

fs.appendFile(path.join(__dirname,'notes','mynotes.txt'),"from append file",
    (err)=> {
        if(err){
            throw err
        }
        console.log("файл был изменнён")
        fs.readFile(
            path.join(__dirname,'notes','mynotes.txt'),
            'utf-8',
            (err,data)=>{
                if (err) throw err
                console.log(data)
            }
        )
    })

*/
fs.rename(
    path.join(__dirname,'notes','mynotes.txt'),
    path.join(__dirname,'notes','notes.txt'),
    (err)=>{
        if(err){
            throw err
        }
        console.log("файл переименован")
    }
)