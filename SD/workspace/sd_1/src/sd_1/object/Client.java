package sd_1.object;

import java.io.IOException;
import java.io.ObjectOutputStream;
import java.net.Socket;

public class Client {
	
    private Socket client;
     
    
    public Client() {
		this.initClient();
	}
	
	private void initClient(){
        try {
            this.client = new Socket("127.0.0.1",3322);
        } catch (IOException ex) {
            //Logger.getLogger(FCliente.class.getName()).log(Level.SEVERE, null, ex);
        	System.out.println(ex);
        }
    }
	
	public void sendMessage(Person person) {
		ObjectOutputStream out;
		try {
			out = new ObjectOutputStream(this.client.getOutputStream());
			out.writeObject(person);
			out.flush();
			out.close();
			this.client.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
         
	}
	
	public static void main(String[] args) {
		Client client = new Client();
		client.sendMessage(new Person("Jefferson", 40));
	}
}
