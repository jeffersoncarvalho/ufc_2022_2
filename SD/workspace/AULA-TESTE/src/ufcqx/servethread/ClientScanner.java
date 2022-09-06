package ufcqx.servethread;

import java.io.IOException;
import java.io.PrintStream;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

public class ClientScanner {
	
	private Socket client;
	private PrintStream out;
	private Scanner in;
	
	public ClientScanner() {
		try {
			this.client = new Socket("127.0.0.1",ServerScannerThread.port);
			this.out = new PrintStream(this.client.getOutputStream());
			this.in = new Scanner(client.getInputStream());
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		Thread t = new Thread() {
			@Override
			public void run() {
				while (in.hasNextLine()) {
					System.out.println("CLIENT TERMINAL >>>> " 
							+ in.nextLine());
				
				}
			}
		};
		t.start();
	}
	
	public void sendMessage(String message) {
		
		out.println(message);
		out.flush();
		//out.close(); //fechando o out.
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
