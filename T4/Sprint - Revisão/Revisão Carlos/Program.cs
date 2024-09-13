Console.WriteLine("Média de Notas");
//primeiro
// float nota = float.Parse(Console.ReadLine());
// Console.WriteLine(nota > 5 ? "Aprovado" : "Reprovado");

//Segundo
// int numero = int.Parse(Console.ReadLine());
// for (int n = 1; n <= 10; n++)
// {
//     Console.WriteLine($"{numero} x {n} = {numero * n}");
// }

//Terceiro
// int par = 2;
// int soma = 0;
// while( par <= 100 )
// {
//     if(par % 2 == 0)
//     {
//         soma += par;
//     }
//     par++;
// }
// Console.WriteLine(soma);

//Quarto
//  Random numero = new Random();
 
//  int numeroCorreto = numero.Next(10);
//  int numeroChutado = 0;
//  int tentativas = 1;

//  do{
//     numeroChutado = int.Parse(Console.ReadLine());
//     if(numeroChutado != numeroCorreto){
//         Console.WriteLine(numeroChutado < numeroCorreto ? "maior" : "menor");
//         tentativas++;
//     }
//  }while(numeroChutado != numeroCorreto);

// Console.WriteLine($"Boa amiguinho! Você acertou em {tentativas} tentativas!!!");

//Quinto

// float[] Dudu = [5, 10, 8];
// float[] Guigo = [3, 5, 4];
// float[] Rik = [10, 6, 7];
// float somaNotas = 0;

// float[] medias = [0,0,0];


// foreach(float nota in Dudu){
//     somaNotas += nota;
// }
// float media = somaNotas / 3;
// medias[0] = media;
// somaNotas = 0;


// foreach(float nota in Guigo){
//     somaNotas += nota;
// }
// media = somaNotas / 3;
// medias[1] = media;
// somaNotas = 0;


// foreach(float nota in Rik){
//     somaNotas += nota;
// }
// media = somaNotas / 3;
// medias[2] = media;


// foreach(float notinhas in medias){
//     if(notinhas > 7){
//         Console.WriteLine("O aluno está aprovado");
//     }else{
//         Console.WriteLine("O aluno está reprovado");
//     }
// }

Console.Beep(4000,5000);