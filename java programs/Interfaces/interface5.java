interface Prog1{
	void display();
}
interface Prog2{
	void display();
}
public class interface5 implements Prog1,Prog2{
	public void display(){
		System.out.println("Display Method");
	}
	public static void main(String[] args){
		interface5 p1 = new interface5();
		p1.display();
	}
}