//1 sum of elements rekursion
function rek1(arr, sum = 0, i = 0) {
    if (i < arr.length) {
        sum += arr[i];
        return rek1(arr, sum, i + 1);
    }

    return sum;
}
