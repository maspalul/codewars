// Buatlah sebuah fungsi yang menerima input berupa string yang terdiri dari satu kata atau lebih, dan mengembalikan string yang sama, tetapi dengan semua kata yang memiliki lima huruf atau lebih dibalik (Sama seperti nama dari Kata ini). String yang diberikan hanya akan terdiri dari huruf dan spasi. Spasi akan disertakan hanya ketika lebih dari satu kata hadir.

function spinWords (string){
    // ubah jadi array dulu
    const arr = string.split(" ")
    let result = [] // bikin variabel tampungan

    // lakukan perulangan array
    for(let i = 0; i < arr.length; i++){
        // jika panjang string lebih besar atau sama dengan 5 maka :
        if(arr[i].length >= 5){
            // ubah string jadi array
            let subArr = arr[i].split("")
            // reverse dan join kembali
            let strReverse = subArr.reverse().join('')
            // tambahkan ke array penampungan
            result.push(strReverse)
        } else {
            // selain itu, tambahkan langsung ke array penampungan
            result.push(arr[i])
        }
    }
    return result.join(' ')
}

console.log(spinWords("Hey fellow warriors"))

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"