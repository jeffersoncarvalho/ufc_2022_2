

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface HelloRMI extends Remote{
	
	String sayHello() throws RemoteException;
	Integer somar(Integer x, Integer y) throws RemoteException;

}
