import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class ClientRMI {

	public static void main(String[] args) {
		try {
			Registry registry = LocateRegistry.getRegistry("127.18.102.41");
			HelloRMI helloRMIStub = (HelloRMI)registry.lookup("HelloRMI");
			String msg = helloRMIStub.sayHello();
			Integer soma = helloRMIStub.somar(10, 9);
			helloRMIStub.talkToServer("Jefferson");
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
