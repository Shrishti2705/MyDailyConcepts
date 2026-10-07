const fs=require("fs")

const readStream=fs.createReadStream("input.txt")
const writeStream=fs.createWriteStream("output.txt")


readStream.on("data", (chunk)=>{
    const text=chunk.toString().toUpperCase()
    console.log(text)
    console.log(chunk)

    writeStream.write(text)
})

readStream.on("end",()=>{
    writeStream.end()
    console.log("file processing completed")
})