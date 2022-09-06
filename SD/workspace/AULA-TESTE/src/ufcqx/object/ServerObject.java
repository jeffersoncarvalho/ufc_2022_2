package ufcqx.object;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class ServerObject {
	
	public static final int port = 8084;
	
	public static void main(String[] args) {
		
		try {
			//iniciando o servidor
			ServerSocket server = new ServerSocket(ServerObject.port);
			System.out.println("Servidor iniciado na porta " + ServerObject.port);
			
			//aceitando um cliente
			Socket client = server.accept();
			System.out.println("Cliente conectado do IP: " 
			+ client.getInetAddress().getHostAddress());
			
			//ler os dados vindos do cliente
			//Scanner in = new Scanner(client.getInputStream());
			ObjectInputStream in = new ObjectInputStream(client.getInputStream());
			
			Object o = in.readObject();
			if(o!=null) {
				Person person = (Person)o;
				System.out.println(person.toString());
			}
			
			
			in.close();
			server.close();
			
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}

}
