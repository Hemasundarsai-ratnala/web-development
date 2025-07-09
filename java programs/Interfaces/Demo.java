 interface MyInterface {
    int x = 10; 
    String name = "Hema";

    void show();
}

class Demo implements MyInterface {
    public void show() {
        System.out.println("Method inside interface");
    }

    public static void main(String[] args) {
        Demo d = new Demo();
        d.show();
        System.out.println("x = " + x);
        System.out.println("name = " + name);
    }
}
