export function sum(array){
    try {
        return array.reduce((acc, n) => acc + n, 0);
  } catch (error) {
    return NaN;
  }
}

export function product(array){
    try { return array.reduce((acc, n) => acc * n, 1);   
    } catch (error) {  
    return NaN;
  }
}

export function sumOdds(array) {
    try { return array.filter((n) => n & 1).reduce((acc, n) => acc + n, 0);
    } catch (error) {  
    return NaN;
  }
}