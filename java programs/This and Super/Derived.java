class Base {
    void show() {
        System.out.println("Base show()");
    }
}

class Derived extends Base {
    void display() {
        super.show();      
        this.sayHello();   
    }

    void sayHello() {
        System.out.println("Derived sayHello()");
    }

    public static void main(String[] args) {
        new Derived().display();
    }
}
