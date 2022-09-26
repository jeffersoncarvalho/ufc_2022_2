package ufcqx;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket; //UDP
import java.net.InetAddress;
import java.net.SocketException;

public class UDPServer extends Thread{
	
	private DatagramSocket socket;
	private boolean running = true;
	private byte[] buffer = new byte[256];
	
	public UDPServer() {
		try {
			this.socket = new DatagramSocket(4446);
			System.out.println("Servidor iniciado!");
		} catch (SocketException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void run() {
		//esperando pacotes dos clientes.
		while(this.running) {
			DatagramPacket packet = new DatagramPacket(this.buffer, this.buffer.length);
			try {
				//recebendo dados da rede de um cliente
				this.socket.receive(packet);
				
				//pegar as informações do cliente que me enviou o pacote acima
				//ip do cliente:
				InetAddress address = packet.getAddress();
				//port do cliente
				int port = packet.getPort();
				
				//transformando o pacote em algo que um humano entenda (uma string)
				//devo iniciar os dados desde zero (0) até o tamanho total do pacote packet.getLength()
				String received = new String(packet.getData(),0,packet.getLength());
				
				//imprimindo as informações que consegui acima.
				System.out.println("IP: " + address.getHostAddress() + " PORTA: " + port);
				System.out.println("MSG: " + received);
				
				
			} catch (IOException e) {
				
				e.printStackTrace();
			} 
		}
		this.socket.close();
	}
	
	public static void main(String[] args) {
		new UDPServer().start();
	}
	
}
