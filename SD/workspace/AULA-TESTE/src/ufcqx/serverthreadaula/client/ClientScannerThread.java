package ufcqx.serverthreadaula.client;

import java.io.IOException;
import java.io.PrintStream;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

import ufcqx.serverthreadaula.server.ServerScannerThread;

public class ClientScannerThread {
	
	private Socket client;
	private PrintStream out;
	private Scanner in;
	
	public ClientScannerThread() {
		try {
			this.client = new Socket("172.18.102.141",ServerScannerThread.port);
			this.out = new PrintStream(this.client.getOutputStream());
			this.in = new Scanner(this.client.getInputStream());
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		Thread t = new Thread() {
			public void run() {
				while (in.hasNextLine()) {
					System.out.println(
							"CLIENT >>> " +
							in.nextLine());
				}
				in.close();
			}
		};
		t.start();
	}
	
	public void sendMessage(String message) {
		if(this.out==null) return;
		this.out.println(message);
		this.out.flush();
		//out.close(); //fechando o out.
	}
	
	public void closeConnection() {
		if(this.out!=null)
			this.out.close();
	}
	
	/*public static void main(String[] args) {
		ClientScannerThread client = new ClientScannerThread();
		client.sendMessage("Ol� mundo dos Sistemas Distribu�dos!!!");
	}*/

}
