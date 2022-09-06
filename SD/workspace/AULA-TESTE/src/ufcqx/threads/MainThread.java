package ufcqx.threads;

public class MainThread {

	public static void main(String[] args) {
		
		System.out.println("CLASSE PRINCIPAL");
		WorkerThread wt1 = new WorkerThread(1);
		WorkerThread wt2 = new WorkerThread(2);
		WorkerThread wt3 = new WorkerThread(3);
		
		//in -> entrada de trabalho
		wt1.setIn(10);
		wt2.setIn(20);
		wt3.setIn(30);
		
		//start -> armazena o tempo inicial do processamento do trabalho
		long start = System.currentTimeMillis();
		wt1.start();
		wt2.start();
		wt3.start();
		//BARREIRA
		try {
			wt1.join();
			wt2.join();
			wt3.join();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		long end = System.currentTimeMillis();
	
		System.out.println(wt1.getOut() + 
				" " + wt2.getOut() +
				" " + wt3.getOut() + ", em " + (end-start));
		
	}
}
