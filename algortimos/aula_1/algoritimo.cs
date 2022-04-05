String nome;
int N1;
int N2;
int N3;
double media;


// Seção de Comandos, procedimento, funções, operadores, etc... 
Console.WriteLine("Informe o nome do aluno");
nome = Console.ReadLine();
Console.WriteLine ("Informe a primeira nota:");
N1 = Convert.ToInt32(Console.ReadLine());
Console.WriteLine ("Informe a segunda nota:");
N2 = Convert.ToInt32(Console.ReadLine());
Console.WriteLine ("Informe a terceira nota");
N3 = Convert.ToInt32(Console.ReadLine());

Console.WriteLine ("A nota 1 foi: {0}" ,N1);
Console.WriteLine ("A nota 2 foi: {0}" ,N2);
Console.WriteLine ("A nota 3 foi: {0}" ,N3);

media = (N1 + N2 + N3 ) /3;

// Exibir utilizando a var "Total":
Console.WriteLine ("{0} sua média é {1}", nome ,media);

