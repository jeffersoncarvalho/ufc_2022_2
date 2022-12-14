package ufcqx.servethread;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class ServerScannerThread {
	
	public final static int port = 8084;
	
	
	public static void main(String[] args) {
		
		int numClients = 0;
		
		try {
			//iniciando o servidor
			ServerSocket server = new ServerSocket(ServerScannerThread.port);
			System.out.println("Servidor iniciado na porta " + ServerScannerThread.port);
			
			//aceitando um cliente
			while(true) {
				
				Socket client = server.accept();
				numClients ++ ;
				System.out.println("Cliente " + numClients + " conectado do IP: " 
				+ client.getInetAddress().getHostAddress());
				new ServerClientThread(client, numClients).start();
			}
			//server.close();
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
