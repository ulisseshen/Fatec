nome_aluno = input("Digite o nome do aluno:")
nota_1 = input("Digite a nota 1:")
nota_2 = input("Digite a nota 2:")
nota_3 = input("Digite a nota 3:")

soma_das_notas = int(nota_1) + int(nota_2) + int(nota_3)

print("Nota: ", soma_das_notas)

print("Nota Um: ", nota_1)

print("Nota Dois: ",nota_2)

print("Nota Três: ", nota_3)

if (soma_das_notas >= 6):
   print("Aprovado!!!")

if (soma_das_notas < 6):
    print("Reprovado... VIXEEEE")  
    
if (soma_das_notas >= 9):
    print("VOCÊ É O ALUNO NINJA!!!")
