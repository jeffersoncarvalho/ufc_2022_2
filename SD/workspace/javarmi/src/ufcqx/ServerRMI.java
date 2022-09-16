package ufcqx;

import java.rmi.AlreadyBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;

public class ServerRMI implements HelloRMI {

	public ServerRMI() {
		System.out.println("Servidor Criado!");
	}

	@Override
	public String sayHello() throws RemoteException {
		return "Hello RMI!";
	}

	@Override
	public Integer somar(Integer x, Integer y) throws RemoteException {
		Integer soma = x + y;
		return soma;
	}

	public static void main(String[] args) {
		try {
			ServerRMI serverRMI = new ServerRMI();
			HelloRMI stubHelloRMI = (HelloRMI)UnicastRemoteObject.
					exportObject(serverRMI, 0);
			Registry registry = LocateRegistry.getRegistry();
			registry.bind("HelloRMI",stubHelloRMI);
		} catch (RemoteException e) {
			e.printStackTrace();
		} catch (AlreadyBoundException e) {
			e.printStackTrace();
		}
	}

}
