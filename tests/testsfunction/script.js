function recursion(parameter)
{
console.log('operacija ' + parameter); 
if(parameter < 1000)
{
  recursion(parameter + 1);
}
console.log('o dabar einame atgal');
}
recursion(1);