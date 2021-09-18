function func1(s,a,b){

	let aIndex = s.indexOf(a)
	let bIndex = s.indexOf(b)
	
	if( aIndex != -1 && bIndex != -1) return Math.max(aIndex,bIndex)
	if( aIndex != -1 ) return aIndex
	if( bIndex != -1 ) return bIndex
	return -1;

}