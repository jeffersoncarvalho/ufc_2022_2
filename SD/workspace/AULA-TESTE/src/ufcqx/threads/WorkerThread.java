package ufcqx.threads;

public class WorkerThread extends Thread{

	private int id;
	private int in;
	private int out;
	
	public WorkerThread(int id) {
		this.id = id;
	}
	
	@Override
	public void run() {
		this.work();
	}
	
	private void work() {
		
		System.out.println("Worker " + this.id + " começou a trabalhar...");
		//simulando processamento
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		System.out.println("Worker " + this.id + " terminou de trabalhar...");
		
		//resultado da simulação de um processamento fake
		this.out = this.in * 10;
	}
	
	public int getIn() {
		return in;
	}

	public void setIn(int in) {
		this.in = in;
	}

	public int getOut() {
		return out;
	}

	public void setOut(int out) {
		this.out = out;
	}
	
}
