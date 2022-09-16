package invocation;

public class Pincipal {

	public static void main(String[] args) {
		Hello hello = new HelloImpl();
		System.out.println(hello.sayHello());
	}
}
