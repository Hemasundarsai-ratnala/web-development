interface Prog1 {
    void method1();
	void method2();
}

class prog2 implements Prog1 {
    public void method1() {  
        System.out.println("Interface Method1");
    }
	public void method2() {  
        System.out.println("Interface Method2");
    }
}

public class Interface2 {
    public static void main(String[] args) {
        prog2 p = new prog2();
        p.method2();
    }
}
