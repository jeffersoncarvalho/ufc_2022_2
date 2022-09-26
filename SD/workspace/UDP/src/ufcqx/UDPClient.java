package ufcqx;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.SocketException;
import java.net.UnknownHostException;

public class UDPClient {
	
	private DatagramSocket socket;
	private InetAddress address;
	private byte[] buffer;
	
	public UDPClient() {
		try {
			//inicializando o socket e o endereço
			this.socket = new DatagramSocket();
			//endereço do servidor
			this.address = InetAddress.getByName("localhost");
		} catch (SocketException e) {
			e.printStackTrace();
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
	}
	
	public void sendMessage(String message) {
		//transformando a string em um array de bytes (buffer)
		this.buffer = message.getBytes();
		DatagramPacket packet = new DatagramPacket(this.buffer,
												   this.buffer.length,
												   address, //destino ip
												   4446); //destino porta
		try {
			//enviando o pacote para o servidor
			this.socket.send(packet);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public static void main(String[] args) {
		UDPClient client = new UDPClient();
		client.sendMessage("Oi, tudo bem?");
	}

}
