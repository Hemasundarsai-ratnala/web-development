interface A {
    void show();
}

interface B extends A {
    void display();
}

class Interface7 implements B {
    public void show() {
        System.out.println("Show method from interface A");
    }

    public void display() {
        System.out.println("Display method from interface B");
    }

    public static void main(String[] args) {
        Interface7 obj = new Interface7();
        obj.show();
        obj.display();
    }
}
