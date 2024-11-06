{
    function filterEvenNumber( nums: number[]): number[] {
            return nums.filter(num => num % 2 ==0)
    }

    console.log(filterEvenNumber([1,2 , 3,3 ,4 , 5, 5,6 ]));
}