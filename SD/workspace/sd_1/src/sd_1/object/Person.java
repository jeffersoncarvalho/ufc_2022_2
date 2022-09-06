package sd_1.object;

import java.io.Serializable;

public class Person implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	public String name;
	public Integer age;
 	
	public Person(String name, Integer age) {
		 this.name = name;
		 this.age = age;
	}

	@Override
	public String toString() {
		return "Person [name=" + name + ", age=" + age + "]";
	}
	
	
}
