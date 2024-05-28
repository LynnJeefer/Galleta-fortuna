const ramdomArr=(arr)=> {
   //numero aleatorio de enteri entre el 0 al tamano del numero de elementos del arreglo
  const index = Math.floor(Math.random()*arr.length)
  return arr[index]
}

export default ramdomArr;