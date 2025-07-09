class Parent {
    Parent() {
        System.out.println("Parent Default Constructor");
    }

    Parent(int x) {
        System.out.println("Parent Arg Constructor: " + x);
    }
}

class Child extends Parent {
    Child() {
        super(); // calls parent default constructor
        System.out.println("Child Default Constructor");
    }

    Child(int x) {
        super(x); // calls parent parameterized constructor
        System.out.println("Child Arg Constructor: " + x);
    }

    public static void main(String[] args) {
        new Child();
        new Child(50);
    }
}
