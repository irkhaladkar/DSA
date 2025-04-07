function nthCatalan(n) {
	if(n=== 0 || n===1)
  	return 1;
  let sum = 0;
  for(let i=0;i<n;i++) {
  	const temp = nthCatalan(i) * nthCatalan(n-i-1);
    sum = sum + temp;
  }
  return sum;
}