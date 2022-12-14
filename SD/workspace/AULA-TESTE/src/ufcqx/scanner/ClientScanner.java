package ufcqx.scanner;

import java.io.IOException;
import java.io.PrintStream;
import java.net.Socket;
import java.net.UnknownHostException;

public class ClientScanner {
	
	private Socket client;
	private PrintStream out;
	
	public ClientScanner() {
		try {
			this.client = new Socket("127.0.0.1",ServerScanner.port);
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public void sendMessage(String message) {
		
		try {
			out = new PrintStream(this.client.getOutputStream());
			out.println(message);
			out.flush();
			//out.close(); //fechando o out.
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public void closeConnection() {
		if(this.out!=null)
			this.out.close();
	}
	
	public static void main(String[] args) {
		ClientScanner client = new ClientScanner();
		client.sendMessage("Ol� mundo dos Sistemas Distribu�dos!!!");
	}

}
