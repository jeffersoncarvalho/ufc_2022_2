package ufcqx.servethread;

import java.io.IOException;
import java.io.PrintStream;
import java.net.Socket;
import java.util.Scanner;

public class ServerClientThread extends Thread {

	private Socket client;
	private int id;
	private PrintStream out;

	public ServerClientThread(Socket client, int id) {
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
		// ler os dados vindos do cliente
		Scanner in;
		try {
			in = new Scanner(client.getInputStream());
			// System.out.println(in.hasNextLine());
			while (in.hasNextLine()) {
				String msg = "";
				msg = in.nextLine();
				System.out.println(
						client.getInetAddress().getHostAddress() + "[" + this.id + "] SERVER TERMINAL >>>> " + msg);
				if (msg.equalsIgnoreCase("oi")) {
					this.sendMessage("Tudo bom?");
				} else if (msg.equalsIgnoreCase("tchau")) {
					this.sendMessage("Ateh mais");
				} else {
					this.sendMessage("Nao entendi...");
				}

			}

			in.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	private void sendMessage(String message) {

		this.out.println(message);
		this.out.flush();
		// out.close(); //fechando o out.
	}

}
