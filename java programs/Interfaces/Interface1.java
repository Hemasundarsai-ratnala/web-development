interface Prog1 {
    void method1();  // implicitly public and abstract
}

class prog2 implements Prog1 {
    public void method1() {  // must be public
        System.out.println("Interface Method");
    }
}

public class Interface1 {
    public static void main(String[] args) {
        prog2 p = new prog2();
        p.method1();
    }
}
