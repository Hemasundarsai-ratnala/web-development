interface Prog1{
	void message();
}
class Prog2 implements Prog1{
	public void message(){
		System.out.println("Instance Block");
	}
}

public class interface3{
	public static void main(String[] args){
		Prog2 p= new Prog2();
		p.message();
	}
}