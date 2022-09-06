package ufcqx.serverthreadaula.server;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

//SERVIDOR PRINCIPAL
public class ServerScannerThread {
	
	public final static int port = 8085;
	
	public static void main(String[] args) {
		
		int numClients = 0;
		
		try {
			//iniciando o servidor
			ServerSocket server = new ServerSocket(ServerScannerThread.port);
			System.out.println("Servidor iniciado na porta " + ServerScannerThread.port);
			
			//aceitando um cliente
			while(true) {
				Socket client = server.accept();
				numClients ++;
				System.out.println("Cliente conectado do IP: " 
				+ client.getInetAddress().getHostAddress());
				new ServerScannerWorkerThread(client, numClients).start();
			}
		
			//TODO CLIENTE
			//server.close();
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
