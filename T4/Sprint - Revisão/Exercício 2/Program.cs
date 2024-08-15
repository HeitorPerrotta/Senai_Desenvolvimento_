Console.WriteLine("Nomes em Ordem");

//Crie um programa que permita que o usuário cadastre 5 nomes em um vetor. Após o
//cadastro, o programa deve imprimir na tela os nomes cadastrados em ordem alfabética.
//Utilize um laço for para o cadastro e um método de ordenação de sua preferência (por
//exemplo, bubble sort) para ordenar os nomes.

string[] nomes = new string[5];

for(int n = 0; n < 5; n++){
    Console.WriteLine($"Digite o {n+1}º nome:");
    nomes[n] = Console.ReadLine();
}
Console.WriteLine("");

foreach(string n in nomes.Order()){
    Console.WriteLine(n);
}