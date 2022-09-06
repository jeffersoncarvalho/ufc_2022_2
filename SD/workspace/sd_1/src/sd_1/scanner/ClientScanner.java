package sd_1.scanner;

import java.io.IOException;
import java.io.PrintStream;
import java.net.Socket;

public class ClientScanner {
	
    private Socket client;
     
    
    public ClientScanner() {
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
	
	public void sendMessage(String message) {
		PrintStream out;
		try {
			out = new PrintStream(this.client.getOutputStream());
			out.println(message);
			out.flush();
			//out.close();
			//this.client.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}    
	}
	
	public static void main(String[] args) {
		ClientScanner client = new ClientScanner();
		client.sendMessage("Boa tarde!");
	}
}
