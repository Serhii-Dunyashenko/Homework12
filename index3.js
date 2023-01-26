    // Counter

    let count = 0

    function up () {
        count = count + 1;
        return count;
        
    }
    //Cycle

    function cyclic (argument1) {
            return function (argument2) {
                return argument1 + argument2 + up();
                
            }
        }

    // "Memmory"
    let number = 1;
    const sum2 = cyclic(sum1(number));
    const sum3 = cyclic(sum2(number));
    const sum4 = cyclic(sum3(number));
    const sum5 = cyclic(sum4(number));

    // Console

    console.log(sum1(number), sum2(number), sum3(number), sum4(number), sum5(number));
