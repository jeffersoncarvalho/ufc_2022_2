package ufcqx.serverthreadaula.server;

import java.io.IOException;
import java.io.PrintStream;
import java.net.Socket;
import java.util.Scanner;

//TRATADOR DE CLIENTES SOCKETS
public class ServerScannerWorkerThread extends Thread {

	private Socket client;
	private int id;
	private PrintStream out;

	public ServerScannerWorkerThread(Socket client, int id) {
		this.client = client;
		this.id = id;
		try {
			this.out = new PrintStream(this.client.getOutputStream());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public void run() {
		Scanner in;
		try {
			in = new Scanner(this.client.getInputStream());
			while (in.hasNextLine()) {
				String str = in.nextLine();
				System.out.println(
						client.getInetAddress().getHostAddress() +
						" ["
						+ this.id
						+ "] SERVER >>> " +
						str);
				if(str.equals("oi")) {
					this.sendMessage("Tudo bom?");
				}else if(str.equals("tchau")){
					this.sendMessage("Até mais!");
				}else {
					this.sendMessage("Não entendi!");
				}
			}
			in.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	private void sendMessage(String message) {
		if(this.out==null) return;
		this.out.println(message);
		this.out.flush();
	}

}
