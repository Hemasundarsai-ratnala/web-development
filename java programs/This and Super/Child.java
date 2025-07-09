class Parent {
    int x = 100;
    String msg = "Hello from Parent";
}

class Child extends Parent {
    void show() {
        System.out.println("Using super: " + super.x + ", " + super.msg);
    }

    public static void main(String[] args) {
        Child c = new Child();
        c.show();
    }
}
