Console.WriteLine("Par ou Ímpar?");

float numero = float.Parse(Console.ReadLine());
if (numero % 2 == 0){
    Console.WriteLine("O número é par!!!");
}else{
    Console.WriteLine("O número é ímpar!!!");
}