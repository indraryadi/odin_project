const repeatString = (word, count) =>{
    let res = ''
    for(let i = 0 ; i < count; i++){
        res += word
    }
    return res 
}

const reverseString = (word) =>{
    let res = ''
    for(let i = word.length -1 ; i >= 0 ; i--){
        res += word[i]
    }

    return res
}

const removeFromArray = (data, find)=>{
    const res = data.filter(d=> d !== find)
    return res
}

const sumAll = (start, end) =>{
    let res = 0
    for(let i=start;i<=end;i++){
        res += i
    }
    return res
}

const leapYear = (year)=>{
    if(year % 4 == 0 && (year % 400 == 0 || year % 100 !== 0)){
        return true
    }else{
        return false
    }
}

const getTitle = (books) => {
    return books.map(x => x) 
}

const data = [
    {
        title: 'book1',
        author: 'name'
    },{
        title: 'book2',
        author: 'name'
    },{
        title: 'book3',
        author: 'name'
    },
]
console.log(getTitle(data))



export {
    repeatString
}