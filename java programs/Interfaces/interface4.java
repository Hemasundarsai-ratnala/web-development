interface Prog1{
	void display();
}
interface Prog2{
	void Message();
}
public class interface4 implements Prog1,Prog2{
	public void display(){
		System.out.println("Display Method");
	}
	public void Message(){
		System.out.println("Message Method");
	}
	public static void main(String[] args){
		interface4 p1 = new interface4();
		p1.display();
		p1.Message();
	}
}