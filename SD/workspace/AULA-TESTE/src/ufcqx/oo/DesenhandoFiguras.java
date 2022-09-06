package ufcqx.oo;

public class DesenhandoFiguras {

	public static void main(String[] args) {
		
		Figura figuras[] = new Figura[2];
		figuras[0] = new Circulo();
		figuras[1] = new Quadrado();
		
		for(int i=0; i<figuras.length; i++) {
			figuras[i].desenhar();
		}
	}
}
