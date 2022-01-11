programa
{
	
	funcao inicio()
	{
		cadeia verdade[4] = {"Você é gay", "Você é careca", "Você é corno", "Você é calvo"}
		inteiro cor

		escreva("Escolha uma cor e eu direi uma verdade sobre você:\n(0) Rosa\t (2) Azul\n(1) Verde\t (3) Preto\n")
		leia(cor)

		se(cor >=0 e cor <3){
			escreva(verdade[cor])

		}senao{
			escreva("escolha um numero válido")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 223; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */