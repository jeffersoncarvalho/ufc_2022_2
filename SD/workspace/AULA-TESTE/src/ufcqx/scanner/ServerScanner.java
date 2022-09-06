package ufcqx.scanner;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class ServerScanner {
	
	public final static int port = 80;
	
	public static void main(String[] args) {
		
		try {
			//iniciando o servidor
			ServerSocket server = new ServerSocket(ServerScanner.port);
			System.out.println("Servidor iniciado na porta " + ServerScanner.port);
			
			//aceitando um cliente
			Socket client = server.accept();
			System.out.println("Cliente conectado do IP: " 
			+ client.getInetAddress().getHostAddress());
			
			//ler os dados vindos do cliente
			Scanner in = new Scanner(client.getInputStream());
			//System.out.println(in.hasNextLine());
			while(in.hasNextLine()) {
				System.out.println(in.nextLine());
			}
			
			in.close();
			server.close();
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
