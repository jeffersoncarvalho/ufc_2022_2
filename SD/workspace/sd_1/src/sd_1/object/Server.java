package sd_1.object;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {

    public static void main(String args[]){
        try {
            ServerSocket server = new ServerSocket(3322);
            System.out.println("Servidor iniciado na porta 3322");

            Socket client = server.accept();
            System.out.println("Cliente conectado do IP "+client.getInetAddress().
                    getHostAddress());
            ObjectInputStream in = new ObjectInputStream(client.getInputStream());
            
            Person person = (Person)in.readObject();
            System.out.println(person);

            in.close();
            server.close();

        } catch (IOException ex) {
            //Logger.getLogger(Server.class.getName()).log(Level.SEVERE, null, ex);
        	System.out.println(ex);
        } catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

    }

}
