package ufcqx.object;

import java.io.IOException;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.net.UnknownHostException;

public class ClientObject {
	
	private Socket client;
	
	public ClientObject() {
		try {
			this.client = new Socket("127.0.0.1",ServerObject.port);
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public void sendObject(Person person) {
		//PrintStream out;
		ObjectOutputStream out;
		try {
			out = new ObjectOutputStream(this.client.getOutputStream());
			out.writeObject(person);
			out.flush();
			out.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		ClientObject client = new ClientObject();
		client.sendObject(new Person("Jefferson", 40));
	}

}
