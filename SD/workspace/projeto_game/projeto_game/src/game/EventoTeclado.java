package game;

import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;

public class EventoTeclado extends KeyAdapter {

	private Tabuleiro tabuleiro;
	private PainelDesenho painelDesenho;
	
	public EventoTeclado(Tabuleiro tabuleiro, PainelDesenho paindelDesenho) {
		this.tabuleiro = tabuleiro;
		this.painelDesenho = paindelDesenho;
	}
	
	@Override
	public void keyPressed(KeyEvent e) {
		int key = e.getKeyCode();

		switch (key) {
		case KeyEvent.VK_LEFT:
			// esquerda
			this.tabuleiro.heroiLEFT();
			break;
		case KeyEvent.VK_RIGHT:
			// direita
			this.tabuleiro.heroiRIGHT();
			break;
		case KeyEvent.VK_UP:
			// cima
			this.tabuleiro.heroiUP();
			break;
		case KeyEvent.VK_DOWN:
			// baixo
			this.tabuleiro.heroiDOWN();
			break;
		}// switch
		this.painelDesenho.repaint();
	}

}
