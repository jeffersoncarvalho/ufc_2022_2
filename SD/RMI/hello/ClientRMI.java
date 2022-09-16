

import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class ClientRMI {

	public static void main(String[] args) {
		String host = (args.length < 1) ? null : args[0];
		try {
			Registry registry = LocateRegistry.getRegistry(host);
			HelloRMI helloRMIStub = (HelloRMI)registry.lookup("HelloRMI");
			String msg = helloRMIStub.sayHello();
			Integer soma = helloRMIStub.somar(3, 4);
			System.out.println(msg);
			System.out.println(soma);
		} catch (RemoteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NotBoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
