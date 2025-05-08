{
    function concatenateArrays<T>(...arrays: T[][]): T[]{
        // const concatedArray = arrays.reduce((firstArray, secondArray) => firstArray.concat(secondArray))
        //const concatedArray = [...[].concat(...arrays)]
        const concatedArray = arrays.flat()
        return concatedArray
    }

    console.log(concatenateArrays(["a", "b"], ["c"]))      
    console.log(concatenateArrays([1, 2], [3, 4], [5])) 
}