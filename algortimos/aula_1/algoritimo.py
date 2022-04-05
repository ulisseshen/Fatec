# Seção de Comandos, procedimento, funções, operadores, etc... 
nome = input("Informe o nome do aluno:")
N1 = int(input ("Informe a primeira nota:"))
N2 = input ("Informe a segunda nota:")
N3 = input ("Informe a terceira nota:")

print ("A nota 1 foi:" ,N1)
print ("A nota 2 foi:" ,N2)
print ("A nota 3 foi:" ,N3)

media = (int(N1) + int(N2) + int(N3)) / 3

print (nome, "sua média é" ,media)