//https://app.codility.com/demo/results/trainingTEESM3-AUT/
function solution(A, K) {
    if( K > A.length ) K = Math.ceil(K % A.length);
    let tempNumber = 0;
    
    for (i = 0; i < K; i++) {
        tempNumber = A.pop();
        A.unshift(tempNumber);
    }
    
    return A;
}