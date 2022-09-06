package sd_1.scanner;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class ServerScanner {

    public static void main(String args[]){
        try {
            ServerSocket server = new ServerSocket(3322);
            System.out.println("Servidor iniciado na porta 3322");

            Socket client = server.accept();
            System.out.println("Cliente conectado do IP "+client.getInetAddress().
                    getHostAddress());
            Scanner in = new Scanner(client.getInputStream());
            
            while(in.hasNextLine()){
                System.out.println(in.nextLine());
            }

            in.close();
            server.close();

        } catch (IOException ex) {
            //Logger.getLogger(Server.class.getName()).log(Level.SEVERE, null, ex);
        	System.out.println(ex);
        }

    }

}
